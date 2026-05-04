import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";

export const metadata = {
  title: "Kundali Details in Biodata | What Horoscope Info to Include",
  description: "What kundali and horoscope details should you include in a marriage biodata? A complete guide to Rashi, Nakshatra, Gotra, Manglik status and more.",
  alternates: { canonical: "https://biodatabuilder.in/articles/kundali-details-in-biodata" },
  openGraph: {
    title: "Kundali Details in Biodata | What Horoscope Info to Include",
    description: "What kundali and horoscope details should you include in a marriage biodata? A complete guide to Rashi, Nakshatra, Gotra, Manglik status and more.",
    url: "https://biodatabuilder.in/articles/kundali-details-in-biodata",
  },
};

export default function Article() {
  return (
    <ArticleWrapper
      publishedDate="2024-04-12"
      related={[
        { title: "Best Marriage Biodata Format for Hindu Families", slug: "best-marriage-biodata-format-for-hindu" },
        { title: "Manglik Biodata Format & Guidance", slug: "manglik-biodata-format" },
        { title: "Modern vs Traditional Biodata Format", slug: "modern-vs-traditional-biodata" },
      ]}
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
        Kundali Details in Marriage Biodata: What to Include
      </h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          For millions of Hindu families across India, <strong className="font-semibold text-zinc-900 dark:text-white">Kundali matching</strong> (also called Jyotish or Vedic astrology compatibility) plays a central role in deciding whether to proceed with a matrimonial alliance. Including the right horoscope details in your <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata</strong> can significantly speed up the matchmaking process.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Essential Kundali Information to Include</h2>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">1. Date, Time & Place of Birth</h3>
        <p>This is the most critical piece. Without an accurate birth time, a Kundali cannot be properly cast. If you are unsure of the exact birth time, many families mention "Birth time unknown" rather than leaving it blank.</p>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 font-mono text-sm text-zinc-700 dark:text-zinc-300">
          <p><strong>Example:</strong> Date of Birth: 14 March 1996 | Time: 11:32 AM | Place: Pune, Maharashtra</p>
        </div>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">2. Rashi (Moon Sign)</h3>
        <p>
          Rashi is the zodiac sign in which the Moon was placed at your time of birth. There are 12 rashis (Mesh, Vrishabha, Mithuna, Karka, Simha, Kanya, Tula, Vrishchika, Dhanu, Makara, Kumbha, Meena). Many families check Rashi compatibility charts before proceeding.
        </p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">3. Nakshatra (Birth Star) and Pada</h3>
        <p>
          There are 27 Nakshatras. Your Nakshatra (and its Pada — quarter) determine your Gana (Deva, Manushya, or Rakshasa), which is one of the key parameters in Ashtakoota matching. Some families strictly match Nakshatras before moving ahead.
        </p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">4. Gotra</h3>
        <p>
          Gotra represents your patrilineal lineage — an ancient clan designation traced back to a Vedic sage. In most Hindu traditions, marriages within the same Gotra (Sagotra) are strictly avoided. Always mention your Gotra clearly.
        </p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">5. Manglik Status</h3>
        <p>
          Mangal Dosha (or Chowa Dosha) occurs when Mars is placed in certain houses of the Kundali. Being Manglik is not a curse — it is a planetary position — but many families filter on this. Clearly state:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Manglik</strong> — Full Mangal Dosha present</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Anshik Manglik</strong> — Partial Mangal Dosha</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Non-Manglik</strong> — No Mangal Dosha</li>
        </ul>
        <p>If you are Manglik, pairing with another Manglik is the traditional remedy — so stating this clearly helps filter-in compatible matches rather than causing surprises later.</p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">6. Gana</h3>
        <p>Gana (Deva, Manushya, or Rakshasa) is derived from your Nakshatra. It is one of the 8 kootas matched in Ashtakoota matching. Deva-Deva is ideal; Rakshasa-Deva is traditionally considered incompatible by many priests.</p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Optional but Helpful</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Lagna (Ascendant):</strong> The rising sign at birth — useful for detailed Kundali analysis.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Nadi:</strong> One of the 8 kootas. High Nadi score is considered important for progeny compatibility.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Charan / Pada:</strong> The quarter of the Nakshatra — important in some regional traditions.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Sample Kundali Section</h2>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-5 space-y-2 text-sm font-mono text-zinc-700 dark:text-zinc-300">
          <p><strong>Date of Birth:</strong> 22 July 1997</p>
          <p><strong>Time of Birth:</strong> 08:15 AM</p>
          <p><strong>Place of Birth:</strong> Jaipur, Rajasthan</p>
          <p><strong>Rashi:</strong> Karka (Cancer)</p>
          <p><strong>Nakshatra:</strong> Pushya, 2nd Pada</p>
          <p><strong>Gotra:</strong> Kashyap</p>
          <p><strong>Manglik Status:</strong> Non-Manglik</p>
          <p><strong>Gana:</strong> Deva</p>
        </div>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Add All These Details to Your Biodata</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8">Our form has dedicated fields for Rashi, Nakshatra, Gotra, Manglik status and more. Download as PDF in seconds, free.</p>
          <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
            Create Biodata Free
          </Link>
        </div>
      </div>
    </ArticleWrapper>
  );
}
