import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Share Biodata on WhatsApp | Best Format for Sharing",
  description: "Learn the best way to share your marriage biodata on WhatsApp. PDF vs image vs Word, how to send as document, file size tips, and what to write in the message.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-format-for-whatsapp" },
  openGraph: {
    title: "How to Share Biodata on WhatsApp | Best Format for Sharing",
    description: "Learn the best way to share your marriage biodata on WhatsApp. PDF vs image vs Word, how to send as document, file size tips, and what to write in the message.",
    url: "https://biodatabuilder.in/articles/biodata-format-for-whatsapp",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I send my biodata as a PDF or image on WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Always send as a PDF — not a JPG or PNG. WhatsApp compresses images heavily, making text blurry and unreadable. When you send a PDF as a 'Document' (not as a photo), WhatsApp does not compress it and it arrives in perfect quality.",
      },
    },
    {
      "@type": "Question",
      name: "How do I send a PDF as a document on WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Open the conversation → tap the paperclip/attachment icon → select 'Document' (NOT Gallery or Photo) → choose your PDF file → send. The recipient will see a document preview card they can open at full quality.",
      },
    },
    {
      "@type": "Question",
      name: "What size should a WhatsApp biodata PDF be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ideally under 2 MB. BiodataBuilder generates PDFs of typically 200–500 KB, which is perfect. Larger files take time to download on mobile connections.",
      },
    },
    {
      "@type": "Question",
      name: "What should I write when sending a biodata on WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Do not just drop the file. Write a brief, respectful message: 'Namaste Aunty/Uncle, Hope this finds you well. As discussed, please find [Name]'s biodata attached. Do let us know if you need any further information. With regards, [Your Name]'",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe to share biodata on WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only share with trusted contacts directly — not in large public groups. Do not include your Aadhaar number, full home address, or PAN. Consider a shorter introduction card for wider sharing.",
      },
    },
  ],
};

export default function Article() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <ArticleWrapper publishedDate="2024-04-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          How to Share Your Biodata on WhatsApp: Tips & Best Practices
        </h1>

        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image
            src="/examples/WhatsApp-preview.jpg"
            alt="Marriage biodata PDF shared on WhatsApp — how it looks on mobile"
            width={1200}
            height={600}
            className="w-full h-auto"
            priority
          />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">
            A BiodataBuilder PDF sent as a Document on WhatsApp — crisp and full quality
          </p>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          <p>
            In India today, <strong className="font-semibold text-zinc-900 dark:text-white">WhatsApp is the primary channel</strong> through which marriage biodata is shared — between families, through relatives, and directly from matrimonial sites. Getting this step right matters more than most people realise. A poorly shared biodata can get lost, compressed into unreadability, or skipped entirely.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">PDF vs Image vs Word: Which to Send?</h2>
          <p>The answer is clear: always send as a <strong className="font-semibold text-zinc-900 dark:text-white">PDF file</strong>. Here's why:</p>
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
                <tr className="bg-emerald-50 dark:bg-emerald-950/20">
                  <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">✅ PDF</td>
                  <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Preserves layout perfectly, printable, professional, not compressed by WhatsApp</td>
                  <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Recipient needs a PDF viewer (all phones have one built-in)</td>
                </tr>
                <tr className="bg-white dark:bg-zinc-900">
                  <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">⚠️ PNG / JPG</td>
                  <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Opens instantly inline in chat</td>
                  <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">WhatsApp compresses images heavily — text becomes blurry and unreadable</td>
                </tr>
                <tr className="bg-white dark:bg-zinc-900">
                  <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">❌ Word (.docx)</td>
                  <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Editable</td>
                  <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">Fonts and layout completely break on different phones — looks unprofessional</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className="font-semibold text-zinc-900 dark:text-white">Key insight:</strong> When you send a PDF as a <em>document</em> (not as a photo), WhatsApp does not compress it — it is delivered exactly as you created it.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">How to Send as a Document (Not a Photo)</h2>
          <ol className="list-decimal pl-6 space-y-3">
            <li>Open the conversation on WhatsApp.</li>
            <li>Tap the <strong className="font-semibold text-zinc-900 dark:text-white">paperclip / attachment icon</strong>.</li>
            <li>Select <strong className="font-semibold text-zinc-900 dark:text-white">"Document"</strong> — NOT "Gallery" or "Photo."</li>
            <li>Browse to your PDF file and send.</li>
          </ol>
          <p>
            The recipient will see a document preview card (not an inline image), which they can open in their PDF viewer at full quality.
          </p>

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">File Size Tips</h2>
          <p>
            Keep your biodata PDF under <strong className="font-semibold text-zinc-900 dark:text-white">2 MB</strong> ideally. BiodataBuilder generates well-optimised PDF files — typically 200–500 KB — so you should not need to compress further. If your PDF is larger (due to a high-resolution photo), use a free PDF compressor like Smallpdf or ILovePDF before sending.
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

          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Should I send my biodata as a PDF or image on WhatsApp?", a: "Always PDF. WhatsApp compresses images heavily, making text blurry and unreadable. When sent as a Document, PDFs are not compressed and arrive in perfect quality." },
              { q: "How do I send a PDF as a document on WhatsApp?", a: "Tap the attachment icon → select 'Document' (not Gallery or Photo) → choose your PDF → send. The recipient gets a document preview card they can open at full quality." },
              { q: "What size should a WhatsApp biodata PDF be?", a: "Ideally under 2 MB. BiodataBuilder generates PDFs of 200–500 KB — perfect for WhatsApp without any compression needed." },
              { q: "What should I write when sending a biodata on WhatsApp?", a: "Write a brief, respectful message with your name, reference to any previous conversation, and ask them to reach out if they need more information. Don't just drop the file without context." },
              { q: "Is it safe to share biodata on WhatsApp?", a: "Only share with trusted contacts directly, not in public groups. Never include Aadhaar, full address, or PAN in your biodata." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center">
            <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Generate a WhatsApp-Ready Biodata PDF</h3>
            <p className="text-indigo-700 dark:text-indigo-300 mb-8">Our biodata PDFs are under 500 KB and look stunning on every phone — perfect for WhatsApp sharing. Free, no sign-up.</p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata PDF Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <ArticleLanguageNav />
        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
