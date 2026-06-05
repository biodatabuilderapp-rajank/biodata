import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Mail, MessageSquare, Bug, Lightbulb, FileText, MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — BiodataBuilder.in",
  description: "Get in touch with BiodataBuilder. Reach out for support, feedback, or technical issues regarding our free online marriage biodata maker.",
  alternates: { canonical: "https://biodatabuilder.in/contact-us" },
  openGraph: {
    title: "Contact Us — BiodataBuilder.in",
    description: "Get in touch with BiodataBuilder for support, feedback, or technical issues.",
    url: "https://biodatabuilder.in/contact-us",
  },
};

const reasons = [
  { icon: Bug, title: "Report a Bug", desc: "Something not working? Let us know so we can fix it quickly." },
  { icon: Lightbulb, title: "Suggest a Feature", desc: "Have an idea for a new template, field, or language? We'd love to hear it." },
  { icon: FileText, title: "PDF or Template Issues", desc: "Formatting problems in your downloaded biodata? Send us details." },
  { icon: MessageSquare, title: "General Feedback", desc: "Loved the experience or have suggestions? Your feedback shapes the product." },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <SiteNav />

      <main>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in" },
              { "@type": "ListItem", position: 2, name: "Contact Us", item: "https://biodatabuilder.in/contact-us" },
            ],
          }) }}
        />
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-5 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur mb-6">
              <Mail className="w-7 h-7" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight">We&apos;d Love to Hear<br />From You</h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl mx-auto">
              Questions, feedback, bug reports, or ideas — drop us an email and we&apos;ll get back to you within 2–5 business days.
            </p>
          </div>
        </section>

        {/* EMAIL CARD */}
        <section className="max-w-3xl mx-auto px-5 py-16">
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 border border-indigo-100 dark:border-indigo-900/50 rounded-3xl p-8 sm:p-12 text-center">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-3">Email Us At</p>
            <a
              href="mailto:biodatabuilderapp@gmail.com"
              className="text-2xl sm:text-3xl font-black text-indigo-700 dark:text-indigo-300 hover:text-indigo-500 dark:hover:text-indigo-200 transition break-all"
            >
              biodatabuilderapp@gmail.com
            </a>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-4">We aim to reply within 2–5 business days.</p>
          </div>
        </section>

        {/* REASONS */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800 py-16 px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-2 text-center">What Can We Help With?</h2>
            <p className="text-center text-zinc-500 dark:text-zinc-400 mb-10">Here are the most common reasons people reach out to us.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map((r) => (
                <div key={r.title} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center">
                    <r.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{r.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ NUDGE */}
        <section className="max-w-3xl mx-auto px-5 py-16">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
            <div>
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Have a quick question?</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm">Our FAQ covers the most common queries about creating biodatas, PDF downloads, templates, and privacy.</p>
            </div>
            <Link href="/faq" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white font-semibold rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-700 transition text-sm">
              Browse FAQ <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* DISCLAIMER */}
        <section className="max-w-3xl mx-auto px-5 pb-16">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 rounded-2xl p-6">
            <h3 className="font-bold text-amber-900 dark:text-amber-100 mb-2">Important Notice</h3>
            <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">
              <strong>BiodataBuilder is a document-generation platform only.</strong> We do not provide matchmaking services, matrimonial services, marriage consultation, background verification, or relationship advice. For inquiries related to such services, please contact an appropriate service provider.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
