import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight, CheckCircle2, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Christian Marriage Biodata Format | Free PDF Template",
  description: "Complete guide to creating a Christian marriage biodata. What sections to include, Kerala vs Goa community differences, sample format, and free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-format-for-christian" },
  openGraph: {
    title: "Christian Marriage Biodata Format | Free PDF Template",
    description: "Complete Christian marriage biodata format — denomination, church, family, and contact details. Free PDF download.",
    url: "https://biodatabuilder.in/articles/marriage-biodata-format-for-christian",
    images: [{ url: "https://biodatabuilder.in/examples/christian-biodata-infographic.png", width: 1200, height: 630, alt: "Christian Marriage Biodata Format Infographic" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a Christian marriage biodata include?",
      acceptedAnswer: { "@type": "Answer", text: "A Christian marriage biodata should include: personal details (name, DOB, height), religious details (denomination, church name, baptism status), education and career, family background (parents' names and occupations, siblings), About Me, partner expectations, and contact information." },
    },
    {
      "@type": "Question",
      name: "Do Christian families use horoscope matching in a biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Most Protestant and Catholic families do not use Kundali/horoscope matching. However, some Indian Christian communities (particularly in Kerala and Tamil Nadu) still include birth details and consult astrologers for basic star matching. Exclude the astrological section unless it is explicitly your family tradition." },
    },
    {
      "@type": "Question",
      name: "Should I mention my denomination in a Christian biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — always. Indian Christian denominations (Catholic, CSI, CNI, Jacobite, Pentecostal, Mar Thoma, etc.) have distinct traditions. Families often prefer matches within the same denomination or at least within compatible liturgical traditions." },
    },
    {
      "@type": "Question",
      name: "What heading should I use for a Christian marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Common spiritual headings include: 'By God's Grace', 'To God Be the Glory', 'In Jesus Name', or simply 'Marriage Biodata'. Adding a small cross icon at the top of the page is a standard and highly respected design element." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-sky-900 dark:text-sky-100 mb-6 leading-tight">
          Christian Marriage Biodata Format: The Complete Guide
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-sky-50 dark:bg-sky-950/30 p-6 rounded-2xl border border-sky-100 dark:border-sky-900/50 my-8">
            <h2 className="text-xl font-bold text-sky-900 dark:text-sky-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-sky-800 dark:text-sky-300">
              <li><strong>Faith Front and Center:</strong> A Christian marriage biodata diverges from other formats by heavily emphasizing Church affiliation, Denomination, and Baptism/Sacrament status.</li>
              <li><strong>Skip the Astrology:</strong> Unlike a <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-sky-700 dark:text-sky-400 hover:underline font-medium">Hindu biodata</Link>, you generally do not need Rashi, Nakshatra, or Gotra, unless your specific regional community (e.g., certain Kerala or Tamil groups) culturally practices it.</li>
              <li><strong>Visual Identity:</strong> Including a small cross at the header and a phrase like "By God's Grace" immediately establishes the religious context of the profile.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-sky-50 dark:bg-sky-950/20">
              <Image 
                src="/examples/christian-biodata-infographic.png" 
                alt="Christian Marriage Biodata Format Infographic: Faith, Background, Expectations" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              The three core pillars of a Christian marriage biodata: Faith & Denomination, Family Background, and Partner Expectations.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-sky-600 dark:text-sky-400 font-medium">
              <li><a href="#why-its-different" className="hover:underline">1. How a Christian Biodata is Different</a></li>
              <li><a href="#core-sections" className="hover:underline">2. The 6 Core Sections You Must Include</a></li>
              <li><a href="#denomination-matters" className="hover:underline">3. Indian Christian Denominations Explained</a></li>
              <li><a href="#horoscope-question" className="hover:underline">4. Do Christian Biodatas Include Horoscopes?</a></li>
              <li><a href="#about-me-sample" className="hover:underline">5. Sample "About Me" & Expectations</a></li>
              <li><a href="#do-and-dont" className="hover:underline">6. Formatting Do's and Don'ts</a></li>
              <li><a href="#faq" className="hover:underline">7. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="why-its-different" className="scroll-mt-24">
            <p>
              Creating a <Link href="/articles/biodata-for-marriage" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">biodata for marriage</Link> is a universal step in the Indian arranged marriage process, but the nuances vary wildly between communities. A Christian marriage biodata is distinctly different from a <Link href="/articles/simple-biodata-format-for-job-pdf" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">job resume</Link> or a secular profile because faith is not just a background detail—it is the central pillar of the matchmaking criteria.
            </p>
            <p className="mt-4">
              Whether you belong to the Syro-Malabar Catholic church in Kerala, the Church of South India (CSI) in Tamil Nadu, or an independent Pentecostal church in Mumbai, families will look at your church affiliation before they even look at your career. In fact, according to recent <Link href="/articles/marriage-biodata-statistics-india" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">biodata statistics</Link>, denominational matching remains the #1 filter for Indian Christian families, often outweighing language and geography.
            </p>
          </section>

          {/* BLOCK: CORE_SECTIONS */}
          <section id="core-sections" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">2. The 6 Core Sections You Must Include</h2>
            <p className="mb-6">
              A standard secular biodata won't cut it. You need specific religious fields. Here is exactly what you should map out when formatting your <Link href="/articles/biodata-format-word-download" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">biodata document</Link>:
            </p>
            
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-sky-50 dark:bg-sky-950/40 text-sky-900 dark:text-sky-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold w-1/3">Section Heading</th>
                    <th className="px-5 py-3 font-semibold">Fields to Include</th>
                    <th className="px-5 py-3 font-semibold">Why It Matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-zinc-800 dark:text-zinc-200">Header / Invocation</td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">Cross icon + "By God's Grace" or "To God Be the Glory"</td>
                    <td className="px-5 py-4 text-zinc-500 dark:text-zinc-400">Immediately sets a respectful, spiritual tone for the families reviewing it.</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-zinc-800 dark:text-zinc-200">Personal Details</td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">Full Name, Date of Birth, Height, Complexion, Blood Group</td>
                    <td className="px-5 py-4 text-zinc-500 dark:text-zinc-400">The standard physical and demographic baseline required across all Indian communities.</td>
                  </tr>
                  <tr className="bg-sky-50/50 dark:bg-sky-900/10">
                    <td className="px-5 py-4 font-bold text-sky-800 dark:text-sky-300">Religious Background</td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">Denomination, Parish/Church Name, Baptism Status, Confirmation Status</td>
                    <td className="px-5 py-4 text-sky-700 dark:text-sky-400 font-medium">The most critical section. Determines if a wedding ceremony is canonically possible in the home church.</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-zinc-800 dark:text-zinc-200">Education & Career</td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">Highest Degree, University, Current Designation, Company, Location, Salary</td>
                    <td className="px-5 py-4 text-zinc-500 dark:text-zinc-400">Establishes financial stability and intellectual compatibility.</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-zinc-800 dark:text-zinc-200">Family Details</td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">Father's Name & Occupation, Mother's Name, Siblings (Married/Unmarried)</td>
                    <td className="px-5 py-4 text-zinc-500 dark:text-zinc-400">Shows the family's social standing. (Tip: Mention if a sibling is married into a different denomination).</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-zinc-800 dark:text-zinc-200">Contact Info</td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">Primary Mobile, WhatsApp Number, Email Address, Residential Address</td>
                    <td className="px-5 py-4 text-zinc-500 dark:text-zinc-400">Always specify if the number belongs to the candidate or the parents.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          {/* BLOCK: DENOMINATION_MATTERS */}
          <section id="denomination-matters" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. Indian Christian Denominations Explained</h2>
            <p>
              Unlike preparing a <Link href="/articles/modern-vs-traditional-biodata" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">modern secular biodata</Link>, a Christian biodata must be hyper-specific about your denomination. Indian Christian communities have deeply rooted, distinct traditions. The denomination you belong to significantly affects who you are likely to match with.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 mt-6">
              <table className="w-full text-sm text-left">
                <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                  <tr>
                    <th className="px-5 py-3">Denomination</th>
                    <th className="px-5 py-3">Common In</th>
                    <th className="px-5 py-3">Biodata Specifics Needed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  <tr className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">Roman Catholic</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Goa, Mangalore, Mumbai, TN</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs">Must include Parish name. Often requires stating Sacrament history (Baptism, Confirmation, First Communion).</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">CSI / CNI</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">South & North India</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs">Church name and Diocese. Generally more liberal regarding cross-denomination marriages.</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">Jacobite / Syrian Orthodox</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Kerala</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs">Family church and diocese are critical. High community endogamy (preferring to marry within the community).</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">Pentecostal / AG</td>
                    <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Pan-India (urban)</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-500 text-xs">Extremely strict on "born again" and water-baptized status. Fellowship name is required.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* BLOCK: HOROSCOPE_QUESTION */}
          <section id="horoscope-question" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">4. Do Christian Biodatas Include Horoscopes?</h2>
            <p>
              This is one of the most frequently asked questions, and the answer varies significantly depending on your specific regional community. As a general rule: <strong className="font-semibold text-zinc-900 dark:text-white">Most Indian Christian families do not practice horoscope (Kundali) matching.</strong>
            </p>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-2xl p-6 mt-6 shadow-sm">
              <h3 className="font-bold text-amber-900 dark:text-amber-200 text-lg mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                The Exceptions
              </h3>
              <ul className="space-y-4">
                <li>
                  <strong className="text-amber-900 dark:text-amber-200">Kerala and Tamil Nadu Communities:</strong> Certain Catholic and orthodox families in these regions culturally retain the practice of "star matching" (Nakshatra). They may informally ask for birth date, time, and place to ensure the stars are not conflicting, even if the priest does not officially require it for the wedding.
                </li>
                <li>
                  <strong className="text-amber-900 dark:text-amber-200">Blended Traditions:</strong> Families with recent ancestral conversions may still hold onto traditional regional customs, including checking Manglik status. 
                </li>
              </ul>
            </div>
            <p className="mt-6">
              <strong>Recommendation:</strong> Do not include a Kundali section in your biodata unless your parents specifically instruct you to. If a family needs it, they will ask you for your birth details over <Link href="/articles/biodata-format-for-whatsapp" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">WhatsApp</Link> after reviewing your main profile.
            </p>
          </section>

          {/* BLOCK: CTA_MIDDLE */}
          <div className="mt-12 p-8 bg-zinc-900 dark:bg-zinc-800 rounded-3xl border border-zinc-800 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Include All the Right Church Details</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Our automated builder has dedicated, smartly categorized fields for Christian religious details, ensuring you don't miss anything important.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-500 text-white font-bold rounded-full hover:bg-sky-600 transition shadow-lg hover:-translate-y-1">
              Start Building Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: ABOUT_ME_SAMPLE */}
          <section id="about-me-sample" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. Sample "About Me" & Expectations</h2>
            <p>
              When writing your <Link href="/articles/how-to-write-biodata-about-me" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">"About Me" section</Link>, it is highly encouraged to mention your faith naturally, especially if it plays a large role in your daily life. It helps you attract families with similar values.
            </p>
            
            <div className="bg-sky-50 dark:bg-sky-950/30 border border-sky-200 dark:border-sky-800 rounded-2xl p-6 md:p-8 mt-6">
              <h3 className="font-bold text-sky-900 dark:text-sky-200 mb-3 text-sm uppercase tracking-wider">Example for a Catholic Candidate</h3>
              <p className="text-sky-800 dark:text-sky-100 italic leading-relaxed">
                "I am a practicing Catholic working as a senior nurse in Pune. Faith is central to my life, and I am an active member of my parish choir. I come from a close-knit, middle-class family in Mangalore. I am independent but deeply value my roots. I am looking for a God-fearing, supportive partner who values family, humility, and mutual respect. We are open to matches from Catholic and CSI families."
              </p>
            </div>

            <div className="bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700 rounded-2xl p-6 md:p-8 mt-6">
              <h3 className="font-bold text-zinc-900 dark:text-white mb-3 text-sm uppercase tracking-wider">Example for a Pentecostal Candidate</h3>
              <p className="text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                "I am a born-again, water-baptized believer working as a software engineer in Bangalore. I serve in the youth ministry at my local AG church. I enjoy reading theology and traveling. I am seeking a spiritually grounded, born-again partner who shares a passion for ministry and wants to build a Christ-centered home. Must belong to a Bible-believing Pentecostal/Charismatic church."
              </p>
            </div>
            
            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
              Note: If you are preparing a <Link href="/articles/biodata-for-second-marriage" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">second marriage biodata</Link>, you should also briefly mention your marital status (Divorced/Widowed) respectfully in this section, alongside your faith.
            </p>
          </section>
          {/* BLOCK: DO_AND_DONT */}
          <section id="do-and-dont" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. Formatting Do's and Don'ts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 rounded-2xl p-6">
                <h3 className="font-bold text-emerald-900 dark:text-emerald-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5" /> What to Do
                </h3>
                <ul className="space-y-3 text-sm text-emerald-800 dark:text-emerald-200">
                  <li><strong>Do</strong> use a clean, modern PDF format rather than an editable Word document.</li>
                  <li><strong>Do</strong> explicitly mention your Church/Parish name; families use this to verify community ties.</li>
                  <li><strong>Do</strong> include a polite spiritual heading like "By God's Grace" at the very top.</li>
                  <li><strong>Do</strong> include your Baptism and Confirmation status if you are Catholic.</li>
                </ul>
              </div>
              <div className="bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/50 rounded-2xl p-6">
                <h3 className="font-bold text-rose-900 dark:text-rose-400 mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" /> What to Avoid
                </h3>
                <ul className="space-y-3 text-sm text-rose-800 dark:text-rose-200">
                  <li><strong>Don't</strong> include Kundali/Gotra sections unless your specific community practices it.</li>
                  <li><strong>Don't</strong> just write "Christian." Indian Christianity is vast; always specify the denomination.</li>
                  <li><strong>Don't</strong> use overly informal language. This is a family document, not a dating app profile.</li>
                  <li><strong>Don't</strong> forget to list siblings' marital status and their spouse's denomination, as families look at existing alliances.</li>
                </ul>
              </div>
            </div>
            <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
              For more general advice on creating a high-conversion profile, check out our <Link href="/articles/biodata-tips" className="text-sky-600 dark:text-sky-400 hover:underline font-medium">15 expert biodata tips</Link>.
            </p>
          </section>

          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What should a Christian marriage biodata include?", a: "A Christian marriage biodata should include: personal details (name, DOB, height), religious details (denomination, church name, baptism status), education and career, family background (parents' names and occupations, siblings), About Me, partner expectations, and contact information." },
                { q: "Do Christian families use horoscope matching in a biodata?", a: "Most Protestant and Catholic families do not use Kundali/horoscope matching. However, some Indian Christian communities (particularly in Kerala and Tamil Nadu) still include birth details and consult astrologers for basic star matching. Exclude the astrological section unless it is explicitly your family tradition." },
                { q: "Should I mention my denomination in a Christian biodata?", a: "Yes — always. Indian Christian denominations (Catholic, CSI, CNI, Jacobite, Pentecostal, Mar Thoma, etc.) have distinct traditions. Families often prefer matches within the same denomination or at least within compatible liturgical traditions." },
                { q: "What heading should I use for a Christian marriage biodata?", a: "Common spiritual headings include: 'By God's Grace', 'To God Be the Glory', 'In Jesus Name', or simply 'Marriage Biodata'. Adding a small cross icon at the top of the page is a standard and highly respected design element." },
                { q: "Is a Christian biodata different from a Muslim biodata?", a: "Yes. While the core personal and professional fields remain the same, religious fields differ heavily. For example, a Christian biodata asks for Church Name and Baptism status, whereas a Muslim biodata asks for Sect (Sunni/Shia), Maslak, and religious practices (Salat). See our guide on the Muslim format for comparison." },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BLOCK: CONCLUSION */}
          <section id="conclusion" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">Conclusion</h2>
            <p>
              A beautifully formatted Christian marriage biodata acts as an ambassador for your family. By cleanly organizing your professional achievements alongside your denomination, church details, and spiritual values, you ensure that you attract families who share your traditions and worldview.
            </p>
            <p className="mt-4">
              Remember to skip the astrological sections unless culturally required by your specific community, and always present the document as a clean, easy-to-read PDF.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-950/20 dark:to-indigo-950/20 rounded-3xl border border-sky-100 dark:border-sky-900/50 text-center">
            <h3 className="text-2xl font-bold text-sky-900 dark:text-sky-100 mb-3">Create a Beautiful Christian Biodata Today</h3>
            <p className="text-sky-700 dark:text-sky-300 mb-8 max-w-2xl mx-auto">
              BiodataBuilder provides specialized templates for Christian profiles, complete with Cross icons, Denomination fields, and elegant styling. Download your PDF in minutes.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-sky-600 text-white font-bold rounded-full hover:bg-sky-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/biodata-format-word-download" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-sky-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Downloads</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-sky-600 transition">Download Free Word (.docx) Biodata Formats</div>
              </Link>
              <Link href="/articles/marriage-biodata-format-for-muslim" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-sky-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Other Communities</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-sky-600 transition">Marriage Biodata Format for Muslims</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
