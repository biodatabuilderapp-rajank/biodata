"use client";

import Link from "next/link";
import Image from "next/image";
import { MoveRight, FileText, Image as ImageIcon, CheckCircle2, Star, Sparkles, Shield, Smartphone, Zap, Languages, User, BookOpen, Users, Phone, Download } from "lucide-react";
import ClientThemeGallery from "@/components/ClientThemeGallery";
import { useUITranslation } from "@/lib/useUITranslation";
import { SUPPORTED_LANGUAGES } from "@/components/LanguageSelector";
import { useState, useEffect, Suspense } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import LocaleWatcher from "@/components/LocaleWatcher";

// ─── Example biodata images for carousel ────────────────────────────────────
const EXAMPLE_IMAGES = [
  { src: "/examples/Boy-biodata-example.webp", alt: "Marriage biodata format for boy" },
  { src: "/examples/Girl-biodata-example.webp", alt: "Shaadi biodata format for girl" },
  { src: "/examples/Hindu-biodata-example.webp", alt: "Hindu marriage biodata format" },
  { src: "/examples/Boy-biodata-example-Marathi.webp", alt: "Marathi lagna biodata" },
  { src: "/examples/Muslim-biodata-example.webp", alt: "Muslim marriage biodata format" },
  { src: "/examples/Christian-biodata-example.webp", alt: "Christian marriage biodata format" },
  { src: "/examples/Boy-biodata-example-Tamil.webp", alt: "Tamil thirumanam biodata" },
  { src: "/examples/Girl-biodata-example-Gujarati.webp", alt: "Gujarati lagna biodata for girl" },
];

// ─── Step descriptions (long copy stays in English) ─────────────────────────
const STEP_DESCRIPTIONS = [
  "Enter your personal, family, and contact information in our simple, guided form.",
  "Pick from beautiful, professionally designed biodata templates that suit your style.",
  "Export your stunning biodata in high-quality PDF or PNG format — ready to share.",
];

const STEP_COLORS = [
  { color: "from-violet-500 to-purple-600", bg: "bg-violet-50 dark:bg-violet-950/30", border: "border-violet-100 dark:border-violet-900/50" },
  { color: "from-rose-500 to-pink-600", bg: "bg-rose-50 dark:bg-rose-950/30", border: "border-rose-100 dark:border-rose-900/50" },
  { color: "from-amber-500 to-orange-500", bg: "bg-amber-50 dark:bg-amber-950/30", border: "border-amber-100 dark:border-amber-900/50" },
];

