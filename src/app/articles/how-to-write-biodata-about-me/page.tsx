import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Write About Me in Marriage Biodata | Examples & Tips",
  description:
    "Not sure what to write in your marriage biodata About Me section? Step-by-step guide, 6 real examples for boys & girls, cultural tips and mistakes to avoid.",
  alternates: { canonical: "https://biodatabuilder.in/articles/how-to-write-biodata-about-me" },
  openGraph: {
    title: "How to Write About Me in Marriage Biodata | Examples & Tips",
    description:
      "Not sure what to write in your marriage biodata About Me section? Step-by-step guide, 6 real examples for boys & girls, cultural tips and mistakes to avoid.",
    url: "https://biodatabuilder.in/articles/how-to-write-biodata-about-me",
    images: [{ url: "/examples/About-me-biodata-samples.webp", width: 1173, height: 1341, alt: "About Me section examples in Indian marriage biodata" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What should I write in the About Me section of a marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Write 4–6 sentences covering three things: your core personality and values, your career and passions, and what you are looking for in a partner. Use specific details instead of generic phrases like 'I am a simple person'." },
    },
    {
      "@type": "Question",
      name: "How long should the About Me section be?",
      acceptedAnswer: { "@type": "Answer", text: "Keep it between 4 to 6 sentences or 60–100 words. This is enough to make a strong impression without overwhelming the reader. Remember, the biodata itself should fit on one page." },
    },
    {
      "@type": "Question",
      name: "Should I write the About Me section in first person or third person?",
      acceptedAnswer: { "@type": "Answer", text: "First person ('I am...') feels more personal and authentic for modern biodatas. Third person ('He/She is...') works if parents are writing it. Choose one style and stick with it — do not mix both." },
    },
    {
      "@type": "Question",
      name: "Can I use the same About Me for matrimonial sites and biodata PDF?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, a well-written About Me works everywhere — Shaadi.com, Jeevansathi, WhatsApp biodata PDFs, and printed biodatas. Just make sure it reads naturally in both digital and print formats." },
    },
    {
      "@type": "Question",
      name: "What should I avoid writing in the About Me section?",
      acceptedAnswer: { "@type": "Answer", text: "Avoid clichés like 'I am simple and homely', 'I love to enjoy life', or 'looking for a life partner'. Also avoid negative statements, salary details (those go in a separate field), and overly long paragraphs." },
    }
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ArticleWrapper
        publishedDate="2026-06-11"
        related={[
          { title: "Marriage Biodata for Boy — Format & Samples", slug: "marriage-biodata-for-boy" },
          { title: "Shaadi Biodata Format for Girl", slug: "shaadi-biodata-format-for-girl" },
          { title: "Modern vs Traditional Biodata", slug: "modern-vs-traditional-biodata" },
        ]}
      >
        {/* ── H1 ── */}
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          How to Write the &ldquo;About Me&rdquo; Section in a Marriage Biodata
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">

          {/* TL;DR */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 mb-8">
            <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">TL;DR</p>
            <p className="text-amber-800 dark:text-amber-200">Write 4–6 sentences covering <strong>who you are</strong>, <strong>what you do and love</strong>, and <strong>what you are looking for</strong>. Be specific, skip clichés like &ldquo;simple and homely&rdquo;, and add one cultural or personal detail that makes you memorable. Use our <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">free biodata builder</Link> which has a dedicated About Me field.</p>
          </div>

          {/* Hero Image */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-md">
            <Image src="/examples/About-me-biodata-samples.webp" alt="About Me section examples in Indian marriage biodata" width={1173} height={1341} className="w-full h-auto" priority />
          </div>

          {/* Table of Contents */}
          <nav className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6 mb-8">
            <p className="font-bold text-zinc-900 dark:text-white mb-3">In This Article</p>
            <ol className="list-decimal pl-5 space-y-1 text-base text-indigo-600 dark:text-indigo-400">
              <li><a href="#what-is" className="hover:underline">What Is the About Me Section?</a></li>
              <li><a href="#why-it-matters" className="hover:underline">Why It Matters More Than You Think</a></li>
              <li><a href="#step-by-step" className="hover:underline">5-Step Guide to Writing Yours</a></li>
              <li><a href="#examples" className="hover:underline">6 Ready-to-Use Examples</a></li>
              <li><a href="#good-vs-bad" className="hover:underline">Good vs. Bad Phrases — Comparison Table</a></li>
              <li><a href="#cultural-tips" className="hover:underline">Region-Specific Cultural Tips</a></li>
              <li><a href="#self-check" className="hover:underline">Self-Check Checklist</a></li>
              <li><a href="#pro-tips" className="hover:underline">Pro Tips</a></li>
              <li><a href="#mistakes" className="hover:underline">Common Mistakes to Avoid</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ol>
          </nav>

          {/* What Is */}
          <h2 id="what-is" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">What Is the &ldquo;About Me&rdquo; Section in a Biodata?</h2>
          <p>The <strong className="font-semibold text-zinc-900 dark:text-white">About Me</strong> (also called &ldquo;Self Description&rdquo; or &ldquo;About Myself&rdquo;) is a short paragraph in your <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">marriage biodata</Link> where you introduce yourself in your own words. Unlike structured fields such as education or height, this section lets your personality shine through.</p>
          <p>Think of it as your 30-second elevator pitch — the one chance to make the reader feel, &ldquo;I want to know this person better.&rdquo;</p>

          {/* Why It Matters */}
          <h2 id="why-it-matters" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Why It Matters More Than You Think</h2>
          <p>Most families receive dozens of biodatas. The factual fields — education, height, income — start blending together. The About Me section is what breaks the tie. Here is why:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong className="font-semibold text-zinc-900 dark:text-white">First emotional impression</strong> — it is the only section where feelings and values come through, not just facts.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Conversation starter</strong> — a well-written About Me gives the other family something to talk about in the first call.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Filtering signal</strong> — it helps both sides quickly gauge compatibility on lifestyle, values, and expectations.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Shows effort</strong> — a thoughtful paragraph signals that you (and your family) are serious about the process.</li>
          </ul>

          {/* CTA Top */}
          <div className="mt-8 p-6 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl text-center">
            <p className="text-indigo-800 dark:text-indigo-200 mb-3">Our biodata builder has a dedicated About Me field with formatting support.</p>
            <Link href="/create" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-md">Create Your Biodata Free &rarr;</Link>
          </div>

          {/* Step-by-Step Guide */}
          <h2 id="step-by-step" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">5-Step Guide to Writing Your About Me</h2>
          <p>Follow this simple framework and you will have a strong self-description in 15 minutes:</p>

          <div className="space-y-6 mt-6">
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">1</span>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Start with who you are</p>
                <p>Open with your profession and one core personality trait. Example: &ldquo;I am a civil engineer based in Pune with a calm and grounded temperament.&rdquo;</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">2</span>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Add your roots</p>
                <p>Mention your family background briefly — city, community, values. This connects with the reader culturally: &ldquo;Raised in a close-knit Marwari family in Jaipur.&rdquo;</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">3</span>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Share what you love</p>
                <p>Pick 2–3 specific hobbies or passions. &ldquo;I enjoy weekend treks&rdquo; is better than &ldquo;I love to enjoy life.&rdquo; Specific details are memorable.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">4</span>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">State your values</p>
                <p>One sentence about what matters most to you — family closeness, career ambition, spiritual practice, or work-life balance.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">5</span>
              <div>
                <p className="font-semibold text-zinc-900 dark:text-white">Close with partner expectations</p>
                <p>End with a positive, forward-looking statement about what kind of partner you hope for. Keep it warm, not demanding: &ldquo;I am looking for someone who values both ambition and family warmth.&rdquo;</p>
              </div>
            </div>
          </div>

          {/* Infographic after step guide */}
          <div className="my-8 rounded-2xl overflow-hidden shadow-md">
            <Image src="/examples/About-me-5steps-infographic.webp" alt="Infographic: 5 steps to write About Me section in marriage biodata" width={1024} height={1024} className="w-full h-auto" />
          </div>

          {/* Examples */}
          <h2 id="examples" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">6 Ready-to-Use About Me Examples</h2>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">For Girls</h3>
          <div className="my-4 rounded-2xl overflow-hidden shadow-sm">
            <Image src="/examples/Girl-biodata-about-me-examples.webp" alt="Sample About Me section in marriage biodata for girls" width={3998} height={2827} className="w-full h-auto" />
          </div>
          <div className="space-y-4">
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">Example 1 — Working Professional (Gujarati)</p>
              <p className="text-indigo-900 dark:text-indigo-100 italic leading-relaxed">&ldquo;I am a chartered accountant working in Mumbai with a deep love for classical Hindustani music — I have been learning vocals for over a decade. Raised in a traditional Gujarati family, I value joint family living while maintaining personal independence in my career. On weekends, you will find me in the kitchen experimenting with new recipes or on a local trek with friends. I am looking for a partner who is ambitious yet grounded, with a genuine appreciation for family bonds.&rdquo;</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">Example 2 — Government Job (South Indian)</p>
              <p className="text-indigo-900 dark:text-indigo-100 italic leading-relaxed">&ldquo;I am a civil services officer posted in Chennai, born and raised in a Tamil Brahmin family in Coimbatore. I am passionate about Bharatanatyam and have performed at state-level competitions. I believe in balancing a demanding career with personal growth and spiritual practice. I am seeking a life partner who values education, respects tradition, and has the confidence to pursue their own passions.&rdquo;</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">For Boys</h3>
          <div className="my-4 rounded-2xl overflow-hidden shadow-sm">
            <Image src="/examples/Boy-biodata-about-me-sample.webp" alt="Sample About Me section in marriage biodata for boys" width={2000} height={2826} className="w-full h-auto" />
          </div>
          <div className="space-y-4">
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">Example 3 — IT Professional (Marathi)</p>
              <p className="text-indigo-900 dark:text-indigo-100 italic leading-relaxed">&ldquo;I am a software engineer at a Bengaluru-based startup, working primarily in machine learning. I grew up in Nagpur in a close-knit Marathi family and carry those values into everything I do. I enjoy long-distance running, reading Indian history, and weekend road trips. While I have a progressive outlook on careers and lifestyle, I deeply cherish family traditions and festivals. I am looking for a life partner who shares a balance of personal ambition and family warmth.&rdquo;</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">Example 4 — Business Family (Punjabi)</p>
              <p className="text-indigo-900 dark:text-indigo-100 italic leading-relaxed">&ldquo;I am a 28-year-old entrepreneur running a textile export business in Ludhiana, building on what my family started three decades ago. I am deeply involved in our local Gurudwara community and volunteer on weekends. When not working, I love playing cricket, cooking elaborate Sunday brunches, and planning family holidays. I am looking for someone who is warm, family-oriented, and ready to grow both personally and professionally together.&rdquo;</p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">For Second Marriage</h3>
          <div className="space-y-4">
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">Example 5 — Divorcee with Child</p>
              <p className="text-indigo-900 dark:text-indigo-100 italic leading-relaxed">&ldquo;I am a 34-year-old doctor based in Hyderabad. I have been through a difficult past chapter and have grown immensely from that experience. I am a devoted mother to my 5-year-old son, who is my world. I am looking for a mature, understanding partner who is open to building a committed and caring family — one that embraces every member wholeheartedly.&rdquo;</p>
            </div>
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-2">Example 6 — Widower</p>
              <p className="text-indigo-900 dark:text-indigo-100 italic leading-relaxed">&ldquo;I am a 38-year-old school principal in Jaipur. Life taught me resilience early, and I have channelled that into building a meaningful career in education. I enjoy gardening, morning walks, and hosting chai gatherings with neighbours. I am looking for a compassionate partner who understands that a new beginning can be just as beautiful as the first.&rdquo;</p>
            </div>
          </div>
          <p className="text-base text-zinc-500 dark:text-zinc-400 mt-4">Need more examples? See our guides for <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">girls</Link>, <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline">boys</Link>, and <Link href="/articles/biodata-for-second-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline">second marriages</Link>.</p>

          {/* CTA Middle */}
          <div className="mt-12 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Liked an example above?</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-4">Paste it into our builder, customise it, pick a template, and download your PDF in 2 minutes.</p>
            <Link href="/create" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-md">Start Building Now &rarr;</Link>
          </div>

          {/* Good vs Bad Table */}
          <h2 id="good-vs-bad" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Good vs. Bad Phrases — Comparison Table</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              <thead><tr className="bg-zinc-100 dark:bg-zinc-800"><th className="p-3 font-semibold text-zinc-900 dark:text-white">❌ Avoid This</th><th className="p-3 font-semibold text-zinc-900 dark:text-white">✅ Write This Instead</th></tr></thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr><td className="p-3 line-through text-zinc-400">&ldquo;I am a simple and homely person&rdquo;</td><td className="p-3">&ldquo;I enjoy a quiet lifestyle centred around family, cooking, and evening walks&rdquo;</td></tr>
                <tr><td className="p-3 line-through text-zinc-400">&ldquo;I love to enjoy life&rdquo;</td><td className="p-3">&ldquo;I love weekend road trips and trying street food in new cities&rdquo;</td></tr>
                <tr><td className="p-3 line-through text-zinc-400">&ldquo;Looking for a life partner&rdquo;</td><td className="p-3">&ldquo;I am looking for someone who values both ambition and family warmth&rdquo;</td></tr>
                <tr><td className="p-3 line-through text-zinc-400">&ldquo;I am adjustable&rdquo;</td><td className="p-3">&ldquo;I believe in open communication and mutual respect in a relationship&rdquo;</td></tr>
                <tr><td className="p-3 line-through text-zinc-400">&ldquo;God-fearing person&rdquo;</td><td className="p-3">&ldquo;I find peace in my daily pooja routine and visiting temples on weekends&rdquo;</td></tr>
                <tr><td className="p-3 line-through text-zinc-400">&ldquo;Earning handsome salary&rdquo;</td><td className="p-3">Keep salary in the Income field. About Me is for personality, not numbers.</td></tr>
              </tbody>
            </table>
          </div>

          {/* Cultural Tips */}
          <h2 id="cultural-tips" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Region-Specific Cultural Tips</h2>
          <div className="space-y-4">
            <div className="p-5 bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-xl"><p><strong className="text-orange-900 dark:text-orange-200">North Indian families</strong> — Mention devotion to festivals (Karwa Chauth, Teej, Lohri), joint family comfort, and community respect. Phrases like &ldquo;rooted in traditions&rdquo; resonate strongly.</p></div>
            <div className="p-5 bg-teal-50 dark:bg-teal-950/20 border border-teal-200 dark:border-teal-800 rounded-xl"><p><strong className="text-teal-900 dark:text-teal-200">South Indian families</strong> — Emphasise academic achievements, classical arts (Carnatic music, Bharatanatyam), and spiritual practices. Mentioning your mother tongue fluency adds authenticity.</p></div>
            <div className="p-5 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-xl"><p><strong className="text-yellow-900 dark:text-yellow-200">Gujarati / Marwari families</strong> — Business acumen, savings habits, Jain/Vaishnav dietary preferences, and community involvement (samaj) are well-received signals.</p></div>
            <div className="p-5 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl"><p><strong className="text-green-900 dark:text-green-200">Bengali families</strong> — Cultural interests (Rabindra Sangeet, theatre, literature), intellectual pursuits, and a love for food and festivities (Durga Puja) stand out.</p></div>
          </div>

          {/* Self-Check Checklist */}
          <h2 id="self-check" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Self-Check: Is Your About Me Ready?</h2>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6">
            <ul className="space-y-2 text-emerald-900 dark:text-emerald-100">
              <li>☐ Is it between 4–6 sentences?</li>
              <li>☐ Does it mention your profession or current role?</li>
              <li>☐ Does it include at least one specific hobby or interest?</li>
              <li>☐ Does it reflect your cultural or family values?</li>
              <li>☐ Does it end with what you are looking for in a partner?</li>
              <li>☐ Is it free of clichés (&ldquo;simple person&rdquo;, &ldquo;enjoy life&rdquo;)?</li>
              <li>☐ Would a stranger reading this remember something unique about you?</li>
              <li>☐ Did you read it aloud? Does it sound natural?</li>
            </ul>
          </div>

          {/* Pro Tips */}
          <h2 id="pro-tips" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Pro Tips From Real Matchmakers</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Write it yourself, not ChatGPT.</strong> Families can tell when text is AI-generated. Your authentic voice matters more than polished grammar.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Ask a close friend to review.</strong> They will catch if it sounds too formal or unlike you.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">First person for modern biodatas, third person if parents are sending it.</strong> Do not mix both styles.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Skip salary in About Me.</strong> Income has its own field. About Me is for personality.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Customise per audience.</strong> If sharing via <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">WhatsApp</Link>, keep it even shorter. For printed biodatas, you can be slightly more detailed.</li>
          </ul>

          {/* Common Mistakes */}
          <h2 id="mistakes" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">7 Common Mistakes to Avoid</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Writing a resume summary</strong> — this is a biodata, not a LinkedIn profile. Focus on personality, not achievements.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Being too long</strong> — more than 100 words dilutes impact. The reader is scanning, not studying.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Being negative</strong> — never write &ldquo;I do not want...&rdquo; or &ldquo;I am not interested in...&rdquo;. Keep it positive and forward-looking.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Copying from the internet</strong> — families compare biodatas. A copied About Me is immediately obvious and damaging.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Using English jargon</strong> — &ldquo;synergy&rdquo;, &ldquo;value-add&rdquo;, &ldquo;holistic&rdquo; feel corporate. Write the way you speak.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Mentioning ex-partners in detail</strong> — for second marriages, acknowledge the past briefly and focus on the future.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Skipping it entirely</strong> — a blank About Me signals low effort. Even 3 sentences are better than nothing.</li>
          </ol>

          {/* FAQ */}
          <h2 id="faq" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">What should I write in the About Me section of a marriage biodata?</h3><p>Write 4–6 sentences covering your personality, passions, and what you seek in a partner. Be specific — replace generic phrases with real details about your life.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">How long should the About Me section be?</h3><p>60–100 words or 4–6 sentences. Enough to create a connection without overwhelming the reader. Your entire <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline">biodata should fit on one page</Link>.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Should I write in first person or third person?</h3><p>First person (&ldquo;I am...&rdquo;) feels authentic for <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline">modern biodatas</Link>. Third person works when parents are writing it. Never mix both.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Can I use the same About Me for matrimonial sites and biodata PDF?</h3><p>Yes. A well-written paragraph works everywhere — <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">WhatsApp PDFs</Link>, Shaadi.com, printed biodatas. Just ensure it reads naturally.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">What should I avoid?</h3><p>Clichés (&ldquo;simple and homely&rdquo;), negative statements, salary details, and copied text. See the <a href="#good-vs-bad" className="text-indigo-600 dark:text-indigo-400 hover:underline">comparison table above</a> for specifics.</p></div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Conclusion</h2>
          <p>The About Me section is your one chance to go beyond numbers and facts. Follow the 5-step framework, use specific details from your actual life, skip the clichés, and read it aloud before finalising. A strong About Me does not just describe you — it makes the reader want to pick up the phone.</p>
          <p>Once your About Me is ready, use our <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">free biodata builder</Link> to add it to a beautiful template and download your <Link href="/articles/biodata-format-word-download" className="text-indigo-600 dark:text-indigo-400 hover:underline">PDF</Link> in minutes. Share it via WhatsApp, email, or print — it is completely free, no sign-up required.</p>

          {/* CTA Bottom */}
          <div className="mt-12 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Ready to create your biodata?</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-6">Our guided builder has a dedicated About Me field. Fill it in, pick a stunning template, and download your PDF — free, no sign-up.</p>
            <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">Create Your Biodata Free</Link>
          </div>

          {/* What's Next */}
          <div className="mt-12 bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-white">What to Read Next</h3>
            <ul className="space-y-2 text-base">
              <li>📄 <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline">Complete Biodata Writing Tips — Master Guide</Link></li>
              <li>⚖️ <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline">Modern vs Traditional Biodata — Which Style Suits You?</Link></li>
              <li>👨 <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline">Marriage Biodata for Boy — Format & Samples</Link></li>
              <li>👩 <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">Shaadi Biodata Format for Girl</Link></li>
              <li>🔄 <Link href="/articles/biodata-for-second-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline">Biodata for Second Marriage — Sensitive Guide</Link></li>
              <li>🏠 <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline">Best Marriage Biodata Format for Hindu</Link></li>
              <li>📤 <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">Biodata Format for WhatsApp Sharing</Link></li>
            </ul>
          </div>

        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
