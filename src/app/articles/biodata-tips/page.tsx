import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";

export const metadata = {
  title: "Biodata Tips: Mistakes to Avoid, Photo Tips & Hobbies",
  description: "Create the perfect marriage biodata by avoiding common mistakes, picking the right profile photo, and writing engaging hobbies. Master guide with examples.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-tips" },
  openGraph: {
    title: "Biodata Tips: Mistakes to Avoid, Photo Tips & Hobbies",
    description: "Create the perfect marriage biodata by avoiding common mistakes, picking the right profile photo, and writing engaging hobbies. Master guide with examples.",
    url: "https://biodatabuilder.in/articles/biodata-tips",
  },
};

export default function Article() {
  return (
    <ArticleWrapper
      publishedDate="2026-05-04"
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
        Master Biodata Guide: Photos, Hobbies & Mistakes to Avoid
      </h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          A <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata</strong> is often the very first impression your family makes on a prospective match. Small missteps — a blurry photo, a vague &quot;about me,&quot; or an overwhelming layout — can mean your profile gets skipped entirely.
        </p>
        <p>
          In this master guide, we will walk you through the three most critical components of a successful biodata: how to choose a flattering photo, how to write an engaging hobbies section, and the absolute biggest mistakes you need to avoid.
        </p>

        {/* 1. PHOTO TIPS SECTION */}
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">Part 1: Choosing the Perfect Biodata Photo</h2>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm max-w-2xl mx-auto">
          <Image 
            src="/biodata-photo-tips.png" 
            alt="Tips for choosing the perfect marriage biodata photo" 
            width={800} 
            height={600} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <p>
          Your photo sparks the initial interest. A good photo sets a positive tone for the rest of your biodata, while a poor one can end the conversation before it even starts. Here is how to ensure your biodata photo gives the best possible impression:
        </p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">A. Frame It Correctly</h3>
        <p>
          The ideal biodata photo is a head-and-shoulders (passport-style) shot. Your face should take up roughly 70–80% of the frame. Ensure the photo accurately represents how you look <em>today</em> — not five years ago. Families appreciate authenticity over heavily filtered pictures.
        </p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">B. Dress & Background</h3>
        <p>
          Wear something you would confidently wear to a formal family gathering. Traditional or smart-casual attire works best. Just as important is your background: choose a clean, uncluttered background like a plain wall or a soft outdoor setting. Busy backgrounds distract from your face.
        </p>


        {/* 2. HOBBIES SECTION */}
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">Part 2: What to Write in Hobbies & Interests</h2>
        
        <p>
          The hobbies section is incredibly underrated. It is one of the only places where your personality gets to speak beyond cold facts and figures. A well-written hobbies section creates instant connection points.
        </p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Ditch the Generic Filler</h3>
        <p>
          Phrases like &quot;Listening to music,&quot; &quot;watching TV,&quot; and &quot;spending time with family&quot; are assumed. They tell the reader absolutely nothing unique about you. Instead, try to be specific.
        </p>

        <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Strong Examples of Hobbies</h3>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Intellectual:</strong> &quot;Reading (historical fiction and self-help),&quot; or &quot;Playing classical guitar&quot;</li>
          <li><strong>Active & Outdoor:</strong> &quot;Weekend trekking, badminton, and yoga&quot;</li>
          <li><strong>Creative:</strong> &quot;Baking eggless desserts,&quot; &quot;Carnatic vocal music,&quot; or &quot;Amateur photography&quot;</li>
        </ul>
        <p>
          Pick 3–5 genuine ones. Listing 12 hobbies looks like you padded the list, and listing things you don't actually do will lead to awkward conversations later.
        </p>


        {/* 3. MISTAKES TO AVOID SECTION */}
        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">Part 3: 5 Fatal Mistakes to Avoid</h2>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm max-w-2xl mx-auto">
          <Image 
            src="/biodata-mistakes-avoid.png" 
            alt="Common mistakes to avoid in Indian arranged marriage biodata" 
            width={800} 
            height={600} 
            className="w-full h-auto object-cover"
          />
        </div>
        
        <p>
          Even with a great photo and interesting hobbies, logistical and formatting errors can ruin a biodata. Ensure you aren't making these common mistakes:
        </p>

        <ol className="list-decimal pl-6 space-y-6">
          <li>
            <strong>Leaving the &quot;About Me&quot; Section Empty:</strong>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              This is your elevator pitch. Instead of &quot;I am a simple person looking for a partner,&quot; try: &quot;A software engineer by profession, I am rooted in family values while maintaining an independent outlook.&quot;
            </p>
          </li>
          <li>
            <strong>Being Vague About Income or Profession:</strong>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Listing your income as &quot;Good&quot; or &quot;As per industry standard&quot; is frustrating. State a clear range. Families need this to assess lifestyle compatibility.
            </p>
          </li>
          <li>
            <strong>Omitting Astrological Details:</strong>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              For families that care about Kundali matching (Rashi, Nakshatra, Manglik status), omitting these forces a follow-up call just to ask basic questions. Provide them upfront.
            </p>
          </li>
          <li>
            <strong>Using a Word Document (Not a PDF):</strong>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              A Word file (.docx) shared on WhatsApp often breaks when opened on different phones. Margins shift, photos vanish, and fonts change. Always share your biodata as a <strong>PDF format</strong>.
            </p>
          </li>
          <li>
            <strong>Extremely Restrictive Expectations:</strong>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">
              Over-filtering on paper (&quot;Must be from same city, below 5&apos;4&quot;, 20+ LPA&quot;) makes you seem rigid before anyone has even spoken to you. List your 2–3 absolute dealbreakers and stay open on the rest.
            </p>
          </li>
        </ol>

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
