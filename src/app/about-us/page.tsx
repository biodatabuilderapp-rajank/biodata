import Link from "next/link";
import Logo from "@/components/Logo";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us — BiodataBuilder.in",
    description: "Learn more about Biodata Builder, a free online tool designed to help individuals and families create professional biodata documents quickly and easily.",
    alternates: { canonical: "https://biodatabuilder.in/about-us" },
  openGraph: {
    title: "About Us — BiodataBuilder.in",
    description: "Learn more about Biodata Builder, a free online tool designed to help individuals and families create professional biodata documents quickly and easily.",
    url: "https://biodatabuilder.in/about-us",
  },
};

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
            <nav className="border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 px-5 h-16 flex items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>
            </nav>

            <main className="max-w-3xl mx-auto px-5 py-16">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-8">About Biodata Builder</h1>

                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <section>
                        <p className="font-semibold text-lg text-zinc-900 dark:text-white mb-4">Welcome to Biodata Builder.</p>
                        <p>Biodata Builder is a free online tool designed to help individuals and families create professional, well-structured biodata documents quickly and easily.</p>
                        <p className="mt-4">In many parts of India, a biodata is commonly used for family introductions, marriage discussions, and sharing personal information in a clear and organized format. However, creating a biodata from scratch in a word processor can be time-consuming and often results in inconsistent formatting.</p>
                        <p className="mt-4">Biodata Builder was created to simplify this process.</p>
                        <p className="mt-4">Our goal is straightforward: provide an easy-to-use platform where anyone can create a clean, attractive biodata without needing design skills, software expertise, or expensive services.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Why We Built Biodata Builder</h2>
                        <p>We noticed that many people spend hours creating biodata documents manually using tools such as Microsoft Word, Google Docs, or graphic design software. Formatting issues, layout inconsistencies, and difficulties generating PDF files often make the process frustrating.</p>
                        <p className="mt-4">Biodata Builder was developed to solve these challenges by offering:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Ready-to-use biodata templates</li>
                            <li>Structured data entry forms</li>
                            <li>Instant PDF generation</li>
                            <li>Mobile-friendly experience</li>
                            <li>No registration requirement</li>
                            <li>Free access to core features</li>
                        </ul>
                        <p className="mt-4">Our focus is on simplicity, accessibility, and ease of use.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">What We Offer</h2>
                        <p>Biodata Builder provides tools and resources to help users create biodata documents efficiently.</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Multiple biodata templates and themes</li>
                            <li>PDF export functionality</li>
                            <li>Support for traditional Indian biodata formats</li>
                            <li>Guidance articles and educational content</li>
                            <li>Frequently asked questions and formatting tips</li>
                        </ul>
                        <p className="mt-4">We continuously improve the platform based on user feedback and evolving requirements.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Privacy and User Data</h2>
                        <p>We understand that biodata documents often contain personal information.</p>
                        <p className="mt-2">We strive to minimize data collection wherever possible and are committed to protecting user privacy. For detailed information about how information is handled, please review our <Link href="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Independent Platform</h2>
                        <p>Biodata Builder is an independent document-generation platform.</p>
                        <p className="mt-2">We do not operate a matrimonial service, matchmaking platform, dating service, or marriage bureau.</p>
                        <p className="mt-2">We do not arrange marriages, facilitate introductions, verify user identities, or participate in any matchmaking activities.</p>
                        <p className="mt-2">The platform is solely intended to help users create biodata documents for personal use.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Our Mission</h2>
                        <p>Our mission is to make biodata creation simple, accessible, and professional for everyone.</p>
                        <p className="mt-2">Whether you are preparing a biodata for marriage discussions, family introductions, or personal documentation, we aim to provide a fast and reliable solution that saves time and effort.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Contact Us</h2>
                        <p>If you have questions, suggestions, feedback, or encounter any issues while using the website, we would love to hear from you.</p>
                        <p className="mt-2 text-zinc-900 dark:text-white"><strong>Email:</strong> <a href="mailto:support@biodatabuilder.in" className="text-indigo-600 hover:underline">support@biodatabuilder.in</a></p>
                        <p className="mt-2 text-zinc-900 dark:text-white"><strong>Website:</strong> <Link href="/" className="text-indigo-600 hover:underline">https://biodatabuilder.in</Link></p>
                        <p className="mt-4">We typically respond to inquiries within 2–5 business days.</p>
                    </section>
                    
                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Disclaimer</h2>
                        <p>While we make every effort to ensure the platform functions correctly, users are responsible for reviewing and verifying all information before sharing or printing their biodata documents.</p>
                        <p className="mt-2">Biodata Builder is provided on an "as is" basis without guarantees regarding suitability for any specific purpose.</p>
                        <p className="mt-4 font-semibold text-zinc-900 dark:text-white">Thank you for using Biodata Builder.</p>
                    </section>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
