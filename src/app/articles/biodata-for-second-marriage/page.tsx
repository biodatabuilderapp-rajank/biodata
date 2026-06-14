import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biodata for Second Marriage | Divorced & Widowed Guide",
  description: "Write an honest, dignified biodata for second marriage. Includes 4 sample texts, comparison table, cultural tips for Hindu/Muslim/Christian, and checklist.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-for-second-marriage" },
  openGraph: {
    title: "Biodata for Second Marriage | Divorced & Widowed Guide",
    description: "Write an honest, dignified biodata for second marriage. Includes 4 sample texts, comparison table, cultural tips for Hindu/Muslim/Christian, and checklist.",
    url: "https://biodatabuilder.in/articles/biodata-for-second-marriage",
    images: [{ url: "/examples/Second-marriage-biodata-example.png", width: 1200, height: 700, alt: "Second marriage biodata example" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I mention a previous marriage in my biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — always. Transparency builds trust and filters for compatible families from day one. Families open to second marriages will not be deterred; those who are not would not have been a good match anyway. Hiding a previous marriage almost always backfires when families exchange Kundali or references." },
    },
    {
      "@type": "Question",
      name: "What should a second marriage biodata say about marital status?",
      acceptedAnswer: { "@type": "Answer", text: "State clearly: 'Divorced' or 'Widowed'. If possible, add how long ago — e.g. 'Divorced 3 years ago'. If you have children, mention their age and who they live with. Do NOT explain the reason for divorce in the biodata — save that for when there is genuine mutual interest." },
    },
    {
      "@type": "Question",
      name: "Can I find a good match with a second marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. A well-written, honest biodata that clearly states your situation — including children if applicable — and focuses on who you are today and what you are looking for, consistently attracts the right responses. Many families are very open to second marriages, especially when the biodata communicates maturity and clarity." },
    },
    {
      "@type": "Question",
      name: "Is it okay to look for someone who has also been married before?",
      acceptedAnswer: { "@type": "Answer", text: "Yes — and many people find this to be their best match. You can note in the Expectations section: 'Open to both first and second marriages'. This signals openness and often results in more compatible inquiries." },
    },
    {
      "@type": "Question",
      name: "Should I mention children in my second marriage biodata?",
      acceptedAnswer: { "@type": "Answer", text: "Yes, absolutely. Mention the child's age and who they primarily live with. Trying to hide children almost always creates problems later. The right partner will appreciate your honesty and your commitment to your child." },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ArticleWrapper
        publishedDate="2026-06-14"
        related={[
          { title: "How to Write Your Biodata About Me Section", slug: "how-to-write-biodata-about-me" },
          { title: "Biodata Tips: Photos, Hobbies & Mistakes", slug: "biodata-tips" },
          { title: "Shaadi Biodata Format for Girl", slug: "shaadi-biodata-format-for-girl" },
        ]}
      >
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          Biodata for Second Marriage: A Dignified, Honest Guide
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">

          {/* TL;DR */}
          <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
            <p className="font-semibold text-amber-900 dark:text-amber-100 mb-2">TL;DR — Key Takeaways</p>
            <ul className="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-200">
              <li>Always state your marital status clearly — <strong>Divorced</strong> or <strong>Widowed</strong></li>
              <li>Mention children (age + who they live with) — never hide this</li>
              <li>Add &quot;how long ago&quot; — e.g. &quot;Divorced 2 years ago&quot; is more reassuring than just &quot;Divorced&quot;</li>
              <li>Do <strong>not</strong> explain the reason for divorce — save that for genuine conversations</li>
              <li>Write an About Me that focuses on who you are <em>today</em>, not what you&apos;ve been through</li>
              <li>Use our <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">free biodata builder</Link> to create a clean, dignified PDF in minutes</li>
            </ul>
          </div>

          {/* Hero Image */}
          <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
            <Image src="/examples/Second-marriage-biodata-example.png" alt="Marriage biodata example for second marriage showing Divorced or Widowed marital status" width={1200} height={700} className="w-full h-auto" priority />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">A dignified second marriage biodata — honest, clean, and compassionate</p>
          </div>

          {/* TOC */}
          <nav className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-6">
            <p className="font-bold text-zinc-900 dark:text-white mb-3">In This Guide</p>
            <ol className="list-decimal pl-5 space-y-1 text-base text-indigo-600 dark:text-indigo-400">
              <li><a href="#mention" className="hover:underline">Should You Mention It Upfront?</a></li>
              <li><a href="#what-to-include" className="hover:underline">What to Include &amp; What to Skip</a></li>
              <li><a href="#samples" className="hover:underline">4 Sample About Me Texts</a></li>
              <li><a href="#expectations" className="hover:underline">Writing the Expectations Section</a></li>
              <li><a href="#cultural" className="hover:underline">Cultural Tips (Hindu, Muslim, Christian)</a></li>
              <li><a href="#mistakes" className="hover:underline">Common Mistakes to Avoid</a></li>
              <li><a href="#checklist" className="hover:underline">Self-Check Checklist</a></li>
              <li><a href="#faq" className="hover:underline">FAQ</a></li>
            </ol>
          </nav>

          {/* Intro */}
          <p>Seeking a second marriage requires a biodata that is <strong className="font-semibold text-zinc-900 dark:text-white">honest, dignified, and sensitive</strong>. Whether you are divorced or widowed, your biodata sets the tone for mature, respectful conversations. The goal is not to over-explain your past — it is to clearly present who you are <em>today</em> and what you are genuinely looking for.</p>
          <p>This guide covers every element: what to include, what to skip, 4 ready-to-use sample texts, cultural considerations, and the most common mistakes people make when writing a second marriage biodata. Whether you&apos;re creating a <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline">biodata for a divorced man</Link> or a <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">biodata for a widowed woman</Link>, the principles are the same.</p>

          {/* CTA Top */}
          <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl text-center">
            <p className="text-indigo-800 dark:text-indigo-200 mb-3">Ready to build your biodata? Our templates are clean, honest, and inclusive. No sign-up needed.</p>
            <Link href="/create" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-md">Build My Biodata — Free &rarr;</Link>
          </div>

          {/* Should Mention */}
          <h2 id="mention" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Should You Mention a Previous Marriage Upfront?</h2>
          <p><strong className="font-semibold text-zinc-900 dark:text-white">Yes — always.</strong> This is the single most important piece of advice in this guide. Trying to conceal a previous marriage almost always backfires — families exchange Kundali details, ask for references, or simply find out through mutual contacts. When it surfaces later, it destroys trust completely.</p>
          <p>Transparency does the opposite: it <strong className="font-semibold text-zinc-900 dark:text-white">filters in compatible families</strong> from day one. Families who are genuinely open to second marriages will not be deterred by honesty. Those who are not would not have been a good match anyway. By being upfront, you start every conversation on a foundation of respect and clarity.</p>

          {/* What to Include */}
          <h2 id="what-to-include" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">What to Include &amp; What to Skip</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-base">
              <thead><tr className="bg-zinc-100 dark:bg-zinc-800"><th className="p-3 font-semibold text-zinc-900 dark:text-white">Field</th><th className="p-3 font-semibold text-zinc-900 dark:text-white">✅ Include</th><th className="p-3 font-semibold text-zinc-900 dark:text-white">❌ Skip</th></tr></thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-700">
                <tr><td className="p-3">Marital Status</td><td className="p-3">&quot;Divorced&quot; or &quot;Widowed&quot; — clearly stated</td><td className="p-3">Vague or absent</td></tr>
                <tr><td className="p-3">Duration</td><td className="p-3">&quot;Divorced 2 years ago&quot; / &quot;Widowed 3 years ago&quot;</td><td className="p-3">Just &quot;Divorced&quot; with no context</td></tr>
                <tr><td className="p-3">Children</td><td className="p-3">Age + primary custody (e.g. &quot;Son, 7, lives with me&quot;)</td><td className="p-3">Hiding children</td></tr>
                <tr><td className="p-3">Reason for Divorce</td><td className="p-3">—</td><td className="p-3">Never in a biodata</td></tr>
                <tr><td className="p-3">Details of Ex-Spouse</td><td className="p-3">—</td><td className="p-3">Never</td></tr>
                <tr><td className="p-3">About Me</td><td className="p-3">Who you are today, your strengths, what you want</td><td className="p-3">Excessive apologies or disclaimers</td></tr>
                <tr><td className="p-3">Expectations</td><td className="p-3">Open, warm, 2–3 genuine requirements</td><td className="p-3">Long rigid list of conditions</td></tr>
                <tr><td className="p-3">Astrological Details</td><td className="p-3">Rashi, Nakshatra, Gotra (for Hindu families)</td><td className="p-3">Leaving blank for Hindu families</td></tr>
              </tbody>
            </table>
          </div>

          {/* Infographic */}
          <div className="my-6 rounded-2xl overflow-hidden shadow-md">
            <Image src="/examples/Second-marriage-biodata-guide.png" alt="Second marriage biodata: what to include vs what to skip infographic" width={1024} height={1024} className="w-full h-auto" />
          </div>

          {/* Samples */}
          <h2 id="samples" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">4 Sample &quot;About Me&quot; Texts for Second Marriage Biodata</h2>
          <p>The About Me section is the heart of a second marriage biodata. It should focus on who you are <em>today</em> — your strengths, your readiness, your life. For detailed writing guidance, see our <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">About Me writing guide</Link>. Here are 4 ready-to-adapt samples:</p>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3">1. Divorced Woman with Child</h3>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5 italic text-indigo-900 dark:text-indigo-100">
            &quot;I am a 32-year-old schoolteacher in Pune, and a proud mother to a 6-year-old daughter who is the centre of my world. I have been through a difficult chapter and have emerged stronger, clearer about what I want in life, and grateful for the support of my family. I am looking for a kind, mature partner who is open to embracing my daughter and building a loving home together.&quot;
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3">2. Widower with Child</h3>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5 italic text-indigo-900 dark:text-indigo-100">
            &quot;I am a 38-year-old civil engineer based in Ahmedabad. I lost my wife three years ago and have been raising my son, now 8, with the love and support of my family. I am at a stage where I feel ready to invite companionship and warmth back into my life. I am looking for a patient, understanding woman who appreciates family bonds and is open to being a part of an existing, loving household.&quot;
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3">3. Divorced Man without Child</h3>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5 italic text-indigo-900 dark:text-indigo-100">
            &quot;I am a 35-year-old software engineer working in Bengaluru. My first marriage ended amicably three years ago and I have had time to reflect, grow, and become clear about what I truly value in a life partner. I am grounded, family-oriented, and financially stable. I am looking for a warm, independent woman who values companionship and shared growth.&quot;
          </div>

          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-3">4. Widowed Woman without Child</h3>
          <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5 italic text-indigo-900 dark:text-indigo-100">
            &quot;I am a 34-year-old marketing professional from Delhi. I was widowed two years ago and have slowly found my footing again, supported by a loving family. I am ready to open a new chapter — not to replace what I had, but to build something new with the right person. I am looking for a kind, emotionally mature partner who understands that love and strength can coexist.&quot;
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Note: These are illustrative samples. Replace all personal details with your own accurate information.</p>

          {/* CTA Middle */}
          <div className="mt-10 p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
            <h3 className="text-xl font-bold text-indigo-900 dark:text-indigo-100 mb-2">Build Your Second Marriage Biodata — Free</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-4">Use the sample texts above as inspiration. Fill in your details, choose a dignified template, and download your PDF in 2 minutes.</p>
            <Link href="/create" className="inline-block px-6 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-md">Create My Biodata &rarr;</Link>
          </div>

          {/* Expectations */}
          <h2 id="expectations" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Writing the Expectations Section: Keep It Compassionate</h2>
          <p>The expectations section in a second marriage biodata should be <strong className="font-semibold text-zinc-900 dark:text-white">open and warm</strong>, not a rigid checklist. Avoid placing hard restrictions that make you seem inflexible. The best approach acknowledges mutual openness:</p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-2xl p-5">
              <p className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">❌ Too Rigid</p>
              <p className="text-base italic">&quot;Must be from same city, earning 20+ LPA, no previous marriage, below 30 years old, same community.&quot;</p>
            </div>
            <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-5">
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">✅ Warm &amp; Open</p>
              <p className="text-base italic">&quot;Open to both first and second marriages. Partner should be emotionally mature, family-oriented, and accepting of my child. Location is flexible.&quot;</p>
            </div>
          </div>
          <p className="mt-4">If you are open to a partner who has also been married before, explicitly say so: <em>&quot;Open to divorcee or widower.&quot;</em> This often results in significantly more compatible inquiries and shows emotional maturity.</p>

          {/* Cultural Tips */}
          <h2 id="cultural" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Cultural Tips by Religion &amp; Community</h2>
          <div className="space-y-4">
            <div className="p-5 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
              <p className="font-semibold text-zinc-900 dark:text-white mb-2">For <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline">Hindu families</Link></p>
              <p>Some families ask for a new Kundali for the remarriage. Having your Rashi, Nakshatra, and Gotra ready is helpful. Manglik status should also be mentioned. Many communities — particularly in UP, Rajasthan, and Maharashtra — are fully accepting of divorcees and widows/widowers especially when the circumstances are clear.</p>
            </div>
            <div className="p-5 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
              <p className="font-semibold text-zinc-900 dark:text-white mb-2">For <Link href="/articles/marriage-biodata-format-for-muslim" className="text-indigo-600 dark:text-indigo-400 hover:underline">Muslim families</Link></p>
              <p>Second marriages are explicitly permitted in Islam and carry no social stigma in most communities. State your status clearly and note whether your first marriage ended via Talaq or Khula if relevant. Many families are very supportive and move quickly once they see an honest, well-written biodata.</p>
            </div>
            <div className="p-5 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl">
              <p className="font-semibold text-zinc-900 dark:text-white mb-2">For <Link href="/articles/marriage-biodata-format-for-christian" className="text-indigo-600 dark:text-indigo-400 hover:underline">Christian families</Link></p>
              <p>Where the church permits remarriage, use the phrase &quot;civil divorce&quot; or &quot;widowed&quot; clearly. The specific phrasing can matter for church weddings. For Catholic families in particular, it is worth noting whether an annulment was obtained.</p>
            </div>
          </div>

          {/* Mistakes */}
          <h2 id="mistakes" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Common Mistakes in Second Marriage Biodatas</h2>
          <ol className="list-decimal pl-6 space-y-4">
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Hiding the previous marriage</strong> — This is the biggest mistake. It almost always surfaces and destroys trust. Honesty is your strongest asset.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Hiding children</strong> — Families need to know. Mention the child&apos;s age and who they primarily live with. The right partner will see this as a beautiful part of who you are.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Explaining the reason for divorce</strong> — Your biodata is not a confessional. Families do not need to know the reason — that&apos;s a conversation for when there is genuine mutual interest.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Writing a self-pitying About Me</strong> — Avoid phrases like &quot;I have suffered a lot&quot; or &quot;I am looking for a second chance.&quot; Focus on your strengths, your stability, and what you bring to a relationship.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Excessive apologies or disclaimers</strong> — You do not need to apologise for your situation. A biodata filled with disclaimers signals low confidence. Write with quiet dignity.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Not mentioning how long ago</strong> — &quot;Divorced&quot; with no context is less reassuring than &quot;Divorced 2 years ago, settled and stable.&quot; Context matters.</li>
            <li><strong className="font-semibold text-zinc-900 dark:text-white">Overly restrictive expectations</strong> — After a difficult first marriage, it is tempting to list every condition. Resist this. Keep your expectations open and positive.</li>
          </ol>

          {/* Checklist */}
          <h2 id="checklist" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Self-Check Before You Share</h2>
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-6">
            <ul className="space-y-2 text-emerald-900 dark:text-emerald-100">
              <li>☐ Marital status clearly stated: &quot;Divorced&quot; or &quot;Widowed&quot;</li>
              <li>☐ How long ago is mentioned (e.g. &quot;3 years ago&quot;)</li>
              <li>☐ Children included with age and custody — if applicable</li>
              <li>☐ Reason for divorce is NOT mentioned</li>
              <li>☐ About Me focuses on who you are <em>today</em> — not on the past</li>
              <li>☐ No self-pity, apologies, or excessive disclaimers</li>
              <li>☐ Expectations are open and warm, not a rigid list</li>
              <li>☐ Astrological details included (for Hindu families)</li>
              <li>☐ Photo is recent and natural</li>
              <li>☐ Biodata is 1 page and saved as PDF</li>
              <li>☐ A trusted family member has reviewed and approved it</li>
            </ul>
          </div>

          {/* FAQ */}
          <h2 id="faq" className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Should I mention a previous marriage in my biodata?</h3><p>Yes — always. Transparency builds trust and filters for compatible families from day one. Hiding it almost always backfires when families exchange Kundali or references.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">What should a second marriage biodata say about marital status?</h3><p>State clearly: &quot;Divorced&quot; or &quot;Widowed.&quot; Add how long ago if possible — e.g. &quot;Divorced 3 years ago.&quot; If you have children, mention their age and who they live with. Do <strong>not</strong> explain the reason for divorce — save that for genuine conversations.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Can I find a good match with a second marriage biodata?</h3><p>Absolutely. A well-written, honest biodata that clearly states your situation and focuses on who you are today consistently attracts the right responses. Many families are very open to second marriages.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Is it okay to look for someone who has also been married before?</h3><p>Yes — and many people find this to be their best match. Note in your Expectations section: &quot;Open to both first and second marriages.&quot; This signals openness and attracts more compatible inquiries.</p></div>
            <div><h3 className="font-semibold text-zinc-900 dark:text-white mb-1">Should I mention children in my second marriage biodata?</h3><p>Yes, absolutely. Mention the child&apos;s age and who they primarily live with. Hiding children creates trust issues later. The right partner will appreciate your honesty and your commitment to your child.</p></div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Conclusion</h2>
          <p>A second marriage biodata is not about explaining your past — it is about presenting your present with honesty and dignity. State your status clearly, include children if applicable, skip the reasons and apologies, and write an About Me that shows who you are <em>today</em>. The right families will respond not despite your honesty, but because of it.</p>
          <p>Use our <Link href="/create" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">free biodata builder</Link> to bring these principles to life. It takes 2 minutes and produces a clean, professional PDF — ready to share on <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">WhatsApp</Link> or any matrimonial site.</p>

          {/* CTA Bottom */}
          <div className="mt-12 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Create Your Biodata — Free &amp; Dignified</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-6">Clean, honest, inclusive templates. Fill in your details and download a beautiful PDF in minutes. No sign-up needed.</p>
            <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">Create Biodata Free</Link>
          </div>

          {/* What's Next */}
          <div className="mt-12 bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-white">What to Read Next</h3>
            <ul className="space-y-2 text-base">
              <li>✍️ <Link href="/articles/how-to-write-biodata-about-me" className="text-indigo-600 dark:text-indigo-400 hover:underline">How to Write About Me in Marriage Biodata — 6 Examples</Link></li>
              <li>📷 <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline">Biodata Tips: Photos, Hobbies &amp; Mistakes to Avoid</Link></li>
              <li>📱 <Link href="/articles/biodata-format-for-whatsapp" className="text-indigo-600 dark:text-indigo-400 hover:underline">Biodata Format for WhatsApp — Tips &amp; PDF Guide</Link></li>
              <li>👩 <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline">Shaadi Biodata Format for Girl</Link></li>
              <li>👨 <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline">Marriage Biodata for Boy — Format &amp; Samples</Link></li>
              <li>🕍 <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-indigo-600 dark:text-indigo-400 hover:underline">Best Marriage Biodata Format for Hindu</Link></li>
              <li>♆️ <Link href="/articles/marriage-biodata-format-for-muslim" className="text-indigo-600 dark:text-indigo-400 hover:underline">Muslim Marriage Biodata Format</Link></li>
              <li>✝️ <Link href="/articles/marriage-biodata-format-for-christian" className="text-indigo-600 dark:text-indigo-400 hover:underline">Christian Marriage Biodata Format</Link></li>
            </ul>
          </div>

        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
