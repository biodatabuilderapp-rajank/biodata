import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { FileText, Heart, Zap, Shield, Users, MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us — BiodataBuilder.in",
  description: "Learn more about BiodataBuilder — a free online tool designed to help Indian families create beautiful, professional marriage biodata PDFs in minutes.",
  alternates: { canonical: "https://biodatabuilder.in/about-us" },
  openGraph: {
    title: "About Us — BiodataBuilder.in",
    description: "Learn more about BiodataBuilder — a free online tool for creating beautiful marriage biodata PDFs in minutes.",
    url: "https://biodatabuilder.in/about-us",
  },
};

const stats = [
  { value: "100%", label: "Free to use" },
  { value: "0", label: "Registration required" },
  { value: "10+", label: "Beautiful templates" },
  { value: "2 min", label: "Avg. creation time" },
];

const values = [
  {
    icon: Zap,
    title: "Simple & Fast",
    desc: "No design skills needed. Fill in your details, pick a template, and download a perfect PDF — in under 5 minutes.",
  },
  {
    icon: Heart,
    title: "Built for Indian Families",
    desc: "Every field, every section, every template is designed specifically for the Indian matrimonial biodata — with Kundali, Gotra, and community fields built in.",
  },
  {
    icon: Shield,
    title: "Private by Design",
    desc: "We don't store your personal data on our servers. Your biodata is generated in your browser and downloaded directly to your device.",
  },
  {
    icon: Users,
    title: "For Everyone",
    desc: "Whether your family is Hindu, Muslim, Christian, Jain — whether you speak Hindi, Marathi, Gujarati, Tamil or Telugu — BiodataBuilder is made for you.",
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <SiteNav />

      <main>
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-20 px-5 overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="max-w-3xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" /> Free · No Sign-up · No Watermark
            </div>
            <h1 className="text-4xl sm:text-5xl font-black mb-5 leading-tight">
              Making Biodata Creation Simple<br />for Every Indian Family
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mx-auto">
              BiodataBuilder is a free online tool that helps you create a beautiful, professional marriage biodata PDF in minutes — no design skills, no software, no hassle.
            </p>
          </div>
        </section>

        {/* STATS */}
        <section className="border-b border-zinc-100 dark:border-zinc-800">
          <div className="max-w-3xl mx-auto px-5 py-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-indigo-600 dark:text-indigo-400 mb-1">{s.value}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* OUR STORY */}
        <section className="max-w-3xl mx-auto px-5 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">Why We Built BiodataBuilder</h2>
          <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg">
            <p>
              Every year, millions of Indian families go through the same frustrating process — opening Microsoft Word, trying to format a biodata from scratch, battling broken layouts, struggling to add a photo, and finally ending up with something that looks nothing like what they imagined.
            </p>
            <p>
              We built BiodataBuilder because we believed the process of creating a beautiful, professional marriage biodata should take <strong className="text-zinc-900 dark:text-white">minutes, not hours</strong> — and it should be completely free.
            </p>
            <p>
              Today, BiodataBuilder supports all major Indian communities and languages — with dedicated fields for Kundali details, Gotra, Manglik status, and community-specific sections that Word templates simply cannot provide.
            </p>
          </div>
        </section>

        {/* VALUES */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800 py-16 px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-10 text-center">What We Stand For</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <div key={v.title} className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800 flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 flex items-center justify-center">
                    <v.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{v.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT WE ARE NOT */}
        <section className="max-w-3xl mx-auto px-5 py-16">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-100 dark:border-amber-900/40 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-amber-900 dark:text-amber-100 mb-3">We Are a Document Tool — Not a Matrimonial Service</h2>
            <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
              BiodataBuilder is purely a document-generation platform. We do not operate a matrimonial service, matchmaking platform, dating service, or marriage bureau. We do not arrange marriages, facilitate introductions, verify user identities, or participate in any matchmaking activities. The platform is solely intended to help users create biodata documents for personal use.
            </p>
          </div>
        </section>

        {/* PRIVACY */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 border-t border-zinc-100 dark:border-zinc-800 py-16 px-5">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-4">Privacy & Your Data</h2>
            <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-lg mb-4">
              We understand that a marriage biodata contains highly personal information. BiodataBuilder is designed to minimise data collection — your biodata is generated in your browser and downloaded directly to your device. We do not sell or share your information with third parties.
            </p>
            <Link href="/privacy-policy" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
              Read our full Privacy Policy →
            </Link>
          </div>
        </section>

        {/* CONTACT + CTA */}
        <section className="max-w-3xl mx-auto px-5 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-200 dark:border-zinc-800">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">Get in Touch</h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-4">Have feedback, a suggestion, or found a bug? We&apos;d love to hear from you.</p>
              <a href="mailto:biodatabuilderapp@gmail.com" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline break-all">
                biodatabuilderapp@gmail.com
              </a>
              <p className="text-xs text-zinc-400 mt-2">We respond within 2–5 business days.</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-6 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-bold mb-2">Ready to create your biodata?</h2>
                <p className="text-white/80 text-sm mb-6">Free, no sign-up, beautiful PDF in minutes.</p>
              </div>
              <Link href="/create" className="inline-flex items-center gap-2 bg-white text-indigo-700 font-bold px-5 py-2.5 rounded-full hover:bg-indigo-50 transition self-start text-sm">
                Create Biodata <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
