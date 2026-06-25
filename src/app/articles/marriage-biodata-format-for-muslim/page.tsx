import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2, AlertTriangle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muslim Marriage Biodata Format | Rishta Biodata Guide",
  description: "Complete guide to creating a Muslim marriage biodata (Rishta biodata). Covers Sect, Biraderi, Mehr, Wali details and sample format. Free PDF download.",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-format-for-muslim" },
  openGraph: {
    type: "article",
    title: "Muslim Marriage Biodata Format | Rishta Biodata Guide",
    description: "Muslim Rishta biodata format — Sect, Biraderi, Mehr, Wali details — free PDF download.",
    url: "https://biodatabuilder.in/articles/marriage-biodata-format-for-muslim",
    images: [{ url: "/examples/Muslim-biodata-example.webp", width: 1200, height: 630, alt: "Muslim Marriage Biodata Example" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should a Muslim marriage biodata include?",
      acceptedAnswer: { "@type": "Answer", text: "A Muslim Rishta biodata should include: an Islamic opening (Bismillah), personal details (name, DOB, height), religious details (Sect — Sunni/Shia; Madhab; practicing level), education and career, family background (parents, siblings, Biraderi/clan), About Me, expectations (including Mehr expectation if relevant), and Wali/contact details." },
    },
    {
      "@type": "Question",
      name: "What is Biraderi in a Muslim biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Biraderi refers to clan/caste identity in South Asian Muslim communities — e.g. Syed, Sheikh, Pathan/Pukhtun, Ansari, Rajput (Muslim), Memon, Bohra, etc. Many Muslim families, particularly in Pakistan-origin or UP/Bihar communities, still match within the same Biraderi." },
    },
    {
      "@type": "Question",
      name: "Should I mention Sect (Sunni/Shia) in a Muslim biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — always. While many modern families are open to inter-sect marriages, specifying your Sect (Sunni, Shia, Ahmadiyya, Ismaili, Bohra, etc.) upfront avoids mismatched expectations. State it as a neutral fact, not as a filter." },
    },
    {
      "@type": "Question",
      name: "What should the Wali contact section say?",
      acceptedAnswer: { "@type": "Answer", text: "The Wali (guardian) contact section should include the father's (or brother's/uncle's) name, relationship, and WhatsApp number. Example: 'Contact: Mohammad Ibrahim (Father) — +91-XXXXX-XXXXX'. This signals family involvement and is reassuring to prospective families." },
    },
    {
      "@type": "Question",
      name: "Do I need to mention Mehr in a Muslim biodata?",
      acceptedAnswer: { "@type": "Answer", text: "No, mentioning Mehr in the initial biodata is entirely optional. Some families include a brief expectation to set a baseline, but most prefer to discuss Mehr during family meetings." },
    }
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
    { "@type": "ListItem", position: 3, name: "Muslim Marriage Biodata Format", item: "https://biodatabuilder.in/articles/marriage-biodata-format-for-muslim" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Marriage Biodata Format for Muslim — Free Template",
  description: "Create a beautiful Muslim marriage biodata format online for free. Includes Islamic biodata fields and beautiful templates.",
  image: "/examples/muslim-biodata-infographic.webp",
  datePublished: "2026-06-15",
  dateModified: "2026-06-18",
  author: { "@type": "Organization", name: "BiodataBuilder" },
  publisher: { "@type": "Organization", name: "BiodataBuilder", logo: { "@type": "ImageObject", url: "https://biodatabuilder.in/favicon.png" } },
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ArticleWrapper publishedDate="2026-06-18">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Muslim Marriage Biodata Format: The Complete Rishta Guide
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 my-8">
            <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-emerald-800 dark:text-emerald-300">
              <li><strong>What is a Rishta Biodata?</strong> The Islamic equivalent of a marriage profile, used widely across South Asia and the diaspora for arranged marriages.</li>
              <li><strong>Key Differences:</strong> Unlike standard Hindu biodatas, a Muslim biodata often omits astrology (Kundali) but heavily emphasizes <strong>Sect (Sunni/Shia)</strong>, <strong>Madhab</strong>, and <strong>Practicing Level</strong>.</li>
              <li><strong>Crucial Elements:</strong> Always include the Wali (guardian) contact details and clearly state your community/Biraderi if your family prefers matching within the same clan.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-emerald-50 dark:bg-emerald-900">
              <Image 
                src="/examples/muslim-biodata-infographic.webp" 
                alt="Muslim Marriage Biodata Structure Infographic" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              A complete visual breakdown of the sections needed in a Muslim Rishta Biodata.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-emerald-600 dark:text-emerald-400 font-medium">
              <li><a href="#introduction" className="hover:underline">1. What is a Rishta Biodata?</a></li>
              <li><a href="#field-guide" className="hover:underline">2. The Complete Muslim Biodata Field Guide</a></li>
              <li><a href="#religion-sect" className="hover:underline">3. Stating Your Sect & Practicing Level</a></li>
              <li><a href="#biraderi" className="hover:underline">4. Should You Include Biraderi?</a></li>
              <li><a href="#about-me" className="hover:underline">5. Writing the Perfect "About Me"</a></li>
              <li><a href="#wali-contact" className="hover:underline">6. The Wali (Guardian) Contact Section</a></li>
              <li><a href="#mehr" className="hover:underline">7. Mentioning Mehr Expectations</a></li>
              <li><a href="#checklist" className="hover:underline">8. Muslim Biodata Checklist</a></li>
              <li><a href="#faq" className="hover:underline">9. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="introduction" className="scroll-mt-24">
            <p>
              In Islamic culture, particularly across India, Pakistan, Bangladesh, and their global diasporas, the arranged marriage process begins with the exchange of a <strong>Rishta Biodata</strong>. Finding a compatible spouse is considered half of one's <em>Deen</em> (faith), and the biodata serves as the vital first introduction between two families. 
            </p>
            <p className="mt-4">
              A Muslim marriage biodata differs significantly from <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">other religious formats</Link>. While you won't include details like Gotra or Kundali, you must clearly outline your Islamic identity—including your Sect, Madhab, and everyday practicing habits (like praying five times a day or observing Hijab). This transparency ensures that both families are aligned in their religious and lifestyle expectations right from the start.
            </p>
            <p className="mt-4">
              Whether you are creating a <Link href="/articles/marriage-biodata-for-boy" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">biodata for a boy</Link> or a girl, this comprehensive guide will walk you through exactly what to include in a Muslim biodata, how to phrase delicate subjects, and how to present yourself respectfully and authentically.
            </p>
          </section>

          {/* BLOCK: TABLE */}
          <section id="field-guide" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">2. The Complete Muslim Biodata Field Guide</h2>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6 shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200">
                  <tr>
                    <th className="px-5 py-4 font-bold border-b border-emerald-100 dark:border-emerald-900/50">Section</th>
                    <th className="px-5 py-4 font-bold border-b border-emerald-100 dark:border-emerald-900/50">Fields to Include</th>
                    <th className="px-5 py-4 font-bold border-b border-emerald-100 dark:border-emerald-900/50">Guidance & Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    ["Islamic Opening", "Bismillah / Assalamu Alaikum", "Standard on all Muslim biodatas. Often placed at the very top center to begin the document with God's name."],
                    ["Personal Details", "Name, DOB, height, blood group, marital status", "Include both your Islamic name and common name if applicable. Be honest about height."],
                    ["Religious Details", "Sect (Sunni/Shia), Madhab, Practicing level, Hijab/Beard status", "Crucial for compatibility. Always include this to avoid mismatched expectations."],
                    ["Biraderi / Clan", "Community name (e.g., Syed, Pathan, Memon)", "Include if community matchmaking is expected by your elders."],
                    ["Education & Career", "Highest degree, institution, job title, income", "State your profession and income clearly, as a man's financial stability relates to his Islamic obligations to provide."],
                    ["Family Background", "Father & mother (name + occupation), siblings", "Detail your siblings' marital status and family type (nuclear vs. joint)."],
                    ["About Me", "Values, personality, lifestyle, religious habits", "A paragraph humanizing you. See our <a href='/articles/how-to-write-biodata-about-me' class='text-emerald-600 dark:text-emerald-400 hover:underline'>guide on writing about me</a> for tips."],
                    ["Expectations", "Partner preferences — 2–3 sentences", "Mention preferred Sect, practicing level, education, and family values."],
                    ["Wali Contact", "Father/guardian name and WhatsApp number", "Essential in Islamic tradition. Signals proper family involvement and respect."],
                  ].map(([section, fields, note], idx) => (
                    <tr key={idx} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-4 font-semibold text-zinc-800 dark:text-zinc-200 align-top whitespace-nowrap">{section}</td>
                      <td className="px-5 py-4 text-zinc-700 dark:text-zinc-400 align-top">{fields}</td>
                      <td className="px-5 py-4 text-zinc-600 dark:text-zinc-500 align-top text-sm" dangerouslySetInnerHTML={{ __html: note }}></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
          {/* BLOCK: RELIGION_SECT */}
          <section id="religion-sect" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. Stating Your Sect & Practicing Level</h2>
            <figure className="my-8 float-right ml-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
                <Image src="/examples/Muslim-biodata-example.webp" alt="Sample Muslim Marriage Biodata" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">A typical Muslim Rishta biodata format.</figcaption>
            </figure>
            <p>
              In Islamic matchmaking, theological compatibility is just as important as personality. Be clear and factual—stating your Sect is not a statement of superiority, but a practical filter that saves both families time.
            </p>
            <p className="mt-4">
              If your family is open to <a href="https://en.wikipedia.org/wiki/Sectarianism" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">inter-sect marriages</a>, you can simply write "Sunni (Open to all)" or "Muslim - Just Muslim." However, if they strictly want a specific sect or school of thought, state it clearly:
            </p>
            <div className="mt-6 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6 italic text-emerald-900 dark:text-emerald-100 space-y-2 font-medium">
              <p><strong>Religion:</strong> Islam</p>
              <p><strong>Sect:</strong> Sunni (Hanafi)</p>
              <p><strong>Practicing Level:</strong> Practicing — Pray 5 times a day, observe Ramadan fasts, eat Zabiha Halal only.</p>
            </div>
            <p className="mt-6 text-zinc-600 dark:text-zinc-400">
              <em>Note:</em> Detailing your <strong>practicing level</strong> is increasingly expected in modern biodatas, especially for Muslims in Western countries (US, UK, Canada). It helps clarify lifestyle expectations regarding Hijab/Beard, diet, and daily prayers. If you are exploring broader formats, see our <Link href="/articles/biodata-tips" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">biodata tips for modern families</Link>.
            </p>
          </section>

          {/* BLOCK: BIRADERI */}
          <section id="biraderi" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">4. Should You Include Biraderi?</h2>
            <p>
              <em>Biraderi</em> refers to the clan, community, or caste identity common in South Asian Muslim cultures (e.g., Syed, Sheikh, Pathan, Ansari, Memon, Bohra, Rajput Muslims). While many younger Muslims prefer not to include this, older generations heavily rely on it for matchmaking.
            </p>
            <p className="mt-4">
              If your parents are arranging the marriage and they strongly prefer matching within your own community, you <strong>must include your Biraderi</strong>. Omitting it will lead to irrelevant matches and frustration. If caste is not a barrier for you, you can state: <em>"Caste no bar (Sunni Muslim preferred)."</em> For insights into how other communities handle this, compare it with the <Link href="/articles/thirumanam-biodata-format-tamil" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">Tamil Thirumanam biodata format</Link> where caste is also a primary filter.
            </p>
          </section>

          {/* BLOCK: CTA_TOP */}
          <div className="mt-12 p-8 bg-emerald-50 dark:bg-emerald-950/30 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-3">Create Your Rishta Biodata Free</h3>
            <p className="text-emerald-700 dark:text-emerald-300 mb-6 max-w-2xl mx-auto">
              Add a Bismillah opening, your Sect, and Biraderi perfectly. Download a beautiful, culturally-appropriate PDF in minutes. No sign-up required.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Muslim Biodata <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: ABOUT_ME */}
          <section id="about-me" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. Writing the Perfect "About Me"</h2>
            <figure className="my-8 float-left mr-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md bg-white">
                <Image src="/examples/About-me-biodata-samples.webp" alt="About Me Section Examples" fill className="object-contain" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">Include a short, genuine About Me paragraph.</figcaption>
            </figure>
            <p>
              The "About Me" section is where your biodata comes alive. Rather than just listing facts, use 3 to 4 sentences to describe your personality, your relationship with your faith, and your outlook on life. 
            </p>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Sample "About Me" for a Muslim Boy:</h3>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 italic text-zinc-700 dark:text-zinc-300 shadow-sm">
              "Assalamu Alaikum. I am an easy-going software engineer based in Hyderabad. Alhamdulillah, I am blessed to be born into a practicing Sunni family. I strive to pray five times daily and balance my Deen with a modern professional lifestyle. I enjoy travelling, reading Islamic history, and spending weekends with family."
            </div>
            <p className="mt-6">
              When creating a <Link href="/articles/shaadi-biodata-format-for-girl" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">biodata for a girl</Link>, the tone can be similarly balanced, emphasizing education, career ambitions (if any), and family values. Avoid using cliché phrases; speak genuinely so the receiving family can sense your true personality.
            </p>
          </section>
          {/* BLOCK: WALI */}
          <section id="wali-contact" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. The Wali (Guardian) Contact Section</h2>
            <p>
              In Islamic marriage traditions, a <strong className="font-semibold text-zinc-900 dark:text-white">Wali</strong> is a male guardian (typically the father, elder brother, or paternal uncle) who is responsible for the bride during the Nikah process. 
            </p>
            <p className="mt-4">
              Even if you are an independent working professional, including a Wali's contact information in your biodata signals respectful family involvement and adherence to Islamic protocol. It is highly reassuring to prospective families. If your family operates differently, you might find broader regional approaches interesting, such as the <Link href="/articles/lagna-biodata-format-marathi" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">Marathi biodata format</Link> which also heavily emphasizes family elders.
            </p>
            <div className="mt-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 font-mono text-sm text-zinc-800 dark:text-zinc-200">
              <p className="mb-2 text-zinc-500">Example Wali Contact:</p>
              <p><strong>Contact (Wali):</strong> Mohammad Ibrahim — Father</p>
              <p><strong>WhatsApp:</strong> +91-98XXX-XXXXX</p>
              <p><strong>Email:</strong> ibrahim.family@email.com</p>
            </div>
          </section>

          {/* BLOCK: MEHR */}
          <section id="mehr" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. Mentioning Mehr Expectations</h2>
            <p>
              <em>Mehr</em> (or Mahr) is the mandatory gift given by the groom to the bride at the time of marriage. A common question is: <strong>"Should I write the Mehr amount on the biodata?"</strong>
            </p>
            <p className="mt-4">
              In most cases, the answer is <strong>No</strong>. Mentioning a specific financial amount on the initial biodata can seem overly transactional and is generally discouraged. The biodata is just an introduction; financial negotiations should happen in person between the families later.
            </p>
            <div className="mt-6 p-5 border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-100">
              <strong className="font-bold">Exception:</strong> If a family has a strict religious expectation regarding Mehr (e.g., "Mehr Fatimi only" — the amount given to Prophet Muhammad's daughter), they may include a brief note in the Expectations section: <em>"We prefer to follow the Sunnah with a simple Nikah and Mehr Fatimi."</em>
            </div>
          </section>

          {/* BLOCK: CTA_MIDDLE */}
          <div className="mt-12 p-8 bg-zinc-900 dark:bg-zinc-800 rounded-3xl border border-zinc-800 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Tired of Using MS Word for Biodatas?</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Our builder automatically formats your Rishta Biodata into a beautiful, respectful PDF. Choose from premium templates explicitly designed for Muslims.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-100 transition shadow-lg hover:-translate-y-1">
              Start Building Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: CHECKLIST */}
          <section id="checklist" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">8. Muslim Biodata Checklist</h2>
            <p className="mb-6">
              Before you finalize and send your biodata to a prospective family, review this 10-point checklist to ensure it meets community expectations. Remember, a marriage biodata is entirely different from a <Link href="/articles/biodata-vs-resume-difference" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">professional resume</Link>.
            </p>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Is the Bismillah or an Islamic opening included at the top?",
                  "Have you clearly stated your Sect (e.g., Sunni, Shia) and Madhab?",
                  "Is your practicing level (prayers, fasting, Hijab) accurately described?",
                  "Did you include your Biraderi/Clan (if relevant to your family)?",
                  "Are your height, age, and marital status 100% accurate?",
                  "Are your education and current job/income listed clearly?",
                  "Are the names and occupations of both parents listed?",
                  "Did you mention the number of siblings and their marital status?",
                  "Is there a respectful 'About Me' paragraph explaining your values?",
                  "Is the Wali (guardian) listed as the primary contact with a phone number?",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Important:</strong> Do not use this format for job applications. If you need a document for a job in India or the Middle East, use a standard <Link href="/articles/simple-biodata-format-for-job-pdf" className="font-bold hover:underline">Job Biodata format</Link> instead.
                </p>
              </div>
            </div>
          </section>
          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">9. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "What should a Muslim marriage biodata include?", a: "An Islamic opening (Bismillah), personal details, religious details (Sect, Madhab, practicing level), Biraderi/clan, education, career, family background, 'About Me', and Wali contact details." },
                { q: "What is Biraderi in a Muslim biodata?", a: "Biraderi refers to clan/caste identity in South Asian Muslim communities (e.g., Syed, Sheikh, Pathan, Ansari, Memon, Bohra). Many families, particularly in Pakistan-origin or UP/Bihar communities, still match within the same Biraderi." },
                { q: "Should I mention Sect (Sunni/Shia) in a Muslim biodata?", a: "Yes — always. Specifying your Sect (Sunni, Shia, Ahmadiyya, Ismaili, Bohra, etc.) upfront avoids mismatched expectations. State it as a neutral fact, not as a filter." },
                { q: "What should the Wali contact section say?", a: "It should include the father's (or brother's/uncle's) name, relationship, and WhatsApp number. Example: 'Contact: Mohammad Ibrahim (Father) — +91-XXXXX-XXXXX'. This signals family involvement." },
                { q: "Do I need to mention Mehr in a Muslim biodata?", a: "No, mentioning Mehr in the initial biodata is entirely optional. Some families include a brief expectation to set a baseline, but most prefer to discuss Mehr during family meetings." },
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
              Creating a Muslim marriage biodata requires a delicate balance of providing necessary personal details while clearly conveying your religious identity and lifestyle. Unlike a generic <Link href="/articles/biodata-format-word-download" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">Word document template</Link>, a dedicated Rishta biodata ensures that crucial elements like your Sect, practicing level, and Wali contact are front and center.
            </p>
            <p className="mt-4">
              By following this guide, you can create an honest, respectful, and highly effective biodata that helps your family find a truly compatible match. 
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 text-center">
            <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-3">Create Your Muslim Rishta Biodata — Free</h3>
            <p className="text-emerald-700 dark:text-emerald-300 mb-8 max-w-2xl mx-auto">
              Add a Bismillah opening, Sect, Biraderi, Wali contact, and all essential details easily. Generate a beautiful PDF in minutes. No sign-up required.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Muslim Biodata Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/biodata-for-marriage" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 transition">Best Biodata Format For Marriage</div>
              </Link>
              <Link href="/articles/how-to-write-biodata-about-me" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 transition">How to Write an "About Me" for Marriage Biodata</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
