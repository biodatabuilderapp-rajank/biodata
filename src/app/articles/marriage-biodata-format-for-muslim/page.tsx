import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";

export const metadata = {
  title: "Marriage Biodata Format for Muslim | Nikah Biodata Guide",
  description: "Learn how to create a marriage biodata for Muslim families. Covers Mehr, Wali, religious education, and Islamic values sections.",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-format-for-muslim" }
};

export default function Article() {
  return (
    <ArticleWrapper publishedDate="2024-03-24">

      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">Marriage Biodata Format for Muslim Families</h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          A <strong className="font-semibold text-zinc-900 dark:text-white">Muslim marriage biodata</strong> (also called a Rishta biodata or Nikah biodata) is the first formal introduction shared between families during the matchmaking process. While it shares many elements with a standard biodata, there are specific sections that are especially important for Muslim families.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Religious Identity & Practice</h2>
        <p>Clearly stating your sect (Sunni, Shia, Sufi, Ahmadiyya, etc.) and your level of religious practice is very important. Families look for compatibility in values and lifestyle. Mention:</p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Sect / Maslak:</strong> Sunni, Shia, Deobandi, Barelvi, Ahl-e-Hadith, etc.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Religiosity:</strong> Practicing / Moderate / Cultural Muslim.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Hijab / Beard:</strong> If applicable, mentioning this helps filter compatible matches.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Islamic Education:</strong> Hifz (Quran memorization), Alim/Alima degree, mosque/madrasa background.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Mehr Expectations</h2>
        <p>
          Mehr (or Mahr) is a mandatory gift from the groom to the bride upon Nikah. While the specific amount is negotiated between families, it is common in some communities to state a <em>proposed Mehr range</em> to set expectations early. This is optional but appreciated.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Wali (Guardian) Contact</h2>
        <p>
          In traditional Muslim matchmaking, families communicate through a male guardian (Wali). Including the Wali&apos;s name and contact number — rather than just the candidate&apos;s — is a sign of respect and adherence to Islamic etiquette. Many families prefer direct parent-to-parent contact.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Community & Caste (Biraderi)</h2>
        <p>
          While Islam discourages caste discrimination, community affiliation (Biraderi) remains significant in South Asian Muslim matchmaking. Common communities include Syed, Sheikh, Pathan, Ansari, Qureshi, and many others. State your community clearly if relevant to your family&apos;s preferences.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Partner Expectations</h2>
        <p>
          Be specific about what you are looking for. For example: &quot;Looking for a practicing Sunni girl with a modern outlook&quot; or &quot;Prefer someone from the same Biraderi.&quot; Clarity here avoids a lot of back-and-forth and helps families quickly identify compatibility.
        </p>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Create Your Nikah Biodata Free</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8 text-lg">Use our free biodata maker to fill in all the details above and download a beautiful PDF in seconds.</p>
          <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">Create Biodata Free</Link>
        </div>
      </div>
    </ArticleWrapper>
  );
}
