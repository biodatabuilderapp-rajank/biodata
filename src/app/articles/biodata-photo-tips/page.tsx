import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";

export const metadata = {
  title: "Biodata Photo Tips for Marriage | How to Choose the Right Photo",
  description: "Learn how to choose and upload the best profile photo for your marriage biodata. Tips on attire, background, cropping, and making a great first impression.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-photo-tips" }
};

export default function Article() {
  return (
    <ArticleWrapper publishedDate="2024-03-24">

      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">Biodata Photo Tips: How to Pick the Right Picture</h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          Your photo is the first thing a prospective family notices on a <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata</strong>. A good photo can spark interest; a poor one can end the conversation before it starts. Here&apos;s how to make sure your biodata photo gives the best possible impression.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">1. Use a Recent, Clear Photo</h2>
        <p>
          The photo must accurately represent how you look <em>today</em> — not five years ago. Avoid heavily filtered or edited photos. Families appreciate authenticity. A clear, well-lit, sharp photo always outperforms a heavily edited one.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">2. Dress Appropriately</h2>
        <p>
          Wear something you would wear to a formal family function or a gurudwara/temple/church/masjid visit. Traditional attire (saree, salwar kameez, sherwanis) photograph particularly well and signal cultural alignment. Avoid very casual clothing (gym wear, t-shirts) for your primary photo.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">3. Choose a Clean Background</h2>
        <p>
          A plain white, beige, or soft-colored wall is ideal. Avoid busy backgrounds (crowded markets, parties), as these are distracting and unprofessional. If needed, shoot near a window for natural, flattering light.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">4. Frame It Correctly — Head and Shoulders</h2>
        <p>
          The ideal biodata photo is a head-and-shoulders (passport-style) shot. Your face should take up roughly 70–80% of the frame. Our built-in cropping tool makes this easy — simply drag to center your face and adjust the zoom before saving.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">5. Smile Naturally</h2>
        <p>
          A genuine, relaxed smile is more inviting than a stiff, formal expression. Think of it like a professional LinkedIn photo: approachable but polished. Have a friend or family member take the photo — selfies often have lens distortion that makes faces look wider.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Circular vs. Square Frame?</h2>
        <p>
          BiodataBuilder lets you choose between a <strong className="font-semibold text-zinc-900 dark:text-white">circular</strong> or <strong className="font-semibold text-zinc-900 dark:text-white">square (rounded)</strong> photo frame on your biodata. Circular frames look elegant on traditional and floral templates. Square frames tend to suit modern, minimal templates better. Try both — the preview updates instantly.
        </p>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Ready to upload your photo?</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8 text-lg">Our built-in photo cropper makes it easy. Create your biodata and see exactly how your photo looks on every template.</p>
          <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">Create Biodata Free</Link>
        </div>
      </div>
    </ArticleWrapper>
  );
}
