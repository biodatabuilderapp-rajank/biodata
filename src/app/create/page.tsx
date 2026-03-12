"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import BiodataForm from "@/components/BiodataForm";
import BiodataPreview from "@/components/BiodataPreview";

export type Biodata = {
    profilePhoto?: {
        url: string;
        shape: 'square' | 'circle';
        isHidden: boolean;
    };
    godIcon?: {
        url: string;
        isHidden: boolean;
        text: string;
    };
    personalDetails: {
        title: string;
        fullName: { label: string; value: string };
        dateOfBirth: { label: string; value: string };
        height: { label: string; value: string };
        bloodGroup: { label: string; value: string };
        complexion: { label: string; value: string };
        maritalStatus: { label: string; value: string };
        education: { label: string; value: string };
        occupation: { label: string; value: string };
        annualIncome: { label: string; value: string };
        [key: string]: any;
    };
    familyDetails: {
        title: string;
        fatherName: { label: string; value: string };
        fatherOccupation: { label: string; value: string };
        motherName: { label: string; value: string };
        motherOccupation: { label: string; value: string };
        siblings: { label: string; value: string };
        [key: string]: any;
    };
    contactDetails: {
        title: string;
        contactNumber: { label: string; value: string };
        email: { label: string; value: string };
        address: { label: string; value: string };
        [key: string]: any;
    };
};

export const initialData: Biodata = {
    profilePhoto: {
        url: "",
        shape: "circle",
        isHidden: false,
    },
    godIcon: {
        url: "/god_icons/god-icon-1.png", // Default icon
        isHidden: false,
        text: "|| Shree Ganeshay Namah ||",
    },
    personalDetails: {
        title: "Personal Details",
        fullName: { label: "Full Name", value: "" },
        dateOfBirth: { label: "Date of Birth & Time", value: "" },
        height: { label: "Height", value: "" },
        bloodGroup: { label: "Blood Group", value: "" },
        complexion: { label: "Complexion", value: "" },
        maritalStatus: { label: "Marital Status", value: "" },
        education: { label: "Highest Education", value: "" },
        occupation: { label: "Occupation / Job", value: "" },
        annualIncome: { label: "Annual Income", value: "" },
    },
    familyDetails: {
        title: "Family Details",
        fatherName: { label: "Father's Name", value: "" },
        fatherOccupation: { label: "Father's Occupation", value: "" },
        motherName: { label: "Mother's Name", value: "" },
        motherOccupation: { label: "Mother's Occupation", value: "" },
        siblings: { label: "Siblings", value: "" },
    },
    contactDetails: {
        title: "Contact Info",
        contactNumber: { label: "Contact Number", value: "" },
        email: { label: "Email Address", value: "" },
        address: { label: "Address", value: "" },
    },
};

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreatePage() {
    const [data, setData] = useState<Biodata>(initialData);
    const [isLoaded, setIsLoaded] = useState(false);
    const [language, setLanguage] = useState("en");
    const router = useRouter();

    useEffect(() => {
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
                // but only on a true browser reload (F5 / Ctrl+R / Ctrl+Shift+R).
                // PerformanceNavigationTiming.type === "reload" on browser refresh,
                // and "navigate" on client-side navigation — exactly the distinction we need.
                const nav = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
                const isReload = nav?.type === "reload";
                if (isReload) {
                    const sections = ["personalDetails", "familyDetails", "contactDetails"] as const;
                    for (const section of sections) {
                        for (const key of Object.keys(initialData[section])) {
                            if (!(key in parsed[section])) {
                                (parsed[section] as any)[key] = (initialData[section] as any)[key];
                            }
                        }
                    }
                }

                setData(parsed);
            } catch (e) {
                console.error("Failed to parse saved biodata");
            }
        }
        setIsLoaded(true);
        const savedLang = localStorage.getItem("biodataLang");
        if (savedLang) setLanguage(savedLang);
    }, []);

    const handleDataChange = (newData: Biodata) => {
        setData(newData);
        localStorage.setItem("biodataData", JSON.stringify(newData));
    };

    const handleLanguageChange = (lang: string) => {
        setLanguage(lang);
        localStorage.setItem("biodataLang", lang);
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
                    <div className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">Create Biodata</div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={handlePreview} className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors shadow-sm shadow-indigo-500/20">
                        Preview & Select Theme
                    </button>
                </div>
            </header>

            <main className="max-w-[800px] mx-auto p-4 md:p-6 lg:p-8 min-h-[calc(100vh-64px)] overflow-y-auto px-4 pb-24">
                <BiodataForm data={data} onChange={handleDataChange} language={language} onLanguageChange={handleLanguageChange} />

                <div className="mt-8 flex justify-end">
                    <button onClick={handlePreview} className="w-full sm:w-auto px-8 py-3.5 text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm shadow-indigo-500/20">
                        Preview & Select Theme
                    </button>
                </div>
            </main>
        </div>
    );
}
