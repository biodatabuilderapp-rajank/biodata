import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";

export const metadata = {
  title: "How to Write Biodata About Me Section | Examples & Tips",
  description: "Not sure what to write in your marriage biodata's About Me section? Get expert tips and ready-to-use sample examples for boys and girls.",
  alternates: { canonical: "https://biodatabuilder.in/articles/how-to-write-biodata-about-me" },
  openGraph: {
    title: "How to Write Biodata About Me Section | Examples & Tips",
    description: "Not sure what to write in your marriage biodata's About Me section? Get expert tips and ready-to-use sample examples for boys and girls.",
    url: "https://biodatabuilder.in/articles/how-to-write-biodata-about-me",
  },
};

export default function Article() {
  return (
    <ArticleWrapper
      publishedDate="2024-04-12"
      related={[
        { title: "What to Write in Biodata Hobbies & Interests", slug: "what-to-write-in-biodata-hobbies" },
        { title: "10 Common Biodata Mistakes to Avoid", slug: "biodata-mistakes-to-avoid" },
        { title: "Biodata Photo Tips: Choosing the Right Picture", slug: "biodata-photo-tips" },
      ]}
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
        How to Write the "About Me" Section in a Marriage Biodata
      </h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          The <strong className="font-semibold text-zinc-900 dark:text-white">"About Me" or "Self Description"</strong> section is the most personal part of a marriage biodata. Unlike your education or income figures, this section lets your actual personality speak. Done right, it creates an immediate connection. Done wrong, it makes you sound like everyone else.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">What Should It Cover?</h2>
        <p>A strong About Me covers three things concisely:</p>
        <ol className="list-decimal pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Who you are</strong> — your core personality traits and values.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">What you do and love</strong> — career + passions that define your lifestyle.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">What you are looking for</strong> — a brief, positive statement of your hopes for your future partner.</li>
        </ol>
        <p>Keep it between 4–6 sentences. Longer is not better here — every word should earn its place.</p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Sample About Me — For a Girl</h2>
        <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
          <p className="text-indigo-900 dark:text-indigo-100 italic leading-relaxed">
            "I am a chartered accountant working in Mumbai with a deep love for classical Hindustani music — I have been learning vocals for over a decade. Raised in a traditional Gujarati family, I value joint family living while maintaining personal independence in my career. On weekends, you will find me in the kitchen experimenting with new recipes or on a local trek with friends. I am looking for a partner who is ambitious yet grounded, with a genuine appreciation for family bonds."
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Sample About Me — For a Boy</h2>
        <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
          <p className="text-indigo-900 dark:text-indigo-100 italic leading-relaxed">
            "I am a software engineer at a Bengaluru-based startup, working primarily in machine learning. I grew up in Nagpur in a close-knit Marathi family and carry those values into everything I do. I enjoy long-distance running, reading Indian history, and weekend road trips. While I have a progressive outlook on careers and lifestyle, I deeply cherish family traditions and festivals. I am looking for a life partner who shares a balance of personal ambition and family warmth."
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Sample About Me — For a Second Marriage</h2>
        <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-6">
          <p className="text-indigo-900 dark:text-indigo-100 italic leading-relaxed">
            "I am a 34-year-old doctor based in Hyderabad. I have been through a difficult past chapter and have grown immensely from that experience. I am a devoted mother to my 5-year-old son, who is my world. I am looking for a mature, understanding partner who is open to building a committed and caring family — one that embraces every member wholeheartedly."
          </p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Phrases to Avoid</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><span className="line-through text-zinc-400">"I am a simple and homely person"</span> — vague and overused.</li>
          <li><span className="line-through text-zinc-400">"I love to enjoy life"</span> — everyone does. Say <em>how</em>.</li>
          <li><span className="line-through text-zinc-400">"Looking for a life partner"</span> — that is implied. State what <em>kind</em> of partner.</li>
          <li><span className="line-through text-zinc-400">"I am adjustable"</span> — this sounds passive. Replace with a genuine quality.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Cultural Tips</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">North Indian families</strong> often appreciate mentions of devotion to festivals (Karwa Chauth, Teej) and joint family comfort.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">South Indian families</strong> value academic achievements and cultural practices (music, arts, Ashtanga practice).</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">Gujarati/Marwari families</strong> respond well to mentions of business mindset, savings habits, and community involvement.</li>
        </ul>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Ready to write your biodata?</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8">Our guided form has a dedicated About Me field. Fill it in, pick a template, and download your perfect PDF — free.</p>
          <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
            Create Your Biodata Free
          </Link>
        </div>
      </div>
    </ArticleWrapper>
  );
}