const FEATURE_META = [
  { icon: <Shield className="w-5 h-5" />, key: "feature.free", desc: "No hidden charges, no subscriptions. Create unlimited biodatas for free.", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950/30" },
  { icon: <Sparkles className="w-5 h-5" />, key: "feature.themes", desc: "Professionally crafted templates matching every tradition and personal taste.", color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-950/30" },
  { icon: <Zap className="w-5 h-5" />, key: "feature.download", desc: "Your biodata is generated and downloaded in seconds — no waiting.", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950/30" },
  { icon: <Smartphone className="w-5 h-5" />, key: "feature.mobile", desc: "Works perfectly on any device — phone, tablet, or desktop.", color: "text-sky-600 dark:text-sky-400", bg: "bg-sky-50 dark:bg-sky-950/30" },
  { icon: <ImageIcon className="w-5 h-5" />, key: "feature.export", desc: "Download as printable PDF or shareable PNG image — your choice.", color: "text-rose-600 dark:text-rose-400", bg: "bg-rose-50 dark:bg-rose-950/30" },
  { icon: <CheckCircle2 className="w-5 h-5" />, key: "feature.noSignup", desc: "Start creating immediately. No registration needed to start.", color: "text-indigo-600 dark:text-indigo-400", bg: "bg-indigo-50 dark:bg-indigo-950/30" },
  { icon: <Languages className="w-5 h-5" />, key: "feature.languages", desc: "Create biodata in Hindi, Gujarati, Marathi, Tamil, Telugu, or English — your choice.", color: "text-teal-600 dark:text-teal-400", bg: "bg-teal-50 dark:bg-teal-950/30" },
];

const TESTIMONIALS = [
  { name: "Priya Sharma", location: "Mumbai, Maharashtra", text: "Made my biodata in under 10 minutes! The templates are so elegant and the PDF quality is excellent. Highly recommended to everyone looking for a quick, beautiful biodata.", rating: 5 },
  { name: "Rahul Patel", location: "Ahmedabad, Gujarat", text: "Simple to use and completely free. I was looking for something that looks professional and this delivered exactly that. The theme selection is amazing.", rating: 5 },
  { name: "Anjali Verma", location: "Delhi, NCR", text: "Loved the photo feature and the god icon selector. It made our biodata look very traditional and beautiful. Downloaded in PNG and it looks great when shared on WhatsApp!", rating: 5 },
];


// ─── Main page content — no useSearchParams here so Next.js renders full HTML ─
function HomeContent() {
  // Priority: localStorage → "en" (URL sync is handled by LocaleWatcher)
  const [locale, setLocale] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("biodataLang") ?? "en";
    }
    return "en";
  });

  const { t } = useUITranslation(locale);

  // Listen for locale changes dispatched by LocaleWatcher
  useEffect(() => {
    const handler = (e: Event) => {
      const lang = (e as CustomEvent<string>).detail;
      if (lang && lang !== locale) {
        setLocale(lang);
      }
    };
    window.addEventListener("localeChange", handler);
    return () => window.removeEventListener("localeChange", handler);
  }, [locale]);

  const handleLocaleChange = (lang: string) => {
    setLocale(lang);
    localStorage.setItem("biodataLang", lang);
    // Tell LocaleWatcher to update the URL
    window.dispatchEvent(new CustomEvent("localeSet", { detail: lang }));
  };

  const TRUST_ITEMS = [
    t("hero.trust.noReg") ?? "No registration",
    t("hero.trust.download") ?? "Instant download",
    t("hero.trust.export") ?? "High-quality PDF & PNG",
    t("hero.trust.languages") ?? "6 Indian languages",
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">
      <SiteNav locale={locale} onLocaleChange={handleLocaleChange} />

      {/* FAQPage JSON-LD — preserves keyword-rich Q&As for Google rich results
          without cluttering the visible UI. These Q&As were previously rendered
          as visible FAQ cards; now they live as structured data only. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is this biodata maker completely free?", acceptedAnswer: { "@type": "Answer", text: "Yes! Creating, previewing, and downloading your biodata is free to use. No hidden charges, no subscriptions." } },
              { "@type": "Question", name: "Is this a matchmaking or dating service?", acceptedAnswer: { "@type": "Answer", text: "No. BiodataBuilder is purely a free design utility to format and generate PDF documents. We do not provide matrimonial services, we do not connect users, and we do not store your personal data on any servers." } },
              { "@type": "Question", name: "Do I need to create an account to use BiodataBuilder?", acceptedAnswer: { "@type": "Answer", text: "No. You can start creating your biodata immediately without any registration or sign-up required." } },
              { "@type": "Question", name: "What formats can I download my biodata in?", acceptedAnswer: { "@type": "Answer", text: "You can download your biodata as a high-quality PDF (ideal for printing) or PNG image (ideal for sharing on WhatsApp)." } },
              { "@type": "Question", name: "How to make a marriage biodata format word download?", acceptedAnswer: { "@type": "Answer", text: "While many look for a Word download, BiodataBuilder provides a much better experience by outputting a perfectly formatted, print-ready PDF. Word documents often lose formatting when opened on different devices, but our PDFs look beautiful and consistent everywhere." } },
              { "@type": "Question", name: "What is the best simple biodata format in India for free?", acceptedAnswer: { "@type": "Answer", text: "The best simple biodata format focuses on clean typography, easy-to-read sections for family background and personal details, and a professional photo. BiodataBuilder offers multiple free themes that capture this elegant simplicity." } },
              { "@type": "Question", name: "How can I find a biodata format for a girl in Marathi PDF?", acceptedAnswer: { "@type": "Answer", text: "BiodataBuilder supports Marathi language natively. Simply select Marathi from the language dropdown, and all your section headings and labels will be translated. Your final downloaded PDF will be perfectly formatted in Marathi." } },
              { "@type": "Question", name: "Is there a specific Shaadi biodata format for a girl?", acceptedAnswer: { "@type": "Answer", text: "Yes, our templates are designed to be versatile for a girl's shaadi biodata. You can choose themes with softer color palettes and elegant fonts. You can also easily add your hobbies, expectations, and Kundali details." } },
              { "@type": "Question", name: "Which languages are supported for marriage biodata?", acceptedAnswer: { "@type": "Answer", text: "You can create your biodata in English, Hindi, Gujarati, Marathi, Tamil, and Telugu. Simply select your language at the top of the form — all field labels and section titles are automatically translated." } },
              { "@type": "Question", name: "Can I add my photo to the marriage biodata?", acceptedAnswer: { "@type": "Answer", text: "Yes! You can upload and crop your photo with our built-in cropping tool and choose between a circular or square frame for your matrimonial biodata." } },
            ],
          }),
        }}
      />

      <main>
        {/* ========== HERO ========== */}
        <section className="pt-32 pb-20 px-5 bg-gradient-to-b from-indigo-50/60 via-white to-white dark:from-indigo-950/20 dark:via-zinc-950 dark:to-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-400 text-sm font-medium">
              <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              {t("hero.badge") ?? "100% Free · No Sign-up Required"}
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
              {t("hero.h1.line1") ?? "Free Marriage Biodata Maker"}
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                {t("hero.h1.line2") ?? "& Generator Online"}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you call it a <strong className="font-semibold text-zinc-900 dark:text-white">bio data for marriage</strong> or a marriage biodata, this format is the essential first step for family introductions and formal proposals across India.
            </p>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Choose from beautiful traditional Indian marriage biodata templates, fill in your details, and instantly download a stunning <strong className="font-semibold text-zinc-900 dark:text-white">bio data format</strong> in PDF or PNG — best free biodata maker, no registration needed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Link
                href="/create"
                className="group flex h-12 sm:h-14 items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 sm:px-8 text-white font-semibold text-sm sm:text-base transition-all hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 shadow-lg shadow-indigo-500/20 w-full sm:w-auto"
              >
                <span>{t("hero.cta.primary") ?? "Create Marriage Biodata — It's Free"}</span>
                <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
              <Link
                href="#how-it-works"
                className="flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-6 sm:px-8 text-zinc-700 dark:text-zinc-300 font-medium text-sm sm:text-base hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all w-full sm:w-auto"
              >
                {t("hero.cta.secondary") ?? "See How It Works"}
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-zinc-500 dark:text-zinc-500">
              {TRUST_ITEMS.map((item) => (
                <div key={item} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== EXAMPLE IMAGE CAROUSEL ========== */}
        <section className="py-14 overflow-hidden bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto px-5 mb-8 text-center">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2">Real Examples</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">Biodata formats created with BiodataBuilder</h2>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4 px-5 snap-x snap-mandatory scrollbar-hide">
            {EXAMPLE_IMAGES.map((img) => (
              <div key={img.src} className="snap-center shrink-0 w-48 sm:w-60 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
                <Image src={img.src} alt={img.alt} width={400} height={566} sizes="(max-width: 640px) 50vw, 256px" className="w-full h-auto" />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Link href="/create" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm transition-all shadow-md hover:-translate-y-0.5">
              Create Yours Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* ========== HOW IT WORKS ========== */}
        <section id="how-it-works" className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">{t("section.howItWorks.badge") ?? "Simple Process"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">{t("section.howItWorks.title") ?? "Create your marriage biodata in 3 easy steps"}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(["01", "02", "03"] as const).map((num, i) => (
                <div key={num} className={`relative p-8 rounded-3xl border ${STEP_COLORS[i].border} ${STEP_COLORS[i].bg}`}>
                  <div className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center text-white font-bold text-lg mb-5 bg-gradient-to-br ${STEP_COLORS[i].color} shadow-lg`}>
                    {num}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{t(`step.${num}`) ?? ["Fill Your Details", "Choose a Theme", "Download Instantly"][i]}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{STEP_DESCRIPTIONS[i]}</p>
                  {i < 2 && (
                    <div className="hidden md:block absolute top-12 -right-3 z-10 text-zinc-300 dark:text-zinc-700">
                      <MoveRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10 px-4 sm:px-0">
              <Link
                href="/create"
                className="flex sm:inline-flex justify-center items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md hover:shadow-lg w-full sm:w-auto max-w-xs mx-auto"
              >
                {t("section.howItWorks.cta") ?? "Start Creating Now"}
                <MoveRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========== THEME GALLERY ========== */}
        <section id="themes" className="py-20 px-5 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">{t("section.themes.badge") ?? "Beautiful Themes"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">{t("section.themes.title") ?? "Pick a marriage biodata format that reflects your style"}</h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
                From traditional to modern, we have a growing collection of marriage biodata formats crafted with love.
              </p>
            </div>

            <ClientThemeGallery />

            <div className="text-center mt-8 sm:mt-10 px-4 sm:px-0">
              <Link
                href="/create"
                className="flex sm:inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 font-semibold text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all w-full sm:w-auto max-w-xs mx-auto"
              >
                <FileText className="w-4 h-4 shrink-0" />
                {t("section.themes.cta") ?? "Browse All Themes"}
              </Link>
            </div>
          </div>
        </section>

        {/* ========== FEATURES ========== */}
        <section className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">{t("section.features.badge") ?? "Why Choose Us"}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">{t("section.features.title") ?? "Everything you need, nothing you don't"}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURE_META.map((f) => (
                <div key={f.key} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all group">
                  <div className={`inline-flex w-10 h-10 rounded-xl items-center justify-center ${f.bg} ${f.color} mb-5`}>
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{t(f.key) ?? f.key}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== SEO CONTENT SECTION ========== */}
        <section className="py-20 px-5 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
          <div className="max-w-4xl mx-auto">

            {/* Intro prose */}
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">Create the Perfect Marriage Biodata</h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-14">
              A <strong className="font-semibold text-zinc-900 dark:text-white">bio data for marriage</strong> — also known as a <strong className="font-semibold text-zinc-900 dark:text-white">matrimonial biodata format</strong> or wedding biodata — is the essential first step in the Indian matchmaking process. Think of it as your matrimonial resume: it introduces your personal details, family background, educational qualifications, and professional life to prospective partners and their families. While you might be searching for a <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata format word download</strong>, creating one using a dedicated online builder ensures your layout never breaks across different devices and platforms.
            </p>

            {/* What Makes a Good Biodata? — icon cards */}
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">What Makes a Good Biodata Format?</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              When looking for a <strong className="font-semibold text-zinc-900 dark:text-white">simple biodata format in India for free</strong>, the key is clarity and presentation. A cluttered document can be hard to read and might leave a poor first impression. Our structured templates allow you to focus on what matters most:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              {[
                { icon: <User className="w-5 h-5" />, title: "Personal Information", desc: "Name, Date of Birth, Height, Blood Group, and Complexion.", bg: "bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400" },
                { icon: <Star className="w-5 h-5" />, title: "Horoscope / Kundali Details", desc: "Rashi, Gotra, Nakshatra, and Manglik status — essential for many traditional families.", bg: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400" },
                { icon: <BookOpen className="w-5 h-5" />, title: "Education and Profession", desc: "What you studied, where you work, and your annual income.", bg: "bg-sky-50 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400" },
                { icon: <Users className="w-5 h-5" />, title: "Family Background", desc: "Details about your father, mother, siblings, and extended family roots.", bg: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400" },
                { icon: <Phone className="w-5 h-5" />, title: "Contact Information", desc: "Phone numbers, email, and current address.", bg: "bg-rose-50 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${item.bg}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* How to Create — 3 step cards */}
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">How to Create Your Biodata in 3 Simple Steps</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              You don&apos;t need complex software or design skills to make a beautiful <strong className="font-semibold text-zinc-900 dark:text-white">wedding biodata format</strong> for a girl or boy. Our tool streamlines the entire process:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
              {[
                { num: "1", icon: <FileText className="w-5 h-5" />, title: "Input your Details", desc: "Use our straightforward, categorized form to enter your information step by step. We have dedicated sections for everything from your Gotra to your hobbies.", color: "from-violet-500 to-purple-600", bg: "bg-violet-50 dark:bg-violet-950/30", border: "border-violet-100 dark:border-violet-900/50", iconBg: "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400" },
                { num: "2", icon: <ImageIcon className="w-5 h-5" />, title: "Upload Your Best Photo", desc: "A picture speaks a thousand words. Our built-in cropping tool helps you frame your photo perfectly. A matrimonial biodata with photo receives significantly more responses — choose circular or soft-square frames.", color: "from-rose-500 to-pink-600", bg: "bg-rose-50 dark:bg-rose-950/30", border: "border-rose-100 dark:border-rose-900/50", iconBg: "bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400" },
                { num: "3", icon: <Download className="w-5 h-5" />, title: "Select a Template and Download", desc: "Choose from our library of traditional and modern themes. Click generate, and you have your high-resolution biodata for marriage PDF ready to share on WhatsApp or print.", color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50 dark:bg-emerald-950/30", border: "border-emerald-100 dark:border-emerald-900/50", iconBg: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400" },
              ].map((s) => (
                <div key={s.num} className={`relative rounded-2xl p-6 border ${s.border} ${s.bg}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${s.iconBg}`}>{s.icon}</div>
                    <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${s.color} text-white font-black flex items-center justify-center text-xs shadow-md shrink-0`}>{s.num}</div>
                  </div>
                  <h4 className="font-bold text-zinc-900 dark:text-white mb-2">{s.title}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* Who Is a Marriage Biodata For? — callout box */}
            <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/20 border border-indigo-100 dark:border-indigo-900/40 mb-10">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">Who Is a Marriage Biodata For?</h3>
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                A <strong className="font-semibold text-zinc-900 dark:text-white">matrimonial biodata</strong> is for any person embarking on the arranged marriage process in India. Whether you are a Hindu, Muslim, Christian, Sikh, Jain, or Buddhist family — whether you are looking for a <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata format for a boy</strong> or a <strong className="font-semibold text-zinc-900 dark:text-white">shaadi biodata format for a girl</strong> — the format remains largely the same. Even in a second marriage, a well-prepared <strong className="font-semibold text-zinc-900 dark:text-white">matrimonial biodata format</strong> plays a crucial role in establishing trust and sharing your background clearly.
              </p>
            </div>

            {/* Download formats — 3 cards */}
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">Download as PDF, PNG — or Even Word</h3>
            <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              Once you are happy with your <strong className="font-semibold text-zinc-900 dark:text-white">biodata format for marriage</strong>, download it instantly. We support:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { icon: <FileText className="w-6 h-6" />, format: "PDF", desc: "Best for printing and emailing. Pixel-perfect on every device.", bg: "bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400", badge: "Recommended" },
                { icon: <ImageIcon className="w-6 h-6" />, format: "PNG Image", desc: "Best for WhatsApp sharing. Opens instantly without any app.", bg: "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400", badge: "Shareable" },
                { icon: <Shield className="w-6 h-6" />, format: "Word-Alternative", desc: "Many families search for a bio data format Word download. Our PDF builder produces a far better result than any Word template, without any layout-breaking issues.", bg: "bg-amber-50 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400", badge: "Better than Word" },
              ].map((item) => (
                <div key={item.format} className="p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${item.bg}`}>{item.icon}</div>
                  <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400 mb-2">{item.badge}</span>
                  <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-1">{item.format}</h4>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Regional Languages — callout with language pills */}
            <div className="p-6 rounded-2xl bg-teal-50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-teal-100 dark:bg-teal-900/40 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Support for Regional Languages</h3>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Often, families prefer exchanging profiles in their native language to maintain a strong cultural connection. If you are searching for a <strong className="font-semibold text-zinc-900 dark:text-white">bio data format free download</strong> in Marathi, Gujarati or Hindi, BiodataBuilder has you covered. Simply select your preferred language at the top of the form — all headings, fields, and labels are automatically translated. Your final output remains perfectly styled while adhering to your cultural preference.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {["English", "हिंदी", "मराठी", "ગુજરાતી", "தமிழ்", "తెలుగు"].map((lang) => (
                      <span key={lang} className="px-3 py-1 rounded-full bg-white dark:bg-zinc-900 border border-teal-200 dark:border-teal-800 text-sm font-medium text-teal-700 dark:text-teal-300">{lang}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Why PDF — callout */}
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Why Choose PDF over Word Documents?</h3>
                  <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    We highly recommend generating a <strong className="font-semibold text-zinc-900 dark:text-white">bio data format</strong> as a PDF rather than a Word doc. When you share a Word document via WhatsApp or email, the recipient&apos;s phone might not have the same fonts installed. This causes the text to overlap, images to shift, and the margins to break. A PDF freezes the design exactly as you see it on your screen, guaranteeing that prospective families see a polished, perfectly aligned <strong className="font-semibold text-zinc-900 dark:text-white">matrimonial biodata format</strong> every time. Additionally, PNG images are fantastic for quick sharing directly in chat windows. We provide both options absolutely free — no Word document limitations.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ========== FEATURED ARTICLES ========== */}
        <section className="py-20 px-5 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Guides & Resources</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Learn to Create the Perfect Biodata</h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">From matrimonial biodata formats to regional language guides — everything you need to make a great first impression.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: "Biodata for Marriage: Complete Guide", slug: "biodata-for-marriage", tag: "Pillar Guide", tagColor: "bg-indigo-50 text-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300", desc: "Everything you need to know about creating a bio data for marriage in India.", img: "/examples/Hero-composite.webp" },
                { title: "Biodata Tips: Photos, Mistakes & Hobbies", slug: "biodata-tips", tag: "Tips", tagColor: "bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300", desc: "Avoid the most common mistakes in a matrimonial biodata format.", img: "/examples/Biodata-hobbies-good-bad.webp" },
                { title: "Biodata Format in Word — PDF Is Better", slug: "biodata-format-word-download", tag: "Formats", tagColor: "bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300", desc: "Why PDF beats a Word download for your wedding biodata format.", img: "/examples/word_vs_pdf_biodata_infographic.webp" },
                { title: "Marriage Biodata Statistics (2026)", slug: "marriage-biodata-statistics-india", tag: "Insights", tagColor: "bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300", desc: "Key data on how Indian families use and share bio data for marriage.", img: "/examples/india-marriage-statistics-infographic-2024.webp" },
                { title: "Modern vs Traditional Biodata Format", slug: "modern-vs-traditional-biodata", tag: "Design", tagColor: "bg-rose-50 text-rose-700 dark:bg-rose-950/50 dark:text-rose-300", desc: "Which style of matrimonial biodata format is right for your family?", img: "/examples/modern_vs_traditional_infographic.webp" },
                { title: "Biodata Format in Hindi (हिंदी विवाह बायोडाटा)", slug: "biodata-format-hindi", tag: "Hindi", tagColor: "bg-orange-50 text-orange-700 dark:bg-orange-950/50 dark:text-orange-300", desc: "Create a beautiful bio data format in Hindi — free download included.", img: "/examples/Hindi-biodata-fields-infographic.webp" },
                { title: "How to Share Biodata on WhatsApp", slug: "biodata-format-for-whatsapp", tag: "Sharing", tagColor: "bg-teal-50 text-teal-700 dark:bg-teal-950/50 dark:text-teal-300", desc: "PDF vs PNG — the best way to share your marriage biodata on WhatsApp.", img: "/examples/whatsapp-biodata-infographic.webp" },
                { title: "Kundali Details in Marriage Biodata", slug: "kundali-details-in-biodata", tag: "Kundali", tagColor: "bg-sky-50 text-sky-700 dark:bg-sky-950/50 dark:text-sky-300", desc: "What Rashi, Nakshatra, Gotra, and Manglik details to include in your biodata.", img: "/examples/kundali_components_infographic.webp" },
              ].map((art) => (
                <Link key={art.slug} href={`/articles/${art.slug}`} className="group flex flex-col rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-200 dark:hover:border-indigo-800 hover:-translate-y-1 hover:shadow-lg transition-all overflow-hidden">
                  <div className="aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image src={art.img} alt={art.title} width={400} height={225} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${art.tagColor}`}>{art.tag}</span>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">{art.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed flex-1">{art.desc}</p>
                    <span className="text-indigo-600 dark:text-indigo-400 text-xs font-semibold mt-4 inline-block group-hover:translate-x-1 transition-transform">Read article →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/articles" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 font-semibold text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all">
                View All Guides →
              </Link>
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section className="py-20 px-5 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Loved By Many</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">What people are saying</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((tv, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                  <div className="flex mb-4">
                    {Array.from({ length: tv.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-5">&quot;{tv.text}&quot;</p>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-white text-sm">{tv.name}</div>
                    <div className="text-xs text-zinc-500">{tv.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== WHAT IS A MARRIAGE BIODATA ========== */}
        <section id="about-biodata" className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">What Is It?</p>
                <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">What is a Marriage Biodata?</h2>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  A <strong className="text-zinc-900 dark:text-white">marriage biodata</strong> is a one-page document used across India to introduce a person to prospective families during the arranged marriage process. It covers personal details, family background, education, occupation, and astrological information — your first impression before families meet.
                </p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-8">
                  Unlike a resume (career-focused), a biodata covers the whole person — roots, values, hobbies, and expectations from a life partner. It is shared on WhatsApp, matrimony websites, and through community networks.
                </p>
                <div className="space-y-3">
                  {[
                    { q: "Who needs a marriage biodata?", a: "Anyone entering the arranged marriage process in India — Hindu, Muslim, Christian, Sikh, or any community." },
                    { q: "What should it include?", a: "Name, date & time of birth, education, occupation, income, family details, horoscope/kundali info, and a clear photo." },
                    { q: "How long should it be?", a: "Always 1 page. Families review many profiles — a clean, focused single page is far more effective." },
                    { q: "PDF or Word document?", a: "Always PDF. Word documents break formatting on different phones. A PDF looks identical on every device." },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                      <p className="font-semibold text-zinc-900 dark:text-white text-sm mb-1">{item.q}</p>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-2xl">
                  <Image src="/examples/Boy-biodata-example.webp" alt="Sample marriage biodata format — BiodataBuilder" width={600} height={800} className="w-full h-auto" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-xl p-4">
                  <p className="text-xs text-zinc-500 mb-0.5">Generated with</p>
                  <p className="font-bold text-zinc-900 dark:text-white text-sm">BiodataBuilder.in</p>
                  <p className="text-xs text-emerald-600 font-medium">100% Free · No Watermark</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========== BEFORE / AFTER ========== */}
        <section className="py-12 px-5 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">See the Difference</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-8">Plain Word doc vs BiodataBuilder PDF</h2>
            <div className="rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-xl">
              <Image src="/examples/Before-after.webp" alt="Before and after comparison — plain Word biodata vs BiodataBuilder PDF" width={1200} height={600} className="w-full h-auto" />
            </div>
            <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400">Left: typical Word template shared on WhatsApp. Right: BiodataBuilder PDF — consistent on every device.</p>
          </div>
        </section>

        {/* ========== CTA BANNER ========== */}
        <section className="py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-12 md:p-16 text-center overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t("section.cta.title") ?? "Ready to create your marriage biodata?"}</h2>
                <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">
                  Used by families across India who created beautiful marriage biodata formats in minutes — completely free.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link
                    href="/create"
                    className="flex sm:inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-indigo-700 font-bold text-sm sm:text-base hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
                  >
                    <span>{t("section.cta.button") ?? "Create Biodata"}</span>
                    <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                  </Link>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent("Check out BiodataBuilder – Create a beautiful biodata document for free! 🎉\nhttps://biodatabuilder.in")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex sm:inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Share on WhatsApp
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

// ─── Page wrapper ─────────────────────────────────────────────────────────────
// LocaleWatcher is the ONLY component that uses useSearchParams, so Suspense
// only wraps it. HomeContent renders its full HTML immediately — bots and
// crawlers (Ahrefs, Googlebot) see all links and content without JavaScript.
export default function Home() {
  return (
    <>
      {/* Suspense boundary is tiny — only the invisible locale watcher */}
      <Suspense fallback={null}>
        <LocaleWatcher />
      </Suspense>
      <HomeContent />
    </>
  );
}
