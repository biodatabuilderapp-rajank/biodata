import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";

export const metadata = {
  title: "How to Share Biodata on WhatsApp | Best Format for Sharing",
  description: "Learn the best way to share your marriage biodata on WhatsApp. PDF vs image, file size, privacy tips, and what to include in the message.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-format-for-whatsapp" },
};

export default function Article() {
  return (
    <ArticleWrapper
      publishedDate="2024-04-12"
      related={[
        { title: "10 Common Biodata Mistakes to Avoid", slug: "biodata-mistakes-to-avoid" },
        { title: "Biodata Photo Tips: Choosing the Right Picture", slug: "biodata-photo-tips" },
        { title: "Modern vs Traditional Biodata Format", slug: "modern-vs-traditional-biodata" },
      ]}
    >
      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
        How to Share Your Biodata on WhatsApp: Tips & Best Practices
      </h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          In India today, <strong className="font-semibold text-zinc-900 dark:text-white">WhatsApp is the primary channel</strong> through which marriage biodata is shared — between families, through relatives, and directly from matrimonial sites. Getting this step right matters more than most people realise. A poorly shared biodata can get lost, compressed into unreadability, or skipped entirely.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">PDF vs Image: Which to Send?</h2>
        <p>Always send your biodata as a <strong className="font-semibold text-zinc-900 dark:text-white">PDF file</strong>, not an image (JPG or PNG).</p>
        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
          <table className="w-full text-sm text-left">
            <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
              <tr>
                <th className="px-5 py-3">Format</th>
                <th className="px-5 py-3">Pros</th>
                <th className="px-5 py-3">Cons</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
              <tr className="bg-white dark:bg-zinc-900">
                <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">PDF</td>
                <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Preserves layout, printable, professional, searchable text</td>
                <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Recipient needs a PDF viewer (all phones have one)</td>
              </tr>
              <tr className="bg-white dark:bg-zinc-900">
                <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">PNG / JPG</td>
                <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Opens instantly inline</td>
                <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">WhatsApp compresses images heavily — text becomes blurry and unreadable</td>
              </tr>
              <tr className="bg-white dark:bg-zinc-900">
                <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">Word (.docx)</td>
                <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Editable</td>
                <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Fonts and layout shift on different phones — looks broken</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong className="font-semibold text-zinc-900 dark:text-white">Key insight:</strong> WhatsApp compresses images to reduce data usage, which destroys the quality of your biodata photo and text. When you send a PDF as a <em>document</em> (not as a photo), WhatsApp does not compress it — it is delivered exactly as you created it.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">How to Send as a Document (Not a Photo)</h2>
        <ol className="list-decimal pl-6 space-y-3">
          <li>Open the conversation on WhatsApp.</li>
          <li>Tap the paperclip / attachment icon.</li>
          <li>Select <strong className="font-semibold text-zinc-900 dark:text-white">"Document"</strong> — NOT "Gallery" or "Photo."</li>
          <li>Browse to your PDF file and send.</li>
        </ol>
        <p>
          The recipient will see a document preview card (not an inline image), which they can open in their PDF viewer at full quality.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">File Size Tips</h2>
        <p>
          Keep your biodata PDF under <strong className="font-semibold text-zinc-900 dark:text-white">2 MB</strong> ideally. Larger files take time to download on slower connections. If your PDF is larger (due to a high-resolution photo), use a free PDF compressor like Smallpdf or ILovePDF before sending.
        </p>
        <p>
          BiodataBuilder generates well-optimised PDF files — typically 200–500 KB — so you should not need to compress further.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">What to Write in the WhatsApp Message</h2>
        <p>Do not just drop the file without context. A short, respectful note goes a long way:</p>
        <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-2xl p-5 font-mono text-sm text-indigo-900 dark:text-indigo-100 leading-relaxed whitespace-pre-line">
          {`Namaste Aunty/Uncle,

Hope this message finds you well. As discussed, please find [Name]'s biodata attached. Do let us know if you need any further information.

Looking forward to your response.

With regards,
[Your Name / Parent's Name]`}
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Privacy: What Not to Share Publicly</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Avoid sharing your biodata in large public WhatsApp groups unless privacy settings are confirmed.</li>
          <li>Keep the full biodata for direct family-to-family sharing. Consider a shorter "introduction card" for wider distribution.</li>
          <li>Do not include your Aadhaar number, full address, or PAN in the biodata.</li>
        </ul>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Generate a WhatsApp-Ready Biodata PDF</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8">Our biodata PDFs are under 500 KB and look stunning on every phone — perfect for WhatsApp sharing. Free, no sign-up.</p>
          <Link href="/create" className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
            Create Biodata PDF Free
          </Link>
        </div>
      </div>
    </ArticleWrapper>
  );
}
