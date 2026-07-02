"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Palette, Loader2, FileText, X } from "lucide-react";
import BiodataPreview from "@/components/BiodataPreview";
import { Biodata, initialData } from "@/lib/biodata";
import { toPng } from 'html-to-image';
import jsPDF from "jspdf";
import { ThemeMeta } from "@/components/BiodataPreview";
import { useUITranslation } from "@/lib/useUITranslation";
import LazyThemeImage from "@/components/LazyThemeImage";
import AdSlot from "@/components/AdSlot";
import { downloadAffiliatePromo } from "@/config/affiliatePromos";

declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

// ────────────────────────────────────────────────────────────────────────────
// Download Buffer Overlay
// Shows a short branded loader between the user clicking "Download" and the
// actual file generation. Lives outside #biodata-preview-container so
// html-to-image never captures it.
// ────────────────────────────────────────────────────────────────────────────

function DownloadBufferOverlay({
    type,
    countdown,
    onSkip,
}: {
    type: "pdf" | "png";
    countdown: number;
    onSkip: () => void;
}) {
    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label="Preparing your download"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        >
            <div className="relative w-full max-w-sm rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl p-8 flex flex-col items-center text-center">
                {/* Spinner + heading */}
                <div className="mb-5 flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50 dark:bg-indigo-950/40">
                    <Loader2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400 animate-spin" />
                </div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">
                    Preparing your Biodata {type.toUpperCase()}
                </h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                    This takes just a moment…
                </p>

                {/* Countdown pill */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold text-zinc-600 dark:text-zinc-300 mb-6">
                    <FileText className="w-3 h-3" />
                    Generating in {countdown}s
                </span>

                <div className="w-full rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-left dark:border-indigo-900/60 dark:bg-indigo-950/30">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-300">
                        {downloadAffiliatePromo.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-white">
                        {downloadAffiliatePromo.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                        {downloadAffiliatePromo.description}
                    </p>
                    <a
                        href={downloadAffiliatePromo.href}
                        target="_blank"
                        rel="sponsored noopener noreferrer"
                        className="mt-3 inline-flex rounded-full bg-zinc-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
                    >
                        {downloadAffiliatePromo.cta}
                    </a>
                </div>

                {/* Skip link — appears after 2s by checking countdown */}
                {countdown <= 3 && (
                    <button
                        onClick={onSkip}
                        className="absolute top-4 right-4 p-1.5 rounded-full text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        aria-label="Skip and download now"
                        title="Skip"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default function PreviewPage() {
    const [data, setData] = useState<Biodata>(initialData);
    const [template, setTemplate] = useState<string>("theme-1.png");
    const [themeMeta, setThemeMeta] = useState<ThemeMeta | undefined>();
    const [themes, setThemes] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
    const [isDownloadingPNG, setIsDownloadingPNG] = useState(false);

    // Download buffer overlay state
    const [overlayActive, setOverlayActive] = useState(false);
    const [overlayType, setOverlayType] = useState<"pdf" | "png">("pdf");
    const [overlayCountdown, setOverlayCountdown] = useState(5);
    const [pendingDownload, setPendingDownload] = useState<(() => Promise<void>) | null>(null);

    // We get the language from localStorage to know what UI language they selected
    const [language, setLanguage] = useState("en");
    const { t } = useUITranslation(language);


    useEffect(() => {
        // Fetch themes dynamically from server
        const fetchThemes = async () => {
            try {
                const res = await fetch('/api/themes');
                if (res.ok) {
                    const data = await res.json();
                    if (data.themes && data.themes.length > 0) {
                        setThemes(data.themes);
                        // Make sure the selected template actually exists in the scanned list, otherwise fallback to the first one available
                        const savedTheme = localStorage.getItem("biodataTheme");
                        if (savedTheme && data.themes.includes(savedTheme)) {
                            setTemplate(savedTheme);
                        } else {
                            setTemplate(data.themes[0]);
                        }
                    }
                }
            } catch (err) {
                console.error("Failed to fetch themes list:", err);
            }
        };

        const loadBiodataAndLanguage = () => {
            const saved = localStorage.getItem("biodataData");
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);

                    // Migrate professional details from old local storage schemas
                    if (!parsed.personalDetails.education) {
                        parsed.personalDetails.education = parsed.professionalDetails?.education || { label: "Highest Education", value: "" };
                    }
                    if (!parsed.personalDetails.occupation) {
                        parsed.personalDetails.occupation = parsed.professionalDetails?.occupation || { label: "Occupation / Job", value: "" };
                    }
                    if (!parsed.personalDetails.annualIncome) {
                        parsed.personalDetails.annualIncome = parsed.professionalDetails?.annualIncome || { label: "Annual Income", value: "" };
                    }

                    setData(parsed);
                } catch (e) {
                    console.error("Failed to parse saved biodata");
                }
            }
            const savedLang = localStorage.getItem("biodataLang");
            if (savedLang) setLanguage(savedLang);

            setIsLoaded(true);
        };

        fetchThemes();
        loadBiodataAndLanguage();
    }, []);

    // Fetch theme metadata whenever the template changes
    useEffect(() => {
        const fetchThemeMeta = async () => {
            try {
                const jsonFileName = template.replace('.png', '.json');
                const response = await fetch(`/themes/${jsonFileName}`);
                if (response.ok) {
                    const meta = await response.json();
                    setThemeMeta(meta);
                } else {
                    setThemeMeta(undefined); // Fallback to default in BiodataPreview
                }
            } catch (error) {
                console.error("Failed to load theme metadata:", error);
                setThemeMeta(undefined);
            }
        };

        fetchThemeMeta();
    }, [template]);

    // ── Core generation functions (called by the overlay after countdown) ──
    const runPDFGeneration = useCallback(async () => {
        setIsDownloadingPDF(true);
        const element = document.getElementById("biodata-preview-container");
        if (!element) { setIsDownloadingPDF(false); return; }
        try {
            const targetWidth = 2000;
            const dynamicPixelRatio = targetWidth / element.offsetWidth;
            const imgData = await toPng(element, { quality: 1, pixelRatio: dynamicPixelRatio });
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (element.offsetHeight * pdfWidth) / element.offsetWidth;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${data.personalDetails.fullName?.value || "Biodata"}.pdf`);
            window.gtag?.('event', 'file_download', { file_extension: 'pdf', theme_used: template });
        } catch (error) {
            console.error("Error generating PDF:", error);
        } finally {
            setIsDownloadingPDF(false);
        }
    }, [data, template]);

    const runPNGGeneration = useCallback(async () => {
        setIsDownloadingPNG(true);
        const element = document.getElementById("biodata-preview-container");
        if (!element) { setIsDownloadingPNG(false); return; }
        try {
            const targetWidth = 2000;
            const dynamicPixelRatio = targetWidth / element.offsetWidth;
            const imgData = await toPng(element, { quality: 1, pixelRatio: dynamicPixelRatio });
            const link = document.createElement("a");
            link.href = imgData;
            link.download = `${data.personalDetails.fullName?.value || "Biodata"}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.gtag?.('event', 'file_download', { file_extension: 'png', theme_used: template });
        } catch (error) {
            console.error("Error generating PNG:", error);
        } finally {
            setIsDownloadingPNG(false);
        }
    }, [data, template]);

    // ── Overlay launcher — shows the 5-second buffer before generating ──
    const launchDownload = useCallback((type: "pdf" | "png", generationFn: () => Promise<void>) => {
        if (isDownloadingPDF || isDownloadingPNG || overlayActive) return;
        setOverlayType(type);
        setOverlayCountdown(5);
        setPendingDownload(() => generationFn);
        setOverlayActive(true);
    }, [isDownloadingPDF, isDownloadingPNG, overlayActive]);

    // Countdown ticker — decrements every second while overlay is active
    useEffect(() => {
        if (!overlayActive) return;
        if (overlayCountdown <= 0) {
            // Time's up — run generation and close overlay
            setOverlayActive(false);
            pendingDownload?.();
            setPendingDownload(null);
            return;
        }
        const timer = setTimeout(() => setOverlayCountdown((c) => c - 1), 1000);
        return () => clearTimeout(timer);
    }, [overlayActive, overlayCountdown, pendingDownload]);

    // Skip handler — immediately triggers generation without waiting
    const handleSkip = useCallback(() => {
        setOverlayActive(false);
        pendingDownload?.();
        setPendingDownload(null);
    }, [pendingDownload]);

    // Public handlers — these are what the buttons call
    const handleDownloadPDF = () => launchDownload("pdf", runPDFGeneration);
    const handleDownloadPNG = () => launchDownload("png", runPNGGeneration);

    const adsEnabled = process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true";

    if (!isLoaded) return <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans flex flex-col lg:overflow-hidden lg:h-screen">
            {/* ── Download Buffer Overlay — rendered outside preview container ── */}
            {overlayActive && (
                <DownloadBufferOverlay
                    type={overlayType}
                    countdown={overlayCountdown}
                    onSkip={handleSkip}
                />
            )}
            {/* Header */}
            <header className="h-16 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-20 shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/create" className="p-2 -ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">{t("preview.title") || "Preview & Download"}</div>
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={handleDownloadPNG}
                        disabled={isDownloadingPDF || isDownloadingPNG}
                        className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:text-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isDownloadingPNG ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        {t("preview.downloadPng") || "PNG"}
                    </button>
                    <button
                        onClick={handleDownloadPDF}
                        disabled={isDownloadingPDF || isDownloadingPNG}
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
                    >
                        {isDownloadingPDF ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                        {t("preview.downloadPdf") || "PDF"}
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto lg:overflow-hidden">

                {/* ── Left ad column — xl+ desktop only, only when ads are enabled ── */}
                {adsEnabled && (
                    <div className="hidden xl:flex w-[300px] shrink-0 flex-col items-center justify-center px-4 bg-zinc-200/30 dark:bg-zinc-900/30 border-r border-zinc-200/60 dark:border-zinc-800/60">
                        <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-3">Advertisement</p>
                        <AdSlot
                            slotId="preview-left"
                            adSlot="YOUR_PREVIEW_LEFT_AD_SLOT_ID"
                            format="display"
                            label=""
                            className="my-0"
                        />
                    </div>
                )}

                <div className="flex-1 bg-zinc-200/50 dark:bg-zinc-900/50 p-4 md:p-8 flex flex-col items-center lg:overflow-y-auto lg:h-full">

                    {/* ── Mobile-only: thin banner above canvas, only when ads are enabled ── */}
                    {adsEnabled && (
                        <div className="xl:hidden w-full flex flex-col items-center mb-3">
                            <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest mb-1">Advertisement</p>
                            <AdSlot
                                slotId="preview-mobile-top"
                                adSlot="YOUR_PREVIEW_MOBILE_TOP_AD_SLOT_ID"
                                format="banner"
                                label=""
                                className="my-0"
                            />
                        </div>
                    )}

                    {/* The Preview wrapper that ensures the 1240x1754 aspect ratio is maintained */}
                    <div
                        id="biodata-preview-container"
                        className="relative w-full shadow-2xl bg-white overflow-hidden shrink-0 preview-container-adaptive"
                        style={{ aspectRatio: '1240/1754', containerType: 'inline-size' }}
                    >
                        {/* Background Image */}
                        <img
                            src={`/themes/${template}`}
                            alt="Theme Background"
                            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                        />
                        {/* Foreground Content */}
                        <div className="relative z-10 w-full h-full overflow-hidden">
                            <BiodataPreview data={data} template={template} themeMeta={themeMeta} />
                        </div>
                    </div>
                </div>

                {/* Theme Selector Sidebar / Bottom Bar */}
                <div className="w-full lg:w-48 xl:w-64 bg-white dark:bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-200 dark:border-zinc-800 p-4 xl:p-6 lg:relative lg:h-full lg:overflow-y-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:shadow-none z-10 shrink-0">
                    <div className="flex items-center gap-2 mb-4 xl:mb-6">
                        <Palette className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <h2 className="text-base xl:text-lg font-semibold text-zinc-900 dark:text-zinc-100">{t("preview.theme") || "Choose Theme"}</h2>
                    </div>

                    {/* Horizontal scroll on mobile, grid on desktop */}
                    <div className="flex lg:grid lg:grid-cols-2 gap-3 pb-4 lg:pb-0 snap-x snap-mandatory overflow-x-auto overscroll-x-contain lg:overflow-visible custom-scrollbar">
                        {themes.map((t) => (
                            <button
                                key={t}
                                onClick={() => {
                                    setTemplate(t);
                                    localStorage.setItem("biodataTheme", t);
                                }}
                                className={`snap-center shrink-0 w-24 xl:w-full aspect-[1240/1754] rounded-lg border-2 transition-all overflow-hidden ${template === t
                                    ? "border-indigo-600 ring-2 ring-indigo-600/20 shadow-md transform scale-105"
                                    : "border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 shadow-sm"
                                    }`}
                                title={`Select ${t}`}
                            >
                                <LazyThemeImage src={`/themes/${t}`} alt={t} className="object-cover" />
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 lg:hidden">
                        <button
                            onClick={handleDownloadPNG}
                            disabled={isDownloadingPDF || isDownloadingPNG}
                            className="w-full flex justify-center items-center gap-2 px-4 py-3 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:text-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isDownloadingPNG ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                            {t("preview.downloadPngFull") || "Download PNG"}
                        </button>
                        <button
                            onClick={handleDownloadPDF}
                            disabled={isDownloadingPDF || isDownloadingPNG}
                            className="w-full flex justify-center items-center gap-2 px-4 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm shadow-indigo-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-indigo-600"
                        >
                            {isDownloadingPDF ? <Loader2 className="w-4 h-4 animate-spin" /> : <Download className="w-4 h-4" />}
                            {t("preview.downloadPdfFull") || "Download PDF"}
                        </button>
                    </div>
                </div>
            </main >
        </div >
    );
}
