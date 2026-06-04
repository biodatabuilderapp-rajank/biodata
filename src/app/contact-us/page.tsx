import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us — BiodataBuilder.in",
    description: "Get in touch with Biodata Builder. Reach out for support, feedback, or technical issues regarding our free online biodata maker.",
    alternates: { canonical: "https://biodatabuilder.in/contact-us" },
  openGraph: {
    title: "Contact Us — BiodataBuilder.in",
    description: "Get in touch with Biodata Builder. Reach out for support, feedback, or technical issues regarding our free online biodata maker.",
    url: "https://biodatabuilder.in/contact-us",
  },
};

export default function ContactUs() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
            <SiteNav />

            <main className="max-w-3xl mx-auto px-5 py-16">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">Contact Us</h1>
                
                <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl">
                    Thank you for visiting Biodata Builder. If you have questions, feedback, suggestions, or need assistance using the website, please contact us using the email address below.
                </p>

                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <section className="bg-zinc-50 dark:bg-zinc-900/50 p-6 rounded-xl border border-zinc-100 dark:border-zinc-800">
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mt-0 mb-3">Email Support</h2>
                        <a href="mailto:biodatabuilderapp@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-medium text-lg hover:underline">
                            biodatabuilderapp@gmail.com
                        </a>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Common Reasons to Contact Us</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Report a technical issue</li>
                            <li>Suggest a new biodata template</li>
                            <li>Report formatting problems in generated PDFs</li>
                            <li>Ask questions about website features</li>
                            <li>Report incorrect content in an article</li>
                            <li>Provide general feedback and suggestions</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Response Time</h2>
                        <p>We aim to respond to all genuine inquiries within 2–5 business days.</p>
                        <p className="mt-2">Response times may vary depending on the volume of requests.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Before Contacting Us</h2>
                        <p>You may find answers to common questions in our <Link href="/faq" className="text-indigo-600 hover:underline">FAQ section</Link>.</p>
                        <p className="mt-2">Topics covered include:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Biodata creation process</li>
                            <li>PDF downloads</li>
                            <li>Template selection</li>
                            <li>Privacy-related questions</li>
                            <li>General usage guidance</li>
                        </ul>
                    </section>

                    <section className="bg-indigo-50 dark:bg-indigo-950/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-900/30">
                        <h2 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100 mt-0 mb-3">Important Notice</h2>
                        <p className="text-indigo-800 dark:text-indigo-200"><strong>Biodata Builder is a document-generation platform only.</strong></p>
                        <p className="mt-2 text-indigo-800 dark:text-indigo-200">We do not provide matchmaking services, matrimonial services, marriage consultation, background verification, or relationship advice.</p>
                        <p className="mt-2 text-indigo-800 dark:text-indigo-200">For inquiries related to such services, please contact an appropriate service provider.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Website</h2>
                        <p><Link href="/" className="text-indigo-600 hover:underline">https://biodatabuilder.in</Link></p>
                        <p className="mt-4">We appreciate your feedback and support as we continue improving Biodata Builder.</p>
                    </section>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
