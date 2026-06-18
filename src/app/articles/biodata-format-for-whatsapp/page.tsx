import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import { MoveRight, CheckCircle2, AlertCircle } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Share Biodata on WhatsApp | Best Format for Sharing",
  description: "Learn the best way to share your marriage biodata on WhatsApp. PDF vs image vs Word, how to send as document, file size tips, and what to write in the message.",
  alternates: { canonical: "https://biodatabuilder.in/articles/biodata-format-for-whatsapp" },
  openGraph: {
    title: "How to Share Biodata on WhatsApp | Best Format for Sharing",
    description: "Learn the best way to share your marriage biodata on WhatsApp. PDF vs image vs Word, how to send as document, file size tips, and what to write in the message.",
    url: "https://biodatabuilder.in/articles/biodata-format-for-whatsapp",
    images: [{ url: "/examples/whatsapp-biodata-infographic.webp", width: 1200, height: 630, alt: "How to Share Biodata on WhatsApp" }],
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

      <ArticleWrapper publishedDate="2026-06-18">
        <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">
          How to Share Your Biodata on WhatsApp: Tips & Best Practices
        </h1>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
          {/* BLOCK: TLDR */}
          <div className="bg-emerald-50 dark:bg-emerald-950/30 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-900/50 my-8">
            <h2 className="text-xl font-bold text-emerald-900 dark:text-emerald-200 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              TL;DR - The Quick Summary
            </h2>
            <ul className="space-y-3 text-emerald-800 dark:text-emerald-300">
              <li><strong>Always use PDF:</strong> Never send your biodata as an Image (JPG/PNG) or Word document (.docx). WhatsApp heavily compresses images, and Word layouts break on phones.</li>
              <li><strong>Send as Document:</strong> Use the "Document" attachment option in WhatsApp to ensure the file isn't compressed and retains pristine quality.</li>
              <li><strong>Context Matters:</strong> Never just drop a file. Include a brief, polite greeting message stating whose biodata you are sharing.</li>
            </ul>
          </div>

          {/* BLOCK: HERO */}
          <figure className="my-10">
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-lg bg-zinc-50 dark:bg-zinc-900">
              <Image 
                src="/examples/whatsapp-biodata-infographic.webp" 
                alt="How to Share Biodata on WhatsApp: PDF vs Image Comparison" 
                fill 
                className="object-contain"
                priority
              />
            </div>
            <figcaption className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-4 italic">
              Sending your biodata as an image ruins the quality. Always send as a PDF Document.
            </figcaption>
          </figure>

          {/* BLOCK: TOC */}
          <nav className="bg-zinc-50 dark:bg-zinc-900/50 p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 my-10">
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Table of Contents</h2>
            <ul className="space-y-3 text-emerald-600 dark:text-emerald-400 font-medium">
              <li><a href="#introduction" className="hover:underline">1. The Golden Rule of Digital Matchmaking</a></li>
              <li><a href="#shift-to-whatsapp" className="hover:underline">2. Why WhatsApp is the New Matrimonial Hub</a></li>
              <li><a href="#pdf-vs-image" className="hover:underline">3. PDF vs Image vs Word: Which to Send?</a></li>
              <li><a href="#how-to-send" className="hover:underline">4. How to Send as a Document (iOS & Android)</a></li>
              <li><a href="#formatting-tips" className="hover:underline">5. Mobile-First Formatting Tips</a></li>
              <li><a href="#what-to-write" className="hover:underline">6. What to Write in the Message (Scripts)</a></li>
              <li><a href="#file-size-security" className="hover:underline">7. File Size & Security Tips</a></li>
              <li><a href="#responding" className="hover:underline">8. How to Respond to a Biodata</a></li>
              <li><a href="#checklist" className="hover:underline">9. Final Pre-Send Checklist</a></li>
              <li><a href="#faq" className="hover:underline">10. Frequently Asked Questions</a></li>
            </ul>
          </nav>

          {/* BLOCK: INTRO */}
          <section id="introduction" className="scroll-mt-24">
            <p>
              You've spent hours perfecting your <Link href="/articles/biodata-for-marriage" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">marriage biodata</Link>. You have professional photos, carefully worded "About Me" paragraphs, and all the required astrological details. But if you share it incorrectly on WhatsApp, all that effort goes to waste.
            </p>
            <p className="mt-4">
              In the modern arranged marriage process, the first impression isn't made in a family living room; it's made on a smartphone screen. A poorly formatted message, a blurry image, or a file that refuses to open can lead to instant rejection, regardless of how qualified the candidate is.
            </p>
          </section>

          {/* BLOCK: SHIFT_WHATSAPP */}
          <section id="shift-to-whatsapp" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">2. Why WhatsApp is the New Matrimonial Hub</h2>
            <figure className="my-8 float-left mr-6 mb-4 w-1/2 max-w-sm hidden sm:block">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-md">
                <Image src="/examples/WhatsApp-preview.webp" alt="WhatsApp PDF Preview of Biodata" fill className="object-cover" />
              </div>
              <figcaption className="text-xs text-center mt-2 text-zinc-500 dark:text-zinc-400">PDFs render a clean preview card in WhatsApp.</figcaption>
            </figure>
            <p>
              Just a decade ago, families exchanged printed physical copies or relied entirely on matrimonial websites. Today, according to recent <Link href="/articles/marriage-biodata-statistics-india" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">marriage biodata statistics</Link>, over 90% of initial profile exchanges happen via WhatsApp.
            </p>
            <p className="mt-4">
              Why the shift? WhatsApp allows for instant sharing among family members ("forwarding" to aunts, uncles, and the candidate). It bypasses the rigid structure of matrimonial sites, allowing for direct communication. Because it is the primary channel, your document must be optimised for a small, vertical screen. If a family has to pinch, zoom, and squint to read your educational details, you are creating friction.
            </p>
            <p className="mt-4">
              This rule applies to everyone, whether you are creating a <Link href="/articles/marriage-biodata-for-boy" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">biodata for a boy</Link> or a <Link href="/articles/shaadi-biodata-format-for-girl" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">shaadi biodata for a girl</Link>. The medium dictates the message.
            </p>
          </section>
          {/* BLOCK: PDF_VS_IMAGE */}
          <section id="pdf-vs-image" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">3. PDF vs Image vs Word: Which to Send?</h2>
            <p>
              The answer is absolute: <strong className="font-semibold text-zinc-900 dark:text-white">Always send a PDF.</strong> Here is exactly why sending an image or a <Link href="/articles/biodata-format-word-download" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">Word document (.docx)</Link> is a mistake that could cost you a good match.
            </p>

            <figure className="my-8">
              <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-zinc-100 dark:border-zinc-800 bg-white">
                <Image src="/examples/mobile_word_vs_pdf.webp" alt="Comparison showing why PDF is superior to Word when sharing biodata on mobile" fill className="object-contain" />
              </div>
              <figcaption className="text-center text-sm text-zinc-500 mt-3 italic">
                A visual demonstration of how Word formatting breaks on mobile, compared to a flawless PDF.
              </figcaption>
            </figure>

            <div className="mt-6 overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-semibold">
                  <tr>
                    <th className="px-5 py-3">Format</th>
                    <th className="px-5 py-3">The Problem / Advantage</th>
                    <th className="px-5 py-3">Verdict</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  <tr className="bg-emerald-50 dark:bg-emerald-950/20">
                    <td className="px-5 py-4 font-bold text-emerald-800 dark:text-emerald-200">✅ PDF Document</td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">Preserves layout perfectly. Text remains crisp and readable at any zoom level. Prevents accidental editing. Looks highly professional.</td>
                    <td className="px-5 py-4 font-bold text-emerald-600 dark:text-emerald-400">The Gold Standard</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-red-600 dark:text-red-400">❌ Image (JPG/PNG)</td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">WhatsApp heavily compresses images to save bandwidth. The text becomes blurry, pixelated, and unreadable, especially when forwarded multiple times.</td>
                    <td className="px-5 py-4 font-bold text-red-500">Never Use</td>
                  </tr>
                  <tr className="bg-white dark:bg-zinc-900">
                    <td className="px-5 py-4 font-bold text-red-600 dark:text-red-400">❌ Word (.docx)</td>
                    <td className="px-5 py-4 text-zinc-600 dark:text-zinc-400">Layouts, fonts, and tables completely break depending on the recipient's phone model (iPhone vs Android) or installed apps.</td>
                    <td className="px-5 py-4 font-bold text-red-500">Never Use</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* BLOCK: HOW_TO_SEND */}
          <section id="how-to-send" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">4. How to Send as a Document (iOS & Android)</h2>
            <p>
              Even if you have a PDF, <strong className="text-zinc-900 dark:text-white">you must send it as a Document, not as a Media attachment.</strong> Sending it as media causes WhatsApp to treat it like a photo, subjecting it to compression algorithms.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4 text-lg">On Android:</h3>
                <ol className="list-decimal pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li>Open the chat.</li>
                  <li>Tap the <strong>Paperclip (📎)</strong> icon in the message bar.</li>
                  <li>Tap <strong>Document</strong> (Do NOT tap Gallery).</li>
                  <li>Browse to your PDF file and select it.</li>
                  <li>Tap Send.</li>
                </ol>
              </div>
              <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-sm">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-4 text-lg">On iPhone (iOS):</h3>
                <ol className="list-decimal pl-5 space-y-2 text-zinc-700 dark:text-zinc-300">
                  <li>Open the chat.</li>
                  <li>Tap the <strong>Plus (+)</strong> icon next to the message bar.</li>
                  <li>Tap <strong>Document</strong>.</li>
                  <li>Select your PDF from the Files app.</li>
                  <li>Tap Send.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* BLOCK: FORMATTING_TIPS */}
          <section id="formatting-tips" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">5. Mobile-First Formatting Tips</h2>
            <p>
              When comparing a <Link href="/articles/modern-vs-traditional-biodata" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">modern vs traditional biodata</Link>, modern templates win because they are designed for vertical smartphone screens. Follow these rules for mobile readability:
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li><strong>One Page Only:</strong> Attention spans are short. Keep your biodata to a single page. Multi-page documents require scrolling and often lose the reader's interest.</li>
              <li><strong>Clear Hierarchy:</strong> Use bold headings for sections like 'Education', 'Family Background', and 'Astrological Details'.</li>
              <li><strong>Larger Fonts:</strong> A 10pt font might look fine on a laptop, but it's unreadable on a 6-inch phone screen. Use 12pt or 14pt for body text.</li>
              <li><strong>White Space:</strong> Don't cram text together. Leave breathing room between paragraphs.</li>
            </ul>
          </section>

          {/* BLOCK: WHAT_TO_WRITE */}
          <section id="what-to-write" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">6. What to Write in the Message (Scripts)</h2>
            <p>
              Never just drop the PDF file into a chat without a message. It appears rude, impersonal, and transactional. You should always include a polite, culturally appropriate cover message. Remember, a marriage biodata is distinctly different from a <Link href="/articles/biodata-vs-resume-difference" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">job resume</Link>; warmth and respect are required.
            </p>
            
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Script 1: Sending to an Uncle/Aunty (First Contact)</h3>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 text-zinc-700 dark:text-zinc-300 shadow-sm font-medium italic">
              "Namaste Aunty/Uncle, <br/><br/>
              Hope this message finds you well. As discussed over the phone, I am sharing the biodata and recent photographs for my daughter, Priya. <br/><br/>
              Please take your time to review it. Do let us know if you need any further information or Kundali details. We look forward to hearing from you. <br/><br/>
              Warm regards,<br/>
              Rajesh Sharma"
            </div>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Script 2: Sending directly to the Candidate</h3>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5 text-zinc-700 dark:text-zinc-300 shadow-sm font-medium italic">
              "Hi Rohan, <br/><br/>
              It was nice connecting with you earlier today. As promised, I have attached my biodata for your reference. <br/><br/>
              Looking forward to learning more about you. Let me know when you have some time for a quick call this weekend. <br/><br/>
              Best,<br/>
              Anjali"
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              <em>Note:</em> Make sure your biodata includes a well-written personal section. Read our guide on <Link href="/articles/how-to-write-biodata-about-me" className="text-emerald-600 dark:text-emerald-400 hover:underline">how to write an 'About Me' for marriage</Link> if you need help.
            </p>
          </section>
          {/* BLOCK: PRIVACY_TIPS */}
          <section id="file-size-security" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">7. File Size & Security Tips</h2>
            <p>
              When sharing your life's details online, security is paramount. WhatsApp is end-to-end encrypted, making it safe for 1-on-1 sharing, but you must still exercise caution.
            </p>
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Managing File Size</h3>
            <p>
              Keep your biodata PDF under <strong className="text-zinc-900 dark:text-white">2 MB</strong>. Large files (5MB+) take a long time to download on slow mobile networks and consume the recipient's phone storage. If you use a heavy, image-filled <Link href="/articles/biodata-for-second-marriage" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">second marriage biodata</Link> or a multi-page <Link href="/articles/simple-biodata-format-for-job-pdf" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">job-style CV</Link>, it will be too large. BiodataBuilder automatically optimizes your PDF to a highly efficient 200–500 KB without losing image quality.
            </p>

            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-8 mb-4">Privacy: What NOT to Share Publicly</h3>
            <p>
              It is common in India for biodatas to be forwarded through extended networks of aunties, uncles, and community WhatsApp groups. Because you cannot control where your PDF ends up, <strong>do not include:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-3 mt-4">
              <li>Your exact home address (just state the city and neighborhood, e.g., "Andheri West, Mumbai").</li>
              <li>Your Aadhaar Card number or PAN number.</li>
              <li>Your exact company name if you have privacy concerns (you can write "MNC in IT Sector" instead of "Google").</li>
            </ul>
          </section>

          {/* BLOCK: RESPONDING */}
          <section id="responding" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">8. How to Respond to a Biodata</h2>
            <p>
              If you are on the receiving end of a biodata via WhatsApp, basic etiquette dictates a timely and clear response. Leaving a family "on read" (blue ticks) is considered highly disrespectful.
            </p>
            <p className="mt-4">
              <strong>If you are interested:</strong><br />
              "Thank you for sharing Priya's biodata. We have reviewed it and found the profile very suitable. We would love to share Rohan's details in return. Let us know a good time to speak."
            </p>
            <p className="mt-4">
              <strong>If you are NOT interested:</strong><br />
              "Thank you for sharing the profile. Unfortunately, we are looking for a slightly different <Link href="/articles/best-marriage-biodata-format-for-hindu" className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">astrological match</Link> at this time. We wish Priya all the very best in her search."
            </p>
          </section>

          {/* BLOCK: CTA_MIDDLE */}
          <div className="mt-12 p-8 bg-zinc-900 dark:bg-zinc-800 rounded-3xl border border-zinc-800 text-center text-white">
            <h3 className="text-2xl font-bold mb-3">Create a WhatsApp-Optimized PDF</h3>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              Don't risk your first impression with a blurry image or a broken Word document. Generate a perfectly sized, mobile-friendly PDF in 5 minutes.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-zinc-100 transition shadow-lg hover:-translate-y-1">
              Start Building Now <MoveRight className="w-5 h-5" />
            </Link>
          </div>
          {/* BLOCK: CHECKLIST */}
          <section id="checklist" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">9. Final Pre-Send Checklist</h2>
            <p className="mb-6">
              Before you hit the send button on WhatsApp, run through this quick checklist to ensure a flawless first impression:
            </p>
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <ul className="space-y-4">
                {[
                  "Is the file format specifically .pdf (and not .docx, .jpg, or .png)?",
                  "Is the file size under 2 MB for fast downloading?",
                  "Did you select the 'Document' attachment option in WhatsApp instead of 'Gallery'?",
                  "Does the file name look professional (e.g., 'Rohan-Sharma-Biodata.pdf' instead of 'Untitled_Document_v4.pdf')?",
                  "Did you include a respectful cover message introducing the biodata?",
                  "Is the recipient a trusted contact (and not a public group)?",
                  "Are all photos embedded cleanly inside the PDF?",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-700 dark:text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-xl flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-500 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Crucial Reminder:</strong> Always open the PDF on your own phone first before sending it to anyone else to verify the text size is readable on a mobile screen.
                </p>
              </div>
            </div>
          </section>

          {/* BLOCK: FAQ */}
          <section id="faq" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">10. Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Should I send my biodata as a PDF or image on WhatsApp?", a: "Always send as a PDF. WhatsApp compresses images heavily, making text blurry and unreadable. When you send a PDF as a 'Document', WhatsApp does not compress it and it arrives in perfect quality." },
                { q: "How do I send a PDF as a document on WhatsApp?", a: "Open the conversation → tap the paperclip/attachment icon → select 'Document' (NOT Gallery or Photo) → choose your PDF file → send. The recipient will see a document preview card." },
                { q: "What size should a WhatsApp biodata PDF be?", a: "Ideally under 2 MB. BiodataBuilder generates PDFs of typically 200–500 KB, which is perfect. Larger files take time to download on mobile connections." },
                { q: "What should I write when sending a biodata on WhatsApp?", a: "Do not just drop the file. Write a brief, respectful message: 'Namaste Aunty/Uncle, Hope this finds you well. As discussed, please find [Name]'s biodata attached. Do let us know if you need any further information. With regards, [Your Name]'" },
                { q: "Is it safe to share biodata on WhatsApp?", a: "Only share with trusted contacts directly — not in large public groups. Do not include your Aadhaar number, full home address, or PAN." },
              ].map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* BLOCK: CONCLUSION */}
          <section id="conclusion" className="scroll-mt-24 mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-6">Conclusion</h2>
            <p>
              In the fast-paced world of modern matchmaking, friction is your enemy. If a family has to struggle to open a broken Word document or squint to read a blurry photo, they will likely move on to the next profile.
            </p>
            <p className="mt-4">
              By exporting your biodata as a clean, mobile-optimized PDF and sending it as a Document with a polite WhatsApp message, you demonstrate professionalism, respect, and technological competence. It is a small detail that drastically improves your chances of a positive response.
            </p>
          </section>

          {/* BLOCK: CTA_BOTTOM */}
          <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-3xl border border-emerald-100 dark:border-emerald-900/50 text-center">
            <h3 className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 mb-2">Generate a WhatsApp-Ready PDF</h3>
            <p className="text-base text-emerald-600 dark:text-emerald-400 mb-4 font-medium">Under 500KB • Mobile-Friendly • Crystal Clear Text</p>
            <p className="text-emerald-700 dark:text-emerald-300 mb-8 max-w-2xl mx-auto">
              Our biodata PDFs are perfectly optimized for WhatsApp sharing. Create yours for free in under 5 minutes without any signup.
            </p>
            <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
              Create Biodata PDF Free <MoveRight className="w-5 h-5" />
            </Link>
          </div>

          {/* BLOCK: WHAT_TO_READ_NEXT */}
          <div className="mt-16 border-t border-zinc-200 dark:border-zinc-800 pt-10">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">What to Read Next</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link href="/articles/biodata-tips" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 transition">15 Expert Tips for a Winning Marriage Biodata</div>
              </Link>
              <Link href="/articles/modern-vs-traditional-biodata" className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 transition group">
                <div className="text-sm text-zinc-500 mb-1">Guide</div>
                <div className="font-bold text-zinc-900 dark:text-white group-hover:text-emerald-600 transition">Modern vs Traditional Biodatas Explained</div>
              </Link>
            </div>
          </div>
        </div>

        <ArticleCTA />
      </ArticleWrapper>
    </>
  );
}
