import type { Metadata } from "next";
import CreatePageClient from "./_CreatePage";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";
import {
  FileText, Camera, Palette, Download,
  CheckCircle2, Star, Globe, Shield,
  RefreshCw, Heart, Users, PenLine,
  MapPin, ChevronDown,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Free Marriage Biodata Maker — Create & Download PDF Instantly",
  description:
    "Create a beautiful Indian marriage biodata online in minutes. Free matrimonial biodata templates for Hindu, Muslim & Christian families. Download PDF free — no sign-up.",
  alternates: { canonical: "https://biodatabuilder.in/create" },
  openGraph: {
    type: "website",
    url: "https://biodatabuilder.in/create",
    title: "Free Marriage Biodata Maker — Create & Download PDF",
    description:
      "Build a beautiful Indian marriage biodata online in minutes. Free matrimonial biodata templates, instant PDF download, no registration needed.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "BiodataBuilder — Free Marriage Biodata Maker" }],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Create Biodata", item: "https://biodatabuilder.in/create" },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the easiest way to make a marriage biodata online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way is to use BiodataBuilder. Pick a template, fill in your personal, family, and career details, upload a photo, and download your finished PDF in minutes — all in your browser, no app or registration required.",
      },
    },
    {
      "@type": "Question",
      name: "What details should be included in a marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete marriage biodata should include: full name, date of birth, height, religion/community, education, career (job title, company, income), family background (parents' names and occupations, siblings), hobbies, an About Me section, partner expectations, and contact details. For Hindu families, Rashi, Nakshatra, Gotra, and Manglik status are also commonly included.",
      },
    },
    {
      "@type": "Question",
      name: "Is it free to create a marriage biodata on BiodataBuilder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 100% free. There are no hidden fees, no watermarks, and no subscription required. You can create, customize, and download your marriage biodata PDF completely free.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to register or sign up to create a biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No registration or sign-up is required. Simply open BiodataBuilder, fill in your details, and download your PDF instantly. Your data stays entirely on your device.",
      },
    },
    {
      "@type": "Question",
      name: "Is my personal information safe and private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Everything you enter in BiodataBuilder is stored locally in your browser and never uploaded to any server. Your biodata details are completely private and never shared with third parties.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create a marriage biodata in Hindi, Marathi, Tamil, or other regional languages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BiodataBuilder supports biodata creation in multiple Indian languages and regional formats. You can also explore our regional guides: Vivah Biodata in Hindi, Lagna Biodata in Marathi, Lagna Biodata in Gujarati, Thirumanam Biodata in Tamil, and Vivah Biodata in Telugu.",
      },
    },
    {
      "@type": "Question",
      name: "What types of marriage biodata templates are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BiodataBuilder offers a range of templates including classic traditional designs (with floral borders and religious headers), modern minimal layouts, and community-specific formats for Hindu, Muslim, Christian, Jain, and Sikh families.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a biodata for marriage for a girl or a boy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process is the same for both. Select your template, fill in personal details (adjusting sections like hobbies and expectations to reflect your personality), add a photo, and download. For specific guides, see our article on Shaadi Biodata Format for Girls or Marriage Biodata for Boys.",
      },
    },
    {
      "@type": "Question",
      name: "Can I download my marriage biodata as a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Once you have filled in your details and chosen a template, you can instantly download a high-quality PDF — ready to print, email, or share on WhatsApp with family and matchmakers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a marriage biodata and a resume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marriage biodata is specifically for matrimonial introductions — it includes personal details, family background, religious/astrological information, hobbies, and partner expectations. A resume is for professional job applications and focuses on work experience, skills, and achievements. The two serve completely different purposes.",
      },
    },
    {
      "@type": "Question",
      name: "How can I create a biodata suitable for both traditional and modern families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose a template that blends traditional structure with a clean modern layout. Include all traditional sections (Gotra, Manglik status, family details) while keeping your About Me and Expectations sections personal and genuine. BiodataBuilder's templates are designed to appeal to both traditional and modern sensibilities.",
      },
    },
    {
      "@type": "Question",
      name: "What should I include in the 'About Me' section of a marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The About Me section should be 3–5 sentences covering your personality, values, and what you bring to a relationship. Mention your interests, your family orientation, and what you are looking for in a life partner. Keep it genuine, warm, and specific — avoid generic phrases. See our guide on How to Write a Biodata About Me Section for examples.",
      },
    },
  ],
};

