import Link from "next/link";
import Logo from "@/components/Logo";
import type { Metadata } from "next";
import { MoveRight } from "lucide-react";

export const metadata: Metadata = {
    title: "FAQ — Frequently Asked Questions",
    description: "Answers to common questions about BiodataBuilder — how to create, download, and customise your marriage biodata.",
};

const FAQS = [
    {
        q: "Is BiodataBuilder completely free?",
        a: "Yes! Creating, previewing, and downloading your biodata is completely free. There are no hidden charges, no subscriptions, and no premium tiers. All templates are freely available.",
    },
    {
        q: "Do I need to create an account or sign up?",
        a: "No. You can start building your biodata right away without any registration, email, or account creation.",
    },
    {
        q: "What formats can I download my biodata in?",
        a: "You can download your biodata as a high-quality PDF (ideal for printing and emailing) or as a PNG image (ideal for sharing on WhatsApp or other messaging apps).",
    },
    {
        q: "Can I add my profile photo to the biodata?",
        a: "Yes! You can upload a photo from your device. Our built-in image cropper lets you trim it perfectly. You can also choose between a circular or square frame.",
    },
    {
        q: "Will my data be saved if I close the browser?",
        a: "Yes. Your form data is automatically saved in your browser's local storage, so you can return and continue later without losing your work.",
    },
    {
        q: "Can I customise the field labels and section titles?",
        a: "Yes! Every label and section title is editable. Simply click on any label to rename it. You can also add custom fields to any section.",
    },
    {
        q: "Can I remove fields I don't need?",
        a: "Absolutely. Every field has a small remove button (×) that appears when you hover over it. Simply click it to remove any field you don't want on your biodata.",
    },
    {
        q: "How many templates are available?",
        a: "We have a growing collection of professionally designed templates. New templates are added regularly, and switching between them is instant — your content stays, only the design changes.",
    },
    {
        q: "Is my data private and secure?",
        a: "Yes. All the information you enter stays entirely within your browser. We never send your biodata data to any server. Only your browser stores it, in localStorage.",
    },
    {
        q: "Can I create a biodata on my phone?",
        a: "Yes! BiodataBuilder is fully responsive and works well on smartphones and tablets.",
    },
];

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
            <nav className="border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 px-5 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>
                <Link href="/create" className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-700 transition-colors">
                    Create Free <MoveRight className="w-3.5 h-3.5" />
                </Link>
            </nav>

            <main className="max-w-3xl mx-auto px-5 py-16">
                <div className="text-center mb-14">
                    <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Frequently Asked Questions</h1>
                    <p className="text-zinc-500 dark:text-zinc-400">Everything you need to know about creating your marriage biodata.</p>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, i) => (
                        <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                            <h2 className="font-semibold text-zinc-900 dark:text-white mb-2 text-base">{faq.q}</h2>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-8 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 text-center">
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Still have questions?</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-5">Ready to create your beautiful biodata? It only takes a few minutes.</p>
                    <Link href="/create" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
                        Create My Biodata — Free <MoveRight className="w-4 h-4" />
                    </Link>
                </div>
            </main>

            <footer className="border-t border-zinc-100 dark:border-zinc-900 py-6 px-5 text-center text-sm text-zinc-400">
                <Link href="/" className="hover:text-indigo-600 transition-colors">← Back to Home</Link>
            </footer>
        </div>
    );
}
