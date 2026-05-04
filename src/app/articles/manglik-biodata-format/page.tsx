import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";

export const metadata = {
  title: "Manglik Biodata Format | Marriage Biodata for Manglik Boy & Girl",
  description: "A complete guide to creating a marriage biodata when you are Manglik. Learn what to mention, how to handle concerns, and match with compatible partners.",
  alternates: { canonical: "https://biodatabuilder.in/articles/manglik-biodata-format" },
  openGraph: {
    title: "Manglik Biodata Format | Marriage Biodata for Manglik Boy & Girl",
    description: "A complete guide to creating a marriage biodata when you are Manglik. Learn what to mention, how to handle concerns, and match with compatible partners.",
    url: "https://biodatabuilder.in/articles/manglik-biodata-format",
  },
};

export default function Article() {
  return (
    <ArticleWrapper
      publishedDate="2024-04-12"
      related={[
        { title: "Kundali Details in Biodata: What to Include", slug: "kundali-details-in-biodata" },
        { title: "Best Marriage Biodata Format for Hindu Families", slug: "best-marriage-biodata-format-for-hindu" },
        { title: "10 Common Biodata Mistakes to Avoid", slug: "biodata-mistakes-to-avoid" },
      ]}
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
        Manglik Biodata Format: A Complete Guide
      </h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          Being <strong className="font-semibold text-zinc-900 dark:text-white">Manglik</strong> — having Mars placed in the 1st, 2nd, 4th, 7th, 8th, or 12th house of your birth chart — is one of the most misunderstood aspects of Vedic astrology in the context of marriage. This guide helps you create an honest, effective biodata and navigate the matchmaking process confidently.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Should You Mention Manglik Status in Your Biodata?</h2>
        <p>
          <strong className="font-semibold text-zinc-900 dark:text-white">Yes — always.</strong> Not mentioning your Manglik status only delays the issue. Families will discover it during Kundali matching anyway. Disclosing it upfront signals honesty and saves everyone time. It also helps you connect directly with families that are open to Manglik matches or are themselves Manglik.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Types of Manglik Status to Mention</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong className="font-semibold text-zinc-900 dark:text-white">Full Manglik (Poorna Manglik):</strong> Mars is in one of the classic Mangal Dosha houses. Traditional remedy: match with another Manglik.
          </li>
          <li>
            <strong className="font-semibold text-zinc-900 dark:text-white">Anshik Manglik (Partial):</strong> Mars is in a house that creates partial Dosha. Anshik Mangliks can often match with Non-Mangliks after consulting a priest.
          </li>
          <li>
            <strong className="font-semibold text-zinc-900 dark:text-white">Non-Manglik:</strong> No Mangal Dosha. Still mention this explicitly so families do not wonder.
          </li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Sample Kundali Section for a Manglik Biodata</h2>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-5 space-y-2 text-sm font-mono text-zinc-700 dark:text-zinc-300">
          <p><strong>Date of Birth:</strong> 08 November 1995</p>
          <p><strong>Time of Birth:</strong> 06:45 AM</p>
          <p><strong>Place of Birth:</strong> Indore, Madhya Pradesh</p>
          <p><strong>Rashi:</strong> Tula (Libra)</p>
          <p><strong>Nakshatra:</strong> Swati, 3rd Pada</p>
          <p><strong>Gotra:</strong> Bharadwaj</p>
          <p><strong>Manglik Status:</strong> Manglik (Full)</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">How to Handle the "Manglik Concern" in the Biodata</h2>
        <p>
          Some families leave an optional note in the expectations section. For example:
        </p>
        <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5 italic text-indigo-900 dark:text-indigo-100">
          "We are open to matches from Manglik boys/girls. Families comfortable with Manglik matches are welcome to reach out."
        </div>
        <p>
          This filters in compatible families and signals maturity and openness.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Remedies Often Mentioned</h2>
        <p>
          If your family has already done remedial measures (like Kumbh Vivah, prayers at Mangal temples, or consulting a Jyotishi who has cleared the Dosha), you can mention: <em>"Manglik — remedies performed as advised by family priest."</em> This reassures families who might otherwise be hesitant.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Modern Perspective</h2>
        <p>
          Many astrologers and matrimonial advisors now consider Mangal Dosha to be less significant than traditionally believed — especially Anshik Manglik cases. A growing number of educated urban families do not filter on Manglik status at all. The key is to find families aligned with your outlook. State the fact, and let the right families respond.
        </p>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Create Your Biodata with Full Kundali Details</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8">Our form includes clear fields for Manglik status, Rashi, Nakshatra, and Gotra. Download as PDF — free, no sign-up.</p>
          <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
            Create Biodata Free
          </Link>
        </div>
      </div>
    
        <div className="mt-12 bg-white dark:bg-zinc-900/50 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-white">What's Next?</h3>
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            If you found this guide helpful, you might also want to read our <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">master guide on biodata photo tips and mistakes to avoid</Link>. Or, if you're exploring styles, check out the <Link href="/articles/modern-vs-traditional-biodata" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">differences between modern and traditional formats</Link>.
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Once you're ready, you can use our <strong>biodata builder to create your profile instantly</strong> without any design skills.
          </p>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
  );
}