const faqs = [
  {
    q: "What is the easiest way to make a marriage biodata online?",
    a: "Use BiodataBuilder — pick a template, fill in your details, and download your finished PDF in minutes. Everything runs in your browser. No app, no registration, no design skills needed.",
  },
  {
    q: "What details should I include in a marriage biodata?",
    a: "Full name, DOB, height, religion/community, education, career (job title, company, income), family background (parents, siblings), hobbies, About Me, partner expectations, and contact details. Hindu families also typically include Rashi, Nakshatra, Gotra, and Manglik status.",
  },
  {
    q: "Is it completely free? Any hidden fees or watermarks?",
    a: "100% free. No hidden fees, no watermarks, no subscription. Create, customize, and download your marriage biodata PDF at no cost.",
  },
  {
    q: "Do I need to sign up or register?",
    a: "No. Just open BiodataBuilder, fill in your details, and download instantly. Your data stays entirely on your own device — nothing is stored on our servers.",
  },
  {
    q: "Is my personal information safe?",
    a: "Yes. Everything you enter stays in your browser's local storage and is never uploaded to any server. Your biodata data is completely private and never shared.",
  },
  {
    q: "Can I create a biodata in Hindi, Marathi, Tamil, or other regional languages?",
    a: "Yes. BiodataBuilder supports regional Indian formats. You can also explore our dedicated guides for Hindi, Marathi, Gujarati, Tamil, and Telugu biodata.",
  },
  {
    q: "What types of marriage biodata templates are available?",
    a: "Traditional ornate designs, modern minimal layouts, and community-specific formats for Hindu, Muslim, Christian, Jain, and Sikh families — with the right fields for each community built in.",
  },
  {
    q: "Can I download my biodata as a PDF?",
    a: "Yes. Once done, download a high-quality PDF instantly — ready to print, email, or share on WhatsApp with family and matchmakers.",
  },
  {
    q: "What is the difference between a marriage biodata and a resume?",
    a: "A marriage biodata is for matrimonial introductions — family background, personal details, religious/astrological information. A resume is for job applications. They serve completely different purposes.",
  },
  {
    q: "What should I write in the 'About Me' section?",
    a: "3–5 sentences covering your personality, values, interests, and what you are looking for in a partner. Keep it genuine and specific — avoid generic phrases. See our About Me guide for sample text.",
  },
  {
    q: "Can I create a biodata on my mobile phone?",
    a: "Yes. BiodataBuilder is fully mobile-friendly. Open it in any browser on your phone, fill in your details, and download your PDF — no app installation needed.",
  },
  {
    q: "Is there a template for second marriage or divorce biodata?",
    a: "Yes. Our builder supports all marital statuses. State your status clearly (Divorced/Widowed) and fill in your details as usual. Read our guide on Biodata for Second Marriage for detailed tips.",
  },
];

