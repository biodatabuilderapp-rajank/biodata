import Link from "next/link";
import Logo from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Privacy Policy for BiodataBuilder — learn how we handle your data.",
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
            <nav className="border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 px-5 h-16 flex items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>
            </nav>

            <main className="max-w-3xl mx-auto px-5 py-16">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Privacy Policy</h1>
                <p className="text-sm text-zinc-500 mb-10">Last updated: March 2025</p>

                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">1. Information We Collect</h2>
                        <p>BiodataBuilder is a client-side application. <strong>We do not collect, store, or transmit any personal information</strong> you enter in the biodata form. All data you enter (name, date of birth, contact details, etc.) is stored locally in your browser using <code>localStorage</code> and never sent to any server.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">2. Profile Photos and Images</h2>
                        <p>If you upload a profile photo or god icon, these images are processed entirely within your browser. They are never uploaded to or stored on our servers.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">3. Cookies and Analytics</h2>
                        <p>We may use anonymous analytics tools (such as Google Analytics) to understand general traffic patterns on our website. These tools may use cookies but do not collect any personally identifiable information from your biodata form.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">4. Advertising</h2>
                        <p>We may display advertisements served by Google AdSense or similar networks. These advertising partners may use cookies to serve ads based on your prior visits to websites. You can opt out of personalised advertising by visiting <a href="https://www.google.com/settings/ads" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">5. Third-Party Links</h2>
                        <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">6. Changes to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify users by updating the "Last updated" date at the top of this page.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">7. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please email us at <a href="mailto:biodatabuilderapp@gmail.com" className="text-indigo-600 hover:underline">biodatabuilderapp@gmail.com</a>.</p>
                    </section>
                </div>
            </main>

            <footer className="border-t border-zinc-100 dark:border-zinc-900 py-6 px-5 text-center text-sm text-zinc-400">
                <Link href="/" className="hover:text-indigo-600 transition-colors">← Back to Home</Link>
            </footer>
        </div>
    );
}
