"use client";

import { Languages } from "lucide-react";

export const SUPPORTED_LANGUAGES = [
    { code: "en", label: "English", native: "English" },
    { code: "hi", label: "Hindi", native: "हिंदी" },
    { code: "gu", label: "Gujarati", native: "ગુજરાતી" },
    { code: "mr", label: "Marathi", native: "मराठी" },
    { code: "ta", label: "Tamil", native: "தமிழ்" },
    { code: "te", label: "Telugu", native: "తెలుగు" },
] as const;

export type LangCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

interface Props {
    value: string;
    onChange: (lang: string) => void;
}

export default function LanguageSelector({ value, onChange }: Props) {
    return (
        <div className="flex items-center gap-2">
            <Languages className="w-4 h-4 text-zinc-500 dark:text-zinc-400 shrink-0" />
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-800"
                aria-label="Select language"
            >
                {SUPPORTED_LANGUAGES.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.native}
                    </option>
                ))}
            </select>
        </div>
    );
}