export default function CreatePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CreatePageClient />

      {/* ── Below-the-fold SEO content ── */}
      <div className="bg-white dark:bg-zinc-950">

        {/* How it works */}
        <section className="max-w-5xl mx-auto px-5 py-20">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3 text-center">Simple Process</p>
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
            How to Create a Marriage Biodata Online — In 4 Simple Steps
          </h1>
          <p className="text-center text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
            No design skills needed. No registration. Your beautiful matrimonial biodata PDF is ready in under 5 minutes — completely free, no watermarks.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {([
              { step: "1", title: "Fill In Your Details", icon: <FileText className="w-5 h-5" />, desc: "Enter your personal info, family background, education, career, Kundali details, hobbies, and partner expectations in our simple guided form.", color: "from-violet-500 to-purple-600", bg: "bg-violet-50 dark:bg-violet-950/30", border: "border-violet-100 dark:border-violet-900/50", iconBg: "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400" },
              { step: "2", title: "Upload Your Photo", icon: <Camera className="w-5 h-5" />, desc: "Add a recent clear photo and preview exactly how your matrimonial biodata looks. Use our built-in crop tool for a perfect circular or square frame.", color: "from-rose-500 to-pink-600", bg: "bg-rose-50 dark:bg-rose-950/30", border: "border-rose-100 dark:border-rose-900/50", iconBg: "bg-rose-100 dark:bg-rose-900/40 text-rose-600 dark:text-rose-400" },
              { step: "3", title: "Choose a Template", icon: <Palette className="w-5 h-5" />, desc: "Pick from traditional, modern, or community-specific biodata designs — Hindu, Muslim, Christian, and more. Preview live before you download.", color: "from-amber-500 to-orange-500", bg: "bg-amber-50 dark:bg-amber-950/30", border: "border-amber-100 dark:border-amber-900/50", iconBg: "bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400" },
              { step: "4", title: "Download Free PDF", icon: <Download className="w-5 h-5" />, desc: "One click. Instant download. Your high-quality marriage biodata PDF is ready to share on WhatsApp, email, or print at home — always 100% free.", color: "from-emerald-500 to-teal-600", bg: "bg-emerald-50 dark:bg-emerald-950/30", border: "border-emerald-100 dark:border-emerald-900/50", iconBg: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400" },
            ] as const).map((s, i) => (
              <div key={s.step} className={`relative rounded-2xl p-6 border ${s.border} ${s.bg}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${s.iconBg}`}>
                    {s.icon}
                  </div>
                  <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${s.color} text-white font-black flex items-center justify-center text-xs shadow-md shrink-0`}>
                    {s.step}
                  </div>
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-10 -right-3 z-10 text-zinc-300 dark:text-zinc-600 items-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>


        {/* ── SEO PROSE: What is a Marriage Biodata? ── */}
        <section className="max-w-5xl mx-auto px-5 py-16 border-t border-zinc-100 dark:border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: prose + Q&A cards */}
            <div>
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">What Is It?</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">What is a Marriage Biodata?</h2>
              <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed text-base">
                <p>
                  A <strong className="text-zinc-900 dark:text-white">marriage biodata</strong> — also called a <strong className="text-zinc-900 dark:text-white">matrimonial biodata</strong>, <em>vivah biodata</em>, <em>lagna biodata</em>, <em>rishta biodata</em>, or <em>bio data for marriage</em> — is a one-page document that introduces a person to prospective families during the Indian arranged marriage process. It is the matrimonial equivalent of a professional resume: your first impression before families meet in person.
                </p>
                <p>
                  Unlike a standard resume (which focuses on career history), a <strong className="text-zinc-900 dark:text-white">biodata for marriage</strong> covers the whole person — personal details, family background, religious and astrological information, hobbies, values, and expectations from a life partner. It is typically shared as a <strong className="text-zinc-900 dark:text-white">marriage biodata PDF</strong> on WhatsApp, via matrimony websites, and through family and community networks.
                </p>
                <p>
                  Many families search for a <strong className="text-zinc-900 dark:text-white">marriage biodata format Word download</strong> — but Word documents frequently break formatting across different phones and devices, making the <strong className="text-zinc-900 dark:text-white">wedding biodata format</strong> look unprofessional. A PDF generated with BiodataBuilder looks pixel-perfect on every device. Our free <strong className="text-zinc-900 dark:text-white">biodata maker</strong> supports all major Indian communities — create a <strong className="text-zinc-900 dark:text-white">Hindu matrimonial biodata</strong>, <strong className="text-zinc-900 dark:text-white">Muslim rishta biodata</strong>, <strong className="text-zinc-900 dark:text-white">Christian marriage biodata</strong>, a <strong className="text-zinc-900 dark:text-white">shaadi biodata format for a girl</strong>, or a regional language biodata in Hindi, Marathi, Gujarati, Tamil, or Telugu — all completely free, no sign-up required.
                </p>
              </div>
              {/* Q&A mini-cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { q: "Who needs a marriage biodata?", a: "Anyone entering the arranged marriage process in India — Hindu, Muslim, Christian, Sikh, or any community." },
                  { q: "How long should it be?", a: "Always 1 page. Families review many profiles — a focused single page is far more effective than multiple pages." },
                  { q: "PDF or Word document?", a: "Always PDF. Word documents break formatting on different phones. A PDF looks identical on every device." },
                  { q: "Is BiodataBuilder really free?", a: "Yes — 100% free, no watermarks, no registration, no hidden fees. Create and download as many times as you like." },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900">
                    <p className="font-semibold text-zinc-900 dark:text-white text-sm mb-1">{item.q}</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Right: biodata example image */}
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-2xl">
                <Image
                  src="/examples/Boy-biodata-example.webp"
                  alt="Sample marriage biodata format generated by BiodataBuilder"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800 shadow-xl p-4">
                <p className="text-xs text-zinc-500 mb-0.5">Generated with</p>
                <p className="font-bold text-zinc-900 dark:text-white text-sm">BiodataBuilder.in</p>
                <p className="text-xs text-emerald-600 font-medium">100% Free · No Watermark</p>
              </div>
            </div>
          </div>
        </section>


        {/* What to include */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800 py-20 px-5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
              What to Include in a Marriage Biodata
            </h2>
            <p className="text-center text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
              A complete marriage biodata covers these sections — all available in BiodataBuilder.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Section</th>
                    <th className="px-5 py-3 font-semibold">What to Include</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    ["Personal Details", "Full name, DOB, height, blood group, complexion, marital status"],
                    ["Religious / Astrological", "Religion, community/caste, Gotra, Rashi, Nakshatra, Manglik status (for Hindu families)"],
                    ["Education", "Highest degree, college/university name, field of study"],
                    ["Career", "Job title, company/employer, annual income (optional)"],
                    ["Family Background", "Father & mother (name + occupation), siblings, family city"],
                    ["About Me", "3–5 sentence personal statement — personality, values, interests"],
                    ["Partner Expectations", "2–3 sentences on what you are looking for"],
                    ["Contact Details", "WhatsApp number, email — parent or candidate"],
                  ].map(([section, detail]) => (
                    <tr key={section} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{section}</td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 py-6 px-5">
          <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-white text-sm font-semibold">
            {[
              { icon: <CheckCircle2 className="w-4 h-4" />, label: "100% Free — Always" },
              { icon: <Star className="w-4 h-4" />, label: "No Watermarks" },
              { icon: <Download className="w-4 h-4" />, label: "Instant PDF Download" },
              { icon: <Globe className="w-4 h-4" />, label: "6 Indian Languages" },
              { icon: <Shield className="w-4 h-4" />, label: "Private — Data Stays on Your Device" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 opacity-95">
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── WHO IS THIS FOR? ── */}
        <section className="max-w-5xl mx-auto px-5 py-16">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3 text-center">Made For Everyone</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">Who is This Biodata Maker For?</h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl mx-auto">BiodataBuilder is built for every Indian family entering the matrimonial process — any community, any language, any background.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { who: "Groom (Boy)", icon: <Users className="w-5 h-5" />, iconBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400", desc: "Create a complete marriage biodata for a boy — with education, career, income, family background, and Kundali details structured professionally.", link: "/articles/marriage-biodata-for-boy" },
              { who: "Bride (Girl)", icon: <Heart className="w-5 h-5" />, iconBg: "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400", desc: "Create a shaadi biodata format for a girl — personal interests, family values, hobbies, and expectations for a life partner presented elegantly.", link: "/articles/shaadi-biodata-format-for-girl" },
              { who: "Hindu Families", icon: <Star className="w-5 h-5" />, iconBg: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400", desc: "Include Gotra, Rashi, Nakshatra, Manglik status, and community-specific fields in a beautiful Hindu matrimonial biodata format.", link: "/articles/best-marriage-biodata-format-for-hindu" },
              { who: "Muslim Families", icon: <Globe className="w-5 h-5" />, iconBg: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400", desc: "Create a Muslim rishta biodata with appropriate community fields, religious background, and a professional layout for Islamic matrimonial introductions.", link: "/articles/marriage-biodata-format-for-muslim" },
              { who: "Second Marriage", icon: <RefreshCw className="w-5 h-5" />, iconBg: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400", desc: "Create a biodata for second marriage or divorce with honest, clear presentation — covering your current status, background, and expectations confidently.", link: "/articles/biodata-for-second-marriage" },
              { who: "Regional Languages", icon: <MapPin className="w-5 h-5" />, iconBg: "bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400", desc: "Create a vivah biodata in Hindi, lagna biodata in Marathi or Gujarati, thirumanam biodata in Tamil, or vivah biodata in Telugu — all fully supported.", link: "/articles/biodata-for-marriage" },
            ].map((item) => (
              <Link key={item.who} href={item.link} className="block p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:-translate-y-1 hover:shadow-md transition-all group">
                <div className={`inline-flex w-10 h-10 rounded-xl items-center justify-center mb-3 ${item.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">{item.who}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-5 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
            Tips for Writing an Effective Marriage Biodata
          </h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
            A well-written biodata consistently gets more genuine responses from families.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Be honest and specific", icon: <Shield className="w-5 h-5" />, iconBg: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400", desc: "State your actual income, height, and marital status clearly in your matrimonial biodata. Families that discover inaccuracies early will not proceed — honesty saves everyone time and builds trust from the start." },
              { title: "Write a genuine About Me", icon: <PenLine className="w-5 h-5" />, iconBg: "bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400", desc: "3–5 lines that feel like you. Mention what you do on weekends, your values, and what kind of partner you are hoping for. Avoid generic phrases like 'simple and humble' — be specific and authentic." },
              { title: "Use a recent, clear photo", icon: <Camera className="w-5 h-5" />, iconBg: "bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400", desc: "A smiling, well-lit, front-facing photo dramatically increases genuine responses to your marriage biodata. Avoid cropped group photos or blurry images — a clear photo builds confidence in families." },
              { title: "Keep it to one page", icon: <FileText className="w-5 h-5" />, iconBg: "bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400", desc: "A tight, well-structured biodata for marriage is far more readable than a two-page document. Use tables and clear sections — families review many profiles, so a focused single page is far more effective." },
              { title: "Include Kundali details if relevant", icon: <Star className="w-5 h-5" />, iconBg: "bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400", desc: "For Hindu families, including Rashi, Nakshatra, Gotra, and Manglik status upfront in your Hindu matrimonial biodata avoids delays, shows preparedness, and speeds up the matching process." },
              { title: "State expectations kindly", icon: <Heart className="w-5 h-5" />, iconBg: "bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400", desc: "2–3 sentences on partner preferences is enough. Keep the tone open and positive in your biodata for marriage — hard requirements listed bluntly can feel off-putting to prospective families." },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-4 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${tip.iconBg}`}>
                  {tip.icon}
                </div>
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{tip.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community guides */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800 py-20 px-5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
              Community & Language-Specific Biodata Guides
            </h2>
            <p className="text-center text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
              Every community has specific expectations and fields. Read our dedicated guides:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Hindu Marriage Biodata", slug: "best-marriage-biodata-format-for-hindu" },
                { title: "Muslim Rishta Biodata", slug: "marriage-biodata-format-for-muslim" },
                { title: "Christian Marriage Biodata", slug: "marriage-biodata-format-for-christian" },
                { title: "Vivah Biodata in Hindi", slug: "vivah-biodata-format-hindi" },
                { title: "Lagna Biodata in Marathi", slug: "lagna-biodata-format-marathi" },
                { title: "Lagna Biodata in Gujarati", slug: "lagna-biodata-format-gujarati" },
                { title: "Thirumanam Biodata in Tamil", slug: "thirumanam-biodata-format-tamil" },
                { title: "Vivah Biodata in Telugu", slug: "vivah-biodata-format-telugu" },
                { title: "Manglik Biodata Guide", slug: "manglik-biodata-format" },
                { title: "Biodata for Second Marriage", slug: "biodata-for-second-marriage" },
                { title: "Shaadi Biodata for Girl", slug: "shaadi-biodata-format-for-girl" },
                { title: "Marriage Biodata for Boy", slug: "marriage-biodata-for-boy" },
                { title: "Biodata for Marriage — Pillar Guide", slug: "biodata-for-marriage" },
                { title: "Kundali Details in Biodata", slug: "kundali-details-in-biodata" },
                { title: "How to Write About Me", slug: "how-to-write-biodata-about-me" },
                { title: "Biodata Tips & Mistakes", slug: "biodata-tips" },
                { title: "Biodata vs Resume Difference", slug: "biodata-vs-resume-difference" },
                { title: "Modern vs Traditional Biodata", slug: "modern-vs-traditional-biodata" },
              ].map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/articles/${guide.slug}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all group text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                >
                  {guide.title}
                  <span className="text-indigo-400 group-hover:translate-x-1 transition-transform ml-2 flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* ── Internal Link Block ── */}
        <section className="max-w-5xl mx-auto px-5 py-16 border-t border-zinc-100 dark:border-zinc-900">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3 text-center">Expert Guides</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
            Guides to Help You Write Your Biodata
          </h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
            Not sure what to write? Our expert guides cover every section — from the About Me paragraph to Kundali details.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "How to Write Your About Me Section", slug: "how-to-write-biodata-about-me", emoji: "✍️" },
              { title: "Kundali Details to Include in Biodata", slug: "kundali-details-in-biodata", emoji: "🔯" },
              { title: "Biodata Tips & Mistakes to Avoid", slug: "biodata-tips", emoji: "💡" },
              { title: "Marriage Biodata for Boy (Groom Guide)", slug: "marriage-biodata-for-boy", emoji: "👨" },
              { title: "Shaadi Biodata Format for Girl", slug: "shaadi-biodata-format-for-girl", emoji: "👩" },
              { title: "Best Hindu Marriage Biodata Format", slug: "best-marriage-biodata-format-for-hindu", emoji: "🪔" },
            ].map((guide) => (
              <Link
                key={guide.slug}
                href={`/articles/${guide.slug}`}
                className="flex items-start gap-3 p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all group"
              >
                <span className="text-2xl shrink-0 mt-0.5">{guide.emoji}</span>
                <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 leading-snug">
                  {guide.title}
                  <span className="block text-indigo-400 text-xs mt-1 group-hover:translate-x-1 transition-transform">Read guide →</span>
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-5 py-20">
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3 text-center">FAQ</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 mb-12">
            Everything you need to know about creating your marriage biodata online — free, private, and instant.
          </p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none">
                  <h3 className="font-semibold text-zinc-900 dark:text-white text-sm sm:text-base leading-snug">{faq.q}</h3>
                  <ChevronDown className="w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-5 border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="max-w-5xl mx-auto px-5 pb-20">
          <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-10 md:p-14 text-center overflow-hidden">
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Ready to create your marriage biodata?</h2>
              <p className="text-indigo-100 mb-8 max-w-md mx-auto text-sm sm:text-base">
                Join thousands of Indian families who created beautiful matrimonial biodatas in minutes — completely free, no registration required.
              </p>
              <Link
                href="/create"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-all shadow-xl hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                Create Free Biodata Now
              </Link>
            </div>
          </div>
        </section>


      </div>
      <SiteFooter />
    </>
  );
}
