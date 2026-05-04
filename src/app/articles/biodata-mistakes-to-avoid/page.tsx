import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";

export const metadata = {
  title: "Biodata Mistakes to Avoid | Common Errors in Marriage Biodata",
  description: "Making a marriage biodata? Avoid these 10 common mistakes that can ruin your first impression. Expert tips with real examples.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-mistakes-to-avoid" },
  openGraph: {
    title: "Biodata Mistakes to Avoid | Common Errors in Marriage Biodata",
    description: "Making a marriage biodata? Avoid these 10 common mistakes that can ruin your first impression. Expert tips with real examples.",
    url: "https://biodatabuilder.in/articles/biodata-mistakes-to-avoid",
  },
};

export default function Article() {
  return (
    <ArticleWrapper
      publishedDate="2024-04-12"
      related={[
        { title: "Biodata Photo Tips: Choosing the Right Picture", slug: "biodata-photo-tips" },
        { title: "What to Write in Biodata Hobbies & Interests", slug: "what-to-write-in-biodata-hobbies" },
        { title: "How to Write Your Biodata About Me Section", slug: "how-to-write-biodata-about-me" },
      ]}
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
        10 Common Biodata Mistakes to Avoid
      </h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          A <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata</strong> is often the first impression your family makes on a prospective match. Small mistakes — a blurry photo, a vague "about me," or a poorly formatted layout — can mean your profile gets skipped entirely. Here are the 10 most common mistakes people make and exactly how to fix them.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">1. Using an Old or Blurry Photo</h2>
        <p>
          Your photo from a cousin&apos;s wedding three years ago — even if it was a great day — is not biodata-appropriate. Use a recent, passport-style photo with good lighting and a clean background. A blurry or poorly cropped photo signals carelessness to the other family.
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-5">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">❌ Mistake</p>
          <p className="text-amber-900 dark:text-amber-200 text-sm">Using a group photo and highlighting yourself with an arrow.</p>
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mt-3 mb-1">✅ Fix</p>
          <p className="text-amber-900 dark:text-amber-200 text-sm">A solo, head-and-shoulders photo taken in natural light against a plain background.</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">2. Leaving the "About Me" Section Empty or Generic</h2>
        <p>
          Phrases like "I am a fun-loving person" or "I enjoy life to the fullest" tell the reader absolutely nothing. This section is your only opportunity to express your personality beyond facts. Use it.
        </p>
        <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-2xl p-5">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mb-1">❌ Mistake</p>
          <p className="text-amber-900 dark:text-amber-200 text-sm">"I am a simple, down-to-earth person looking for a life partner."</p>
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-300 mt-3 mb-1">✅ Fix</p>
          <p className="text-amber-900 dark:text-amber-200 text-sm">"A software engineer by profession, I am rooted in family values while maintaining an independent outlook. I enjoy weekend treks, Carnatic music, and cooking for people I love. I am looking for a partner who values both personal ambition and family togetherness."</p>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">3. Omitting Key Astrological Details</h2>
        <p>
          For many Indian families — especially Hindu, Jain, and some Christian communities — Rashi, Nakshatra, and Manglik status are non-negotiable filters. Omitting these forces the other family to follow up before they even consider your profile, which reduces your response rate significantly.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">4. Being Vague About Income</h2>
        <p>
          Listing your income as "Good" or "As per industry standard" is unhelpful. State a range: "₹12–15 LPA" or "₹80,000/month." Families need this to assess compatibility of lifestyles. Being transparent here signals confidence.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">5. Not Mentioning Siblings&apos; Marital Status</h2>
        <p>
          In Indian matchmaking, many families have a traditional preference for matching families where older siblings are already married. Mentioning "Elder brother — married" removes ambiguity and potential objections proactively.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">6. Using a Word Document That Breaks on Other Devices</h2>
        <p>
          A Word file shared on WhatsApp often opens with shifted margins, missing fonts, and broken layouts on the recipient&apos;s phone. Always share as a <strong className="font-semibold text-zinc-900 dark:text-white">PDF</strong>. PDF preserves every aspect of your layout exactly as you designed it, on every device.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">7. Writing Expectations That Are Too Restrictive</h2>
        <p>
          "Must be from the same city, same sub-caste, earning 20+ LPA, below 5&apos;4&quot;, fair complexion" — over-filtering on paper makes you seem difficult before anyone has even spoken to you. List your 2–3 most important expectations and stay open on the rest.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">8. Forgetting to Include a Contact Number</h2>
        <p>
          Sounds obvious, but many people forget to include a parent&apos;s contact number or put only an email. Most families in India prefer a phone call first. Include both a mobile number and an email for maximum reachability.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">9. Sending the Same Biodata for Years Without Updating</h2>
        <p>
          If your designation, salary, or residence has changed — update your biodata. Sending a biodata that says you are a "Junior Engineer" when you are now a "Senior Manager" leaves money on the table. Refresh it every 6 months.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">10. Choosing a Cluttered Template</h2>
        <p>
          A biodata with 6 different fonts, bright yellow headers, and 3 background patterns is harder to read and looks unprofessional. Choose a clean, structured template. Readability is more impressive than decorativeness.
        </p>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Create a Mistake-Free Biodata</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8">Our guided form and clean templates make it impossible to send a badly formatted biodata. Free, no sign-up needed.</p>
          <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
            Create Your Biodata Free
          </Link>
        </div>
      </div>
    </ArticleWrapper>
  );
}
