import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy — BiodataBuilder.in",
    description: "Read BiodataBuilder's Privacy Policy to learn how we protect your data. All biodata you create stays in your browser — we never store it on our servers.",
    alternates: { canonical: "https://biodatabuilder.in/privacy-policy" },
  openGraph: {
    type: "website",
    title: "Privacy Policy — BiodataBuilder.in",
    description: "Read BiodataBuilder's Privacy Policy to learn how we protect your data. All biodata you create stays in your browser — we never store it on our servers.",
    url: "https://biodatabuilder.in/privacy-policy",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BiodataBuilder — Free Marriage Biodata Maker" }],
  },
};

export default function PrivacyPolicy() {
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
                      { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://biodatabuilder.in/privacy-policy" },
                    ],
                  }) }}
                />
                <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">Privacy Policy</h1>
                <p className="text-sm text-zinc-500 mb-10">Last updated: June 2025</p>

                <div className="prose prose-zinc dark:prose-invert max-w-none space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">1. Information We Collect</h2>
                        <p>BiodataBuilder is a client-side application. <strong>We do not collect, store, or transmit any personal information</strong> you enter in the biodata form. All data you enter (name, date of birth, contact details, etc.) is stored locally in your browser using <code>localStorage</code> and never sent to any server.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">2. Photos and Images</h2>
                        <p>If you upload a photo, it is processed entirely within your browser. It is never uploaded to or stored on our servers.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">3. Cookies and Analytics</h2>
                        <p>We use Google Analytics to understand general traffic patterns on our website. Google Analytics sets the following cookies: <code>_ga</code> (expires after 2 years), <code>_gid</code> (expires after 24 hours), and <code>_ga_*</code> (session storage). These cookies collect anonymous usage data such as pages visited and time on site. They do not collect any personally identifiable information from your biodata form. You can opt out of Google Analytics tracking by installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-indigo-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>
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
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">7. Data Protection Laws</h2>
                        <p>This website is operated from India and is intended primarily for users in India. We are committed to compliance with applicable data protection laws, including India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act). If you are located in the European Union, you may have additional rights under the General Data Protection Regulation (GDPR). Since we do not store any personal biodata on our servers, our data footprint is minimal. For any data-related requests, please contact us at the address below.</p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">8. Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please visit our <Link href="/contact-us" className="text-indigo-600 hover:underline">Contact Us page</Link> or email us at <a href="mailto:biodatabuilderapp@gmail.com" className="text-indigo-600 hover:underline">biodatabuilderapp@gmail.com</a>.</p>
                    </section>
                </div>
            </main>

            <SiteFooter />
        </div>
    );
}
