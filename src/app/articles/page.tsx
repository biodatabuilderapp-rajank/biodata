import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "Biodata Formats & Guides | Learn How to Make a Biodata",
  description:
    "Expert guides on marriage biodata format for boy, girl, Hindu, Muslim & Christian families. Regional formats in Hindi, Marathi, Gujarati, Tamil & Telugu — free PDF.",
  alternates: { canonical: "https://biodatabuilder.in/articles" },
  openGraph: {
    type: "website",
    title: "Biodata Formats & Guides | Learn How to Make a Biodata",
    description:
      "Expert guides on marriage biodata format for boy, girl, Hindu, Muslim & Christian families. Regional formats in Hindi, Marathi, Gujarati, Tamil & Telugu — free PDF.",
    url: "https://biodatabuilder.in/articles",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BiodataBuilder — Free Marriage Biodata Maker",
      },
    ],
  },
};

/* ─────────────────────────── Article data ─────────────────────────── */

interface Article {
  title: string;
  slug: string;
  desc: string;
  img: string;
  category: string;
  lang?: string;
}

const ENGLISH_ARTICLES: Article[] = [
  {
    title: "Biodata for Marriage: The Ultimate Guide",
    slug: "biodata-for-marriage",
    desc: "The ultimate 2026 guide covering marriage biodata formats, templates, what details to include in a biodata for boy or girl, and real examples.",
    img: "/examples/Hero-composite.webp",
    category: "Ultimate Guide",
  },
  {
    title: "Biodata Tips: Mistakes to Avoid, Photos & Hobbies",
    slug: "biodata-tips",
    desc: "Avoid common biodata mistakes, pick the right profile photo, and write engaging hobbies. Master guide with before-and-after examples.",
    img: "/examples/groom_biodata_photo_tips.webp",
    category: "Tips & Tricks",
  },
  {
    title: "Marriage Biodata Statistics in India (2026)",
    slug: "marriage-biodata-statistics-india",
    desc: "Discover the latest statistics on Indian arranged marriages, biodata usage, formatting preferences, and digital trends for 2026.",
    img: "/examples/India-marriage-biodata-statistics.webp",
    category: "Statistics",
  },
  {
    title: "Biodata Format in Word for Marriage — And a Better Alternative",
    slug: "biodata-format-word-download",
    desc: "Looking for a Word download? Find out why PDF is better and create a beautiful marriage biodata for free in minutes — no Word needed.",
    img: "/examples/word_vs_pdf_biodata_infographic.webp",
    category: "Format & Download",
  },
  {
    title: "Best Marriage Biodata Format for Hindu Families",
    slug: "best-marriage-biodata-format-for-hindu",
    desc: "Essential elements every traditional Hindu biodata should contain — from Gotra and Rashi to Kundali details and family background.",
    img: "/examples/hindu_biodata_infographic.webp",
    category: "Hindu Biodata",
  },
  {
    title: "Marriage Biodata Format for Muslim Families",
    slug: "marriage-biodata-format-for-muslim",
    desc: "Covers Mehr, Wali, Biraderi, religious education, and Nikah biodata etiquette for Muslim marriage profiles.",
    img: "/examples/muslim-biodata-infographic.webp",
    category: "Muslim Biodata",
  },
  {
    title: "Marriage Biodata Format for Christian Families",
    slug: "marriage-biodata-format-for-christian",
    desc: "Denomination, church, and community-specific tips for Keralite, Goan, and Tamil Christian families writing a marriage biodata.",
    img: "/examples/christian-biodata-infographic.webp",
    category: "Christian Biodata",
  },
  {
    title: "Marriage Biodata for Boy (Groom Format Guide)",
    slug: "marriage-biodata-for-boy",
    desc: "The complete section-by-section guide to a groom's biodata with sample text, income disclosure tips, and personality writing advice.",
    img: "/examples/boy_biodata_infographic.webp",
    category: "Biodata for Boy",
  },
  {
    title: "Shaadi Biodata Format for Girl",
    slug: "shaadi-biodata-format-for-girl",
    desc: "How to structure a beautiful Shaadi biodata for a girl — including popular Marathi layouts and hobbies section examples.",
    img: "/examples/girl_biodata_infographic.webp",
    category: "Biodata for Girl",
  },
  {
    title: "Biodata for Second Marriage (Divorced & Widowed)",
    slug: "biodata-for-second-marriage",
    desc: "Honest, dignified guide with sample About Me text for divorced and widowed individuals seeking a second marriage biodata.",
    img: "/examples/Second-marriage-biodata-guide.webp",
    category: "Second Marriage",
  },
  {
    title: "Kundali Details in Biodata: What to Include",
    slug: "kundali-details-in-biodata",
    desc: "Rashi, Nakshatra, Gotra, Manglik status — a complete guide to all horoscope details to add in your Hindu marriage biodata.",
    img: "/examples/kundali-biodata-infographic.webp",
    category: "Kundali & Astrology",
  },
  {
    title: "Manglik Biodata Format & Guidance",
    slug: "manglik-biodata-format",
    desc: "What Manglik means, how to mention it honestly in your biodata, and how to attract compatible matches without stigma.",
    img: "/examples/manglik-biodata-infographic.webp",
    category: "Manglik Biodata",
  },
  {
    title: "Modern vs Traditional Biodata Format",
    slug: "modern-vs-traditional-biodata",
    desc: "When to use a modern layout vs a traditional ornate design — side-by-side comparison with real biodata format examples.",
    img: "/examples/modern_vs_traditional_infographic.webp",
    category: "Design Comparison",
  },
  {
    title: "How to Share Biodata on WhatsApp",
    slug: "biodata-format-for-whatsapp",
    desc: "PDF vs image, file size tips, what to write in the WhatsApp message, and privacy guidance when sharing your marriage biodata.",
    img: "/examples/whatsapp-biodata-infographic.webp",
    category: "Sharing Tips",
  },
  {
    title: "How to Write Your Biodata About Me Section",
    slug: "how-to-write-biodata-about-me",
    desc: "Expert tips and ready-to-use sample examples for boys, girls, and second marriages — write the perfect biodata About Me.",
    img: "/examples/About-me-5steps-infographic.webp",
    category: "Writing Guide",
  },
  {
    title: "Simple Biodata Format for Job PDF",
    slug: "simple-biodata-format-for-job-pdf",
    desc: "How to format a simple, professional biodata for job applications — different from a resume and preferred by many Indian employers.",
    img: "/examples/Job-biodata-structure.webp",
    category: "Job Biodata",
  },
  {
    title: "Biodata vs Resume vs CV — The Real Difference",
    slug: "biodata-vs-resume-difference",
    desc: "When to use a biodata, a resume, or a CV — and exactly what each document should contain for marriage and job applications.",
    img: "/examples/biodata-vs-resume-infographic.webp",
    category: "Comparison",
  },
];

