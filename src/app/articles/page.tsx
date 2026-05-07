import Link from "next/link";

export const metadata = {
  title: "Biodata Formats & Guides | Learn How to Make a Biodata",
  description: "Explore comprehensive guides on creating the perfect marriage and job biodata, in English and Indian regional languages.",
  alternates: { canonical: "https://biodatabuilder.in/articles" },
  openGraph: {
    title: "Biodata Formats & Guides | Learn How to Make a Biodata",
    description: "Explore comprehensive guides on creating the perfect marriage and job biodata, in English and Indian regional languages.",
    url: "https://biodatabuilder.in/articles",
  },
};

const ENGLISH_ARTICLES = [
  { title: "Biodata for Marriage: The Ultimate Guide", slug: "biodata-for-marriage", desc: "The ultimate 2026 guide covering formats, templates, what details to include, and examples." },
  { title: "Biodata Tips: Mistakes to Avoid, Photos & Hobbies", slug: "biodata-tips", desc: "Avoid common mistakes, pick the right profile photo, and write engaging hobbies. Master guide with examples." },
  { title: "Marriage Biodata Statistics in India (2026)", slug: "marriage-biodata-statistics-india", desc: "Discover the latest statistics on Indian arranged marriages, biodata usage, formatting, and digital trends." },
  { title: "Biodata Format in Word for Marriage — And a Better Alternative", slug: "biodata-format-word-download", desc: "Looking for a Word download? Find out why PDF is better and create a beautiful biodata for free in minutes." },
  { title: "Best Marriage Biodata Format for Hindu Families", slug: "best-marriage-biodata-format-for-hindu", desc: "Essential elements every traditional Hindu biodata should contain — from Gotra to Kundali details." },
  { title: "Marriage Biodata Format for Muslim Families", slug: "marriage-biodata-format-for-muslim", desc: "Covers Mehr, Wali, Biraderi, religious education, and Nikah biodata etiquette." },
  { title: "Marriage Biodata Format for Christian Families", slug: "marriage-biodata-format-for-christian", desc: "Denomination, church, community-specific tips for Keralite, Goan, Tamil Christian families." },
  { title: "Marriage Biodata for Boy (Groom Format Guide)", slug: "marriage-biodata-for-boy", desc: "The complete section-by-section guide to a groom's biodata with sample text and income tips." },
  { title: "Shaadi Biodata Format for Girl", slug: "shaadi-biodata-format-for-girl", desc: "How to structure a beautiful Shaadi biodata for a girl, including popular Marathi layouts." },
  { title: "Biodata for Second Marriage (Divorced & Widowed)", slug: "biodata-for-second-marriage", desc: "Honest, dignified guide with sample About Me text for divorced and widowed individuals." },
  { title: "Kundali Details in Biodata: What to Include", slug: "kundali-details-in-biodata", desc: "Rashi, Nakshatra, Gotra, Manglik status — a complete guide to horoscope details in your biodata." },
  { title: "Manglik Biodata Format & Guidance", slug: "manglik-biodata-format", desc: "What Manglik means, how to mention it, and how to attract compatible matches." },
  { title: "Modern vs Traditional Biodata Format", slug: "modern-vs-traditional-biodata", desc: "When to use a modern layout vs a traditional ornate design, with a side-by-side comparison." },
  { title: "How to Share Biodata on WhatsApp", slug: "biodata-format-for-whatsapp", desc: "PDF vs image, file size tips, what to write in the message, and privacy guidance." },
  { title: "How to Write Your Biodata About Me Section", slug: "how-to-write-biodata-about-me", desc: "Expert tips and ready-to-use sample examples for boys, girls, and second marriages." },
  { title: "Simple Biodata Format for Job PDF", slug: "simple-biodata-format-for-job-pdf", desc: "How to format a simple, professional biodata for job applications." },
  { title: "Biodata vs Resume vs CV — The Real Difference", slug: "biodata-vs-resume-difference", desc: "When to use a biodata, a resume, or a CV — and what each document contains." },
];

const REGIONAL_ARTICLES = [
  { title: "विवाह बायोडाटा फॉर्मेट हिंदी में", slug: "biodata-format-hindi", desc: "हिंदी में शादी का बायोडाटा कैसे बनाएं? सही जानकारी, फॉर्मेट और PDF डाउनलोड।", lang: "हिंदी" },
  { title: "How to Write a Marriage Biodata in Hindi", slug: "vivah-biodata-format-hindi", desc: "A detailed breakdown of writing a format specifically geared for Hindi speaking families.", lang: "हिंदी" },
  { title: "लग्न बायोडाटा फॉर्मेट मराठी", slug: "lagna-biodata-format-marathi", desc: "मराठी मध्ये लग्न बायोडाटा कसा तयार करायचा? योग्य माहिती व विनामूल्य PDF.", lang: "मराठी" },
  { title: "લગ્ન બાયોડેટા ફોર્મેટ ગુજરાતી", slug: "lagna-biodata-format-gujarati", desc: "ગુજરાતીમાં લગ્ન બાયોડેટા કેવી રીતે બનાવવો? સાચી માહિતી અને મફ્ત PDF.", lang: "ગુજરાતી" },
  { title: "வி வாஹ பயோடேட்டா வடிவம் தமிழில்", slug: "thirumanam-biodata-format-tamil", desc: "தமிழில் திருமண பயோடேட்டா எப்படி தயாரிப்பது? சரியான வடிவம் மற்றும் இலவச PDF.", lang: "தமிழ்" },
  { title: "వివాహ బయోడేటా ఫార్మాట్ తెలుగులో", slug: "vivah-biodata-format-telugu", desc: "తెలుగులో వివాహ బయోడేటా ఎలా తయారు చేయాలి? సరైన ఫార్మాట్ మరియు ఉచిత PDF.", lang: "తెలుగు" },
];

function ArticleCard({ title, slug, desc, lang }: { title: string; slug: string; desc: string; lang?: string }) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="block p-6 sm:p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-indigo-200 dark:hover:border-indigo-900/50 bg-zinc-50/50 dark:bg-zinc-900/30 hover:bg-white dark:hover:bg-zinc-900 transition-all group hover:shadow-lg hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
          {title}
        </h2>
        {lang && (
          <span className="shrink-0 mt-0.5 px-2.5 py-1 text-xs font-semibold rounded-full bg-indigo-100 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
            {lang}
          </span>
        )}
      </div>
      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{desc}</p>
      <span className="text-indigo-600 dark:text-indigo-400 text-sm font-semibold mt-5 inline-block group-hover:translate-x-1 transition-transform">
        Read Article &rarr;
      </span>
    </Link>
  );
}

export default function ArticlesIndex() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">Formats &amp; Guides</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
        Expert tips and format guidelines to create the perfect biodata — in English and Indian regional languages.
      </p>

      <div className="space-y-12">
        <div>
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-5">Guides in English</p>
          <div className="grid gap-5">
            {ENGLISH_ARTICLES.map((art) => <ArticleCard key={art.slug} {...art} />)}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-5">Regional Language Guides</p>
          <div className="grid gap-5">
            {REGIONAL_ARTICLES.map((art) => <ArticleCard key={art.slug} {...art} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
