import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";

export const metadata = {
  title: "Marriage Biodata Format for Christian | Wedding Biodata Guide",
  description: "Learn how to create a marriage biodata for Christian families in India. Covers denomination, church details, family background and sample format.",
  alternates: { canonical: "https://biodatabuilder.in/articles/marriage-biodata-format-for-christian" },
};

export default function Article() {
  return (
    <ArticleWrapper
      publishedDate="2024-04-12"
      related={[
        { title: "Marriage Biodata Format for Muslim Families", slug: "marriage-biodata-format-for-muslim" },
        { title: "Best Marriage Biodata Format for Hindu Families", slug: "best-marriage-biodata-format-for-hindu" },
        { title: "Biodata Photo Tips: Choosing the Right Picture", slug: "biodata-photo-tips" },
      ]}
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
        Marriage Biodata Format for Christian Families in India
      </h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          Indian Christian matrimonial customs vary significantly across communities — Keralite Catholic, Tamil Protestant, Goan Catholic, North Indian Christian, and Anglo-Indian families each have distinct expectations for a <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata</strong>. This guide covers the essential elements that apply broadly, with notes on community-specific considerations.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Key Sections in a Christian Marriage Biodata</h2>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">1. Denomination & Church</h3>
        <p>
          Denomination matters more than most people realise in Indian Christian matrimony. Catholic, CSI (Church of South India), CNI (Church of North India), Pentecostal, Baptist, Marthoma, Jacobite — these are not interchangeable in traditional matchmaking. Be specific:
        </p>
        <div className="bg-zinc-100 dark:bg-zinc-800 rounded-xl p-4 text-sm font-mono text-zinc-700 dark:text-zinc-300">
          <p><strong>Example:</strong> Religion: Christian (Roman Catholic) | Parish: Sacred Heart Church, Ernakulam</p>
        </div>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">2. Personal Details</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Full name (baptismal name if applicable)</li>
          <li>Date of birth</li>
          <li>Height and complexion</li>
          <li>Blood group</li>
          <li>Place of birth and current residence</li>
        </ul>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">3. Education & Career</h3>
        <p>
          Indian Christian families, particularly Keralite communities, place very high value on education. Be detailed here — mention not just your degree but the institution and year if it is prestigious.
        </p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">4. Family Details</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Father — name, occupation, denomination if relevant</li>
          <li>Mother — name and maiden surname (important in some communities)</li>
          <li>Siblings — name, occupation, and marital status</li>
          <li>Whether family is locally based or settled abroad (NRI families)</li>
        </ul>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">5. Community Specifics</h3>

        <p><strong className="font-semibold text-zinc-900 dark:text-white">Keralite Catholic / Syrian Christian:</strong> Mention the family&apos;s church, former village (tharavad / family home), and whether you are Latin, Syro-Malabar, or Syro-Malankara rite. Families here often match within the same rite and regional community.</p>

        <p className="mt-4"><strong className="font-semibold text-zinc-900 dark:text-white">Goan Catholic:</strong> Mention the ancestral village (Goan Catholics strongly identify with their home village — Aldona, Moira, Calangute, etc.). Your surname alone often communicates community.</p>

        <p className="mt-4"><strong className="font-semibold text-zinc-900 dark:text-white">Tamil / Telugu Protestant (CSI/CNI):</strong> Denomination and home church are key. Mention whether you are Dalit Christian, if relevant, as some families (and some social justice-forward families) consider it important.</p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">6. Expectations</h3>
        <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5 italic text-indigo-900 dark:text-indigo-100">
          "Looking for a practicing Christian girl from a good family, preferably Roman Catholic. Open to all regions of Kerala. Should be willing to settle in Dubai (where I am currently working)."
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Helpful Tips</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Use a formal but warm, welcoming tone. Open with "By God&apos;s Grace" if it is your family&apos;s tradition.</li>
          <li>Include a church-quality portrait photo — formals or semi-formals are ideal.</li>
          <li>If the family is NRI, mention the country and whether they intend to return.</li>
          <li>If divorced, note "Civil Divorce" — this matters for church annulment processes in Catholic families.</li>
        </ul>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Create Your Christian Marriage Biodata</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8">Beautiful, clean templates with all the sections you need. Download as PDF — free, no registration.</p>
          <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
            Create Biodata Free
          </Link>
        </div>
      </div>
    </ArticleWrapper>
  );
}