const REGIONAL_ARTICLES: Article[] = [
  {
    title: "विवाह बायोडाटा फॉर्मेट हिंदी में",
    slug: "biodata-format-hindi",
    desc: "हिंदी में शादी का बायोडाटा कैसे बनाएं? सही जानकारी, फॉर्मेट और PDF डाउनलोड।",
    img: "/examples/Hindi-biodata-fields-infographic.webp",
    category: "हिंदी गाइड",
    lang: "हिंदी",
  },
  {
    title: "How to Write a Marriage Biodata in Hindi",
    slug: "vivah-biodata-format-hindi",
    desc: "A detailed breakdown of writing a vivah biodata format specifically geared for Hindi-speaking families and traditions.",
    img: "/examples/Boy-biodata-example.webp",
    category: "Hindi Guide",
    lang: "हिंदी",
  },
  {
    title: "लग्न बायोडाटा फॉर्मेट मराठी",
    slug: "lagna-biodata-format-marathi",
    desc: "मराठी मध्ये लग्न बायोडाटा कसा तयार करायचा? योग्य माहिती व विनामूल्य PDF.",
    img: "/examples/Boy-biodata-example-Marathi.webp",
    category: "मराठी गाइड",
    lang: "मराठी",
  },
  {
    title: "લગ્ન બાયોડેટા ફોર્મેટ ગુજરાતી",
    slug: "lagna-biodata-format-gujarati",
    desc: "ગુજરાતીમાં લગ્ન બાયોડેટા કેવી રીતે બનાવવો? સાચી માહિતી અને મફ્ત PDF.",
    img: "/examples/Boy-biodata-example-Gujarati.webp",
    category: "ગુજરાતી ગાઇડ",
    lang: "ગુજરાતી",
  },
  {
    title: "திருமண பயோடேட்டா வடிவம் தமிழில்",
    slug: "thirumanam-biodata-format-tamil",
    desc: "தமிழில் திருமண பயோடேட்டா எப்படி தயாரிப்பது? சரியான வடிவம் மற்றும் இலவச PDF.",
    img: "/examples/Boy-biodata-example-Tamil.webp",
    category: "தமிழ் வழிகாட்டி",
    lang: "தமிழ்",
  },
  {
    title: "వివాహ బయోడేటా ఫార్మాట్ తెలుగులో",
    slug: "vivah-biodata-format-telugu",
    desc: "తెలుగులో వివాహ బయోడేటా ఎలా తయారు చేయాలి? సరైన ఫార్మాట్ మరియు ఉచిత PDF.",
    img: "/examples/Boy-biodata-example-Telugu.webp",
    category: "తెలుగు గైడ్",
    lang: "తెలుగు",
  },
];

/* ─────────────────────────── Category colour map ─────────────────────────── */

