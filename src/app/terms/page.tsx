import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use — BiodataBuilder",
    description: "Terms of Use for BiodataBuilder.in — learn how you can use our free marriage biodata maker, what data we store, and your rights as a user. Read before using.",
    alternates: { canonical: "https://biodatabuilder.in/terms" },
  openGraph: {
    type: "website",
    title: "Terms of Use — BiodataBuilder",
    description: "Terms of Use for BiodataBuilder.in — learn how you can use our free marriage biodata maker, what data we store, and your rights as a user. Read before using.",
    url: "https://biodatabuilder.in/terms",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BiodataBuilder — Free Marriage Biodata Maker" }],
  },
};

export default function TermsOfUse() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
            <SiteNav />
            <div className="h-16" />{/* spacer for fixed nav */}

            <main className="max-w-3xl mx-auto px-5 py-16">
                <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "BreadcrumbList",
                    itemListElement: [
                      { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in" },
                      { "@type": "ListItem", position: 2, name: "Terms of Service", item: "https://biodatabuilder.in/terms" },
                    ],
                  }) }}
                />
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Terms of Use</h1>
                <p className="text-sm text-zinc-500 mb-10">Last updated: June 2025</p>

                <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">1. Acceptance of Terms</h2>
                        <p>By accessing or using BiodataBuilder, you agree to be bound by these Terms of Use. If you do not agree, please do not use the service.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">2. Use of Service</h2>
                        <p>BiodataBuilder is provided for personal, non-commercial use. You may use this service to create and download biodatas for yourself or on behalf of family members. You agree not to misuse the service for any unlawful or harmful purpose.</p>
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

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">7. Governing Law</h2>
                        <p>These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising from the use of this service shall be subject to the exclusive jurisdiction of the courts located in India.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">8. Contact</h2>
                        <p>If you have any questions about these Terms of Use, please visit our <Link href="/contact-us" className="text-indigo-600 hover:underline">Contact Us page</Link> or review our <Link href="/privacy-policy" className="text-indigo-600 hover:underline">Privacy Policy</Link> for more information on how we handle your data.</p>
                    </section>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
