"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Palette } from "lucide-react";
import BiodataPreview from "@/components/BiodataPreview";
import { Biodata, initialData } from "@/app/create/page";
import { toPng } from 'html-to-image';
import jsPDF from "jspdf";
import { ThemeMeta } from "@/components/BiodataPreview";

export default function PreviewPage() {
    const [data, setData] = useState<Biodata>(initialData);
    const [template, setTemplate] = useState<string>("theme-1.png");
    const [themeMeta, setThemeMeta] = useState<ThemeMeta | undefined>();
    const [themes, setThemes] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

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

        fetchThemes();

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
        setIsLoaded(true);
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

    const handleDownloadPDF = async () => {
        const element = document.getElementById("biodata-preview-container");
        if (!element) return;
        try {
            const imgData = await toPng(element, { quality: 1, pixelRatio: 2 });
            // A4 dimensions: 210 x 297 mm
            const pdf = new jsPDF("p", "mm", "a4");
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (element.offsetHeight * pdfWidth) / element.offsetWidth;
            pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${data.personalDetails.fullName?.value || "Biodata"}.pdf`);
        } catch (error) {
            console.error("Error generating PDF:", error);
        }
    };

    const handleDownloadPNG = async () => {
        const element = document.getElementById("biodata-preview-container");
        if (!element) return;
        try {
            const imgData = await toPng(element, { quality: 1, pixelRatio: 2 });
            const link = document.createElement("a");
            link.href = imgData;
            link.download = `${data.personalDetails.fullName?.value || "Biodata"}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error generating PNG:", error);
        }
    };

    if (!isLoaded) return <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans flex flex-col">
            {/* Header */}
            <header className="h-16 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-20 shrink-0">
                <div className="flex items-center gap-4">
                    <Link href="/create" className="p-2 -ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <div className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">Preview & Download</div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handleDownloadPNG} className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-700 bg-zinc-100 hover:bg-zinc-200 dark:text-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                        PNG
                    </button>
                    <button onClick={handleDownloadPDF} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm shadow-indigo-500/20">
                        <Download className="w-4 h-4" />
                        PDF
                    </button>
                </div>
            </header>

            {/* Main Content Area */}
            <main className="flex-1 overflow-hidden flex flex-col lg:flex-row max-w-[1600px] w-full mx-auto">
                <div className="flex-1 bg-zinc-200/50 dark:bg-zinc-900/50 p-4 md:p-8 overflow-y-auto flex justify-center items-start lg:h-[calc(100vh-64px)] pb-32 lg:pb-8">
                    {/* The Preview wrapper that ensures the 1240x1754 aspect ratio is maintained */}
                    <div
                        id="biodata-preview-container"
                        className="relative w-full shadow-2xl bg-white overflow-hidden"
                        style={{ maxWidth: '800px', aspectRatio: '1240/1754' }}
                    >
                        {/* Background Image */}
                        <img
                            src={`/themes/${template}`}
                            alt="Theme Background"
                            className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
                        />
                        {/* Foreground Content */}
                        <div className="relative z-10 w-full h-full p-[6%] overflow-hidden">
                            <BiodataPreview data={data} template={template} themeMeta={themeMeta} />
                        </div>
                    </div>
                </div>

                {/* Theme Selector Sidebar / Bottom Bar */}
                <div className="w-full lg:w-48 xl:w-64 bg-white dark:bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-200 dark:border-zinc-800 p-4 xl:p-6 fixed bottom-0 left-0 lg:relative lg:h-[calc(100vh-64px)] overflow-y-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)] lg:shadow-none z-10 block">
                    <div className="flex items-center gap-2 mb-4 xl:mb-6">
                        <Palette className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                        <h2 className="text-base xl:text-lg font-semibold text-zinc-900 dark:text-zinc-100">Choose Theme</h2>
                    </div>

                    {/* Horizontal scroll on mobile, grid on desktop */}
                    <div className="flex lg:grid lg:grid-cols-2 gap-3 pb-4 lg:pb-0 snap-x overflow-x-auto lg:overflow-visible custom-scrollbar">
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
                                <img src={`/themes/${t}`} alt={t} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col gap-3 lg:hidden">
                        <button onClick={handleDownloadPDF} className="w-full flex justify-center items-center gap-2 px-4 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm shadow-indigo-500/20">
                            <Download className="w-4 h-4" />
                            Download PDF
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
