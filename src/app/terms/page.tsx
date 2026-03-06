import Link from "next/link";
import Logo from "@/components/Logo";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use",
    description: "Terms of Use for BiodataBuilder — read our terms before using the service.",
};

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
            <nav className="border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 px-5 h-16 flex items-center">
                <Link href="/" className="flex items-center gap-2">
                    <Logo />
                </Link>
            </nav>

            <main className="max-w-3xl mx-auto px-5 py-16">
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Terms of Use</h1>
                <p className="text-sm text-zinc-500 mb-10">Last updated: March 2025</p>

                <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
                        <p>By accessing or using BiodataBuilder, you agree to be bound by these Terms of Use. If you do not agree, please do not use the service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">2. Use of Service</h2>
                        <p>BiodataBuilder is provided for personal, non-commercial use. You may use this service to create and download marriage biodatas for yourself or on behalf of family members. You agree not to misuse the service for any unlawful or harmful purpose.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">3. Intellectual Property</h2>
                        <p>The templates, designs, and code that make up BiodataBuilder are the property of BiodataBuilder and its licensors. The biodata content you generate belongs to you. You may not reproduce, resell, or distribute the BiodataBuilder platform itself without permission.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">4. No Warranties</h2>
                        <p>The service is provided "as is" without any warranties of any kind. We do not guarantee that the service will be uninterrupted, error-free, or suitable for any particular purpose.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">5. Limitation of Liability</h2>
                        <p>To the maximum extent permitted by law, BiodataBuilder shall not be liable for any indirect, incidental, or consequential damages arising from your use or inability to use the service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">6. Amendments</h2>
                        <p>We reserve the right to modify these Terms at any time. Continued use of the service after changes constitutes acceptance of the updated Terms.</p>
                    </section>
                </div>
            </main>

            <footer className="border-t border-zinc-100 dark:border-zinc-900 py-6 px-5 text-center text-sm text-zinc-400">
                <Link href="/" className="hover:text-indigo-600 transition-colors">← Back to Home</Link>
            </footer>
        </div>
    );
}