const CATEGORY_COLORS: Record<string, string> = {
  "Ultimate Guide": "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
  "Tips & Tricks": "bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  Statistics: "bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300 border-sky-200 dark:border-sky-800",
  "Format & Download": "bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-300 border-violet-200 dark:border-violet-800",
  "Hindu Biodata": "bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  "Muslim Biodata": "bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800",
  "Christian Biodata": "bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800",
  "Biodata for Boy": "bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800",
  "Biodata for Girl": "bg-pink-100 text-pink-700 dark:bg-pink-950/60 dark:text-pink-300 border-pink-200 dark:border-pink-800",
  "Second Marriage": "bg-purple-100 text-purple-700 dark:bg-purple-950/60 dark:text-purple-300 border-purple-200 dark:border-purple-800",
  "Kundali & Astrology": "bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  "Manglik Biodata": "bg-red-100 text-red-700 dark:bg-red-950/60 dark:text-red-300 border-red-200 dark:border-red-800",
  "Design Comparison": "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-950/60 dark:text-fuchsia-300 border-fuchsia-200 dark:border-fuchsia-800",
  "Sharing Tips": "bg-lime-100 text-lime-700 dark:bg-lime-950/60 dark:text-lime-300 border-lime-200 dark:border-lime-800",
  "Writing Guide": "bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800",
  "Job Biodata": "bg-slate-100 text-slate-700 dark:bg-slate-950/60 dark:text-slate-300 border-slate-200 dark:border-slate-800",
  Comparison: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700",
};

/* ─────────────────────────── Card component ─────────────────────────── */

function ArticleCard({ title, slug, desc, img, category, lang }: Article) {
  const colorClass =
    CATEGORY_COLORS[category] ??
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800";

  return (
    <Link
      href={`/articles/${slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        <Image
          src={img}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tags row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span
            className={`inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full border ${colorClass}`}
          >
            {category}
          </span>
          {lang && (
            <span className="inline-block px-2.5 py-0.5 text-[11px] font-semibold rounded-full border bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
              {lang}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug mb-2 line-clamp-2">
          {title}
        </h2>

        {/* Description */}
        <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed line-clamp-3 flex-1">
          {desc}
        </p>

        {/* CTA */}
        <span className="mt-4 text-indigo-600 dark:text-indigo-400 text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
          Read Guide
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────── BreadcrumbList schema ─────────────────────────── */

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://biodatabuilder.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Biodata Guides",
      item: "https://biodatabuilder.in/articles",
    },
  ],
};

/* ─────────────────────────── Page ─────────────────────────── */

export default function ArticlesIndex() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-500">
          <li>
            <Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-zinc-800 dark:text-zinc-300 font-medium">Biodata Guides</li>
        </ol>
      </nav>

      {/* Hero section */}
      <div className="mb-12">
        <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">
          Expert Guides & Formats
        </p>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-white mb-5 leading-tight">
          Biodata Formats &amp; Guides
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
          Everything you need to create the perfect <strong>marriage biodata</strong> — from a{" "}
          <strong>biodata format for boy</strong> or{" "}
          <strong>biodata for girl</strong> to religion-specific formats for{" "}
          <strong>Hindu, Muslim, and Christian</strong> families. Explore regional guides in{" "}
          <strong>Hindi, Marathi, Gujarati, Tamil, and Telugu</strong>, plus tips on biodata
          photos, the About Me section, WhatsApp sharing, and free PDF downloads. All guides
          are written by experts with real biodata examples and{" "}
          <strong>vivah biodata format</strong> samples.
        </p>

        {/* Quick stat pills */}
        <div className="mt-6 flex flex-wrap gap-3">
          {["23 Guides", "6 Regional Languages", "Free PDF", "2026 Updated"].map((pill) => (
            <span
              key={pill}
              className="px-3 py-1.5 text-xs font-semibold rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-14">
        {/* English Articles */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">Guides in English</h2>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 shrink-0">
              {ENGLISH_ARTICLES.length} articles
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ENGLISH_ARTICLES.map((art) => (
              <ArticleCard key={art.slug} {...art} />
            ))}
          </div>
        </section>

        {/* Regional Articles */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
              Regional Language Guides
            </h2>
            <div className="flex-1 h-px bg-zinc-200 dark:bg-zinc-800" />
            <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500 shrink-0">
              {REGIONAL_ARTICLES.length} articles
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REGIONAL_ARTICLES.map((art) => (
              <ArticleCard key={art.slug} {...art} />
            ))}
          </div>
        </section>

        {/* CTA Banner */}
        <section className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 p-8 sm:p-12 text-center text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_30%_20%,white,transparent_60%)]" />
          <p className="text-sm font-semibold uppercase tracking-widest opacity-80 mb-2">
            Ready to start?
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            Create Your Free Marriage Biodata
          </h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto text-sm sm:text-base">
            Choose from beautiful templates, fill in your details, and download a print-ready
            PDF biodata — completely free, no signup needed.
          </p>
          <Link
            href="/create"
            prefetch={false}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-indigo-700 font-bold text-sm hover:bg-indigo-50 transition-all shadow-lg shadow-indigo-900/30 hover:-translate-y-0.5"
          >
            Create Free Biodata
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </section>
      </div>
    </>
  );
}
