"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import BiodataForm from "@/components/BiodataForm";
import { Biodata, initialData } from "@/lib/biodata";
import { useRouter } from "next/navigation";
import { translateBiodata } from "@/lib/translateBiodata";
import { useUITranslation } from "@/lib/useUITranslation";

// Module-level flag: resets to false on every browser refresh (module re-executes),
// stays true across SPA navigations within the same browser session.
let _hasRestoredMissingFields = false;

function HelpSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-8 p-5 md:p-6 bg-white dark:bg-black rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between text-left group"
                aria-expanded={isOpen}
            >
                <div className="flex items-center gap-3">
                    <div className="p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg text-indigo-600 dark:text-indigo-400">
                        <HelpCircle className="w-5 h-5" />
                    </div>
                    <div>
                        <h2 className="text-zinc-900 dark:text-zinc-100 font-semibold text-base md:text-lg">Help &amp; Tips for Filling Biodata</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">Not sure what to write? Click for guidance</p>
                    </div>
                </div>
                <div className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
            </button>
            
            {/* Content always in DOM for SEO — only visually hidden when collapsed */}
            <div className={`mt-6 pt-6 border-t border-zinc-100 dark:border-zinc-800 space-y-6 text-sm text-zinc-600 dark:text-zinc-400 ${isOpen ? "block" : "hidden"}`}>
                <div>
                    <h3 className="font-medium text-zinc-900 dark:text-white mb-2">Personal Details</h3>
                    <p className="leading-relaxed">Use your full formal name. For Date of Birth, include the time and place of birth if you use Kundali matching. State your exact height (e.g., 5&apos; 8&quot;) and your current clear occupation and annual income.</p>
                </div>
                <div>
                    <h3 className="font-medium text-zinc-900 dark:text-white mb-2">Family Details</h3>
                    <p className="leading-relaxed">Provide your father&apos;s and mother&apos;s names along with their occupations (e.g., &quot;Businessman&quot;, &quot;Homemaker&quot;). For siblings, clearly state how many brothers/sisters and whether they are married.</p>
                </div>
                <div>
                    <h3 className="font-medium text-zinc-900 dark:text-white mb-2">Contact Info</h3>
                    <p className="leading-relaxed">Provide a valid mobile number, preferably one active on WhatsApp for easy communication. Include a professional email address and a complete residential address.</p>
                </div>
                <div>
                    <h3 className="font-medium text-zinc-900 dark:text-white mb-2">Photo Tips</h3>
                    <p className="leading-relaxed">Choose a clear, recent, front-facing profile photo with a decent background. Avoid sunglasses or heavy casual filters. <a href="/articles/biodata-tips" className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-medium hover:underline">Read more photo tips</a>.</p>
                </div>
            </div>
        </div>
    );
}

export default function CreatePageClient() {
    const [data, setData] = useState<Biodata>(initialData);
    const [isLoaded, setIsLoaded] = useState(false);
    const [language, setLanguage] = useState("en");
    const router = useRouter();
    const { t } = useUITranslation(language);

    useEffect(() => {
        const loadInitialData = async () => {
            const params = new URLSearchParams(window.location.search);
            const queryLocale = params.get("locale");

            // biodataLang = which language the UI / create-form should display
            // biodataDataLang = the language the form data (labels) was last saved in
            const savedLang = queryLocale || localStorage.getItem("biodataLang") || "en";
            if (queryLocale) localStorage.setItem("biodataLang", queryLocale);

            const savedDataLang = localStorage.getItem("biodataDataLang") || "en";
            let finalData = initialData;

            const saved = localStorage.getItem("biodataData");
            if (saved) {
                try {
                    const parsed = JSON.parse(saved);

                    // Migrate professional details to personal details for existing local storage
                    if (!parsed.personalDetails.education) {
                        parsed.personalDetails.education = parsed.professionalDetails?.education || initialData.personalDetails.education;
                    }
                    if (!parsed.personalDetails.occupation) {
                        parsed.personalDetails.occupation = parsed.professionalDetails?.occupation || initialData.personalDetails.occupation;
                    }
                    if (!parsed.personalDetails.annualIncome) {
                        parsed.personalDetails.annualIncome = parsed.professionalDetails?.annualIncome || initialData.personalDetails.annualIncome;
                    }

                    // Restore any standard fields that were accidentally deleted,
                    // but ONLY on a hard browser reload — not on client-side navigation.
                    const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
                    if (nav?.type === "reload" && !_hasRestoredMissingFields) {
                        _hasRestoredMissingFields = true;
                        const sections = ["personalDetails", "familyDetails", "contactDetails"] as const;
                        for (const section of sections) {
                            for (const key of Object.keys(initialData[section])) {
                                if (!(key in parsed[section])) {
                                    (parsed[section] as any)[key] = (initialData[section] as any)[key];
                                }
                            }
                        }
                    }

                    // If the UI language changed since data was last saved, auto-translate labels.
                    // translateBiodata only replaces labels that are still at their default values
                    // (English or previous-language defaults), so user customizations are preserved.
                    if (savedDataLang !== savedLang) {
                        try {
                            finalData = await translateBiodata(parsed, savedDataLang, savedLang);
                            localStorage.setItem("biodataDataLang", savedLang);
                        } catch {
                            finalData = parsed;
                        }
                    } else {
                        finalData = parsed;
                    }
                } catch (e) {
                    console.error("Failed to parse saved biodata");
                }
            } else if (savedLang !== "en") {
                // Fresh session with no saved data — translate initialData (English defaults) to chosen language.
                try {
                    finalData = await translateBiodata(initialData, "en", savedLang);
                    localStorage.setItem("biodataDataLang", savedLang);
                } catch {
                    finalData = initialData;
                }
            }

            setData(finalData);
            setLanguage(savedLang);
            setIsLoaded(true);
        };

        loadInitialData();
    }, []);

    const handleDataChange = (newData: Biodata) => {
        setData(newData);
        localStorage.setItem("biodataData", JSON.stringify(newData));
    };

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        localStorage.setItem("biodataLang", lang);
        // Track the language the form data (labels) is now in
        localStorage.setItem("biodataDataLang", lang);
    };

    const handlePreview = () => {
        router.push("/preview");
    };

    if (!isLoaded) return <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center">Loading...</div>;

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
            <header className="h-16 bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-6 sticky top-0 z-20">
                <div className="flex items-center gap-4">
                    <Link href="/" className="p-2 -ml-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">{t("create.title") || "Create Biodata"}</h1>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handlePreview} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm shadow-indigo-500/20">
                        {t("create.previewBtn") || "Preview & Select Theme"}
                    </button>
                </div>
            </header>

            <main className="max-w-[800px] mx-auto p-4 md:p-6 lg:p-8 min-h-[calc(100vh-64px)] overflow-y-auto px-4 pb-24">
                <BiodataForm data={data} onChange={handleDataChange} language={language} onLanguageChange={handleLanguageChange} />

                <HelpSection />

                <div className="mt-8 flex justify-end">
                    <button onClick={handlePreview} className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm shadow-indigo-500/20">
                        {t("create.previewBtn") || "Preview & Select Theme"}
                    </button>
                </div>
            </main>
        </div>
    );
}
