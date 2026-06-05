import type { Metadata } from "next";
import CreatePageClient from "./_CreatePage";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Marriage Biodata Maker — Create & Download PDF Instantly",
  description:
    "Create a beautiful Indian marriage biodata online in minutes. Choose from stunning templates, fill in your details, and download as PDF — completely free, no sign-up required.",
  alternates: { canonical: "https://biodatabuilder.in/create" },
  openGraph: {
    url: "https://biodatabuilder.in/create",
    title: "Free Marriage Biodata Maker — Create & Download PDF",
    description:
      "Build a beautiful Indian marriage biodata online in minutes. Free templates, instant PDF download, no registration needed.",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the easiest way to make a marriage biodata online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The easiest way is to use BiodataBuilder. Pick a template, fill in your personal, family, and career details, upload a photo, and download your finished PDF in minutes — all in your browser, no app or registration required.",
      },
    },
    {
      "@type": "Question",
      name: "What details should be included in a marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A complete marriage biodata should include: full name, date of birth, height, religion/community, education, career (job title, company, income), family background (parents' names and occupations, siblings), hobbies, an About Me section, partner expectations, and contact details. For Hindu families, Rashi, Nakshatra, Gotra, and Manglik status are also commonly included.",
      },
    },
    {
      "@type": "Question",
      name: "Is it free to create a marriage biodata on BiodataBuilder?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — 100% free. There are no hidden fees, no watermarks, and no subscription required. You can create, customize, and download your marriage biodata PDF completely free.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to register or sign up to create a biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No registration or sign-up is required. Simply open BiodataBuilder, fill in your details, and download your PDF instantly. Your data stays entirely on your device.",
      },
    },
    {
      "@type": "Question",
      name: "Is my personal information safe and private?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Everything you enter in BiodataBuilder is stored locally in your browser and never uploaded to any server. Your biodata details are completely private and never shared with third parties.",
      },
    },
    {
      "@type": "Question",
      name: "Can I create a marriage biodata in Hindi, Marathi, Tamil, or other regional languages?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. BiodataBuilder supports biodata creation in multiple Indian languages and regional formats. You can also explore our regional guides: Vivah Biodata in Hindi, Lagna Biodata in Marathi, Lagna Biodata in Gujarati, Thirumanam Biodata in Tamil, and Vivah Biodata in Telugu.",
      },
    },
    {
      "@type": "Question",
      name: "What types of marriage biodata templates are available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "BiodataBuilder offers a range of templates including classic traditional designs (with floral borders and religious headers), modern minimal layouts, and community-specific formats for Hindu, Muslim, Christian, Jain, and Sikh families.",
      },
    },
    {
      "@type": "Question",
      name: "How do I create a biodata for marriage for a girl or a boy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process is the same for both. Select your template, fill in personal details (adjusting sections like hobbies and expectations to reflect your personality), add a photo, and download. For specific guides, see our article on Shaadi Biodata Format for Girls or Marriage Biodata for Boys.",
      },
    },
    {
      "@type": "Question",
      name: "Can I download my marriage biodata as a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Once you have filled in your details and chosen a template, you can instantly download a high-quality PDF — ready to print, email, or share on WhatsApp with family and matchmakers.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a marriage biodata and a resume?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marriage biodata is specifically for matrimonial introductions — it includes personal details, family background, religious/astrological information, hobbies, and partner expectations. A resume is for professional job applications and focuses on work experience, skills, and achievements. The two serve completely different purposes.",
      },
    },
    {
      "@type": "Question",
      name: "How can I create a biodata suitable for both traditional and modern families?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Choose a template that blends traditional structure with a clean modern layout. Include all traditional sections (Gotra, Manglik status, family details) while keeping your About Me and Expectations sections personal and genuine. BiodataBuilder's templates are designed to appeal to both traditional and modern sensibilities.",
      },
    },
    {
      "@type": "Question",
      name: "What should I include in the 'About Me' section of a marriage biodata?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The About Me section should be 3–5 sentences covering your personality, values, and what you bring to a relationship. Mention your interests, your family orientation, and what you are looking for in a life partner. Keep it genuine, warm, and specific — avoid generic phrases. See our guide on How to Write a Biodata About Me Section for examples.",
      },
    },
  ],
};

const faqs = [
  {
    q: "What is the easiest way to make a marriage biodata online?",
    a: "Use BiodataBuilder — pick a template, fill in your details, and download your finished PDF in minutes. Everything runs in your browser. No app, no registration, no design skills needed.",
  },
  {
    q: "What details should I include in a marriage biodata?",
    a: "Full name, DOB, height, religion/community, education, career (job title, company, income), family background (parents, siblings), hobbies, About Me, partner expectations, and contact details. Hindu families also typically include Rashi, Nakshatra, Gotra, and Manglik status.",
  },
  {
    q: "Is it completely free? Any hidden fees or watermarks?",
    a: "100% free. No hidden fees, no watermarks, no subscription. Create, customize, and download your marriage biodata PDF at no cost.",
  },
  {
    q: "Do I need to sign up or register?",
    a: "No. Just open BiodataBuilder, fill in your details, and download instantly. Your data stays entirely on your own device — nothing is stored on our servers.",
  },
  {
    q: "Is my personal information safe?",
    a: "Yes. Everything you enter stays in your browser's local storage and is never uploaded to any server. Your biodata data is completely private and never shared.",
  },
  {
    q: "Can I create a biodata in Hindi, Marathi, Tamil, or other regional languages?",
    a: "Yes. BiodataBuilder supports regional Indian formats. You can also explore our dedicated guides for Hindi, Marathi, Gujarati, Tamil, and Telugu biodata.",
  },
  {
    q: "What types of marriage biodata templates are available?",
    a: "Traditional ornate designs, modern minimal layouts, and community-specific formats for Hindu, Muslim, Christian, Jain, and Sikh families — with the right fields for each community built in.",
  },
  {
    q: "Can I download my biodata as a PDF?",
    a: "Yes. Once done, download a high-quality PDF instantly — ready to print, email, or share on WhatsApp with family and matchmakers.",
  },
  {
    q: "What is the difference between a marriage biodata and a resume?",
    a: "A marriage biodata is for matrimonial introductions — family background, personal details, religious/astrological information. A resume is for job applications. They serve completely different purposes.",
  },
  {
    q: "What should I write in the 'About Me' section?",
    a: "3–5 sentences covering your personality, values, interests, and what you are looking for in a partner. Keep it genuine and specific — avoid generic phrases. See our About Me guide for sample text.",
  },
  {
    q: "Can I create a biodata on my mobile phone?",
    a: "Yes. BiodataBuilder is fully mobile-friendly. Open it in any browser on your phone, fill in your details, and download your PDF — no app installation needed.",
  },
  {
    q: "Is there a template for second marriage or divorce biodata?",
    a: "Yes. Our builder supports all marital statuses. State your status clearly (Divorced/Widowed) and fill in your details as usual. Read our guide on Biodata for Second Marriage for detailed tips.",
  },
];

export default function CreatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CreatePageClient />

      {/* ── Below-the-fold SEO content ── */}
      <div className="bg-white dark:bg-zinc-950">

        {/* How it works */}
        <section className="max-w-5xl mx-auto px-5 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
            How to Create a Marriage Biodata Online — In 4 Simple Steps
          </h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
            No design skills needed. No registration. Your beautiful PDF biodata is ready in under 5 minutes.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Choose a Template", desc: "Pick from traditional, modern, or community-specific designs — Hindu, Muslim, Christian, and more." },
              { step: "2", title: "Fill In Your Details", desc: "Personal info, family background, education, career, Kundali details, hobbies, and partner expectations." },
              { step: "3", title: "Upload Your Photo", desc: "Add a recent photo and preview exactly how it looks in the template before downloading." },
              { step: "4", title: "Download Free PDF", desc: "One click. Instant download. Ready to share on WhatsApp, email, or print at home." },
            ].map((s) => (
              <div key={s.step} className="bg-zinc-50 dark:bg-zinc-900 rounded-2xl p-6 border border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center mb-4 text-lg">
                  {s.step}
                </div>
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What to include */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800 py-20 px-5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
              What to Include in a Marriage Biodata
            </h2>
            <p className="text-center text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
              A complete marriage biodata covers these sections — all available in BiodataBuilder.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700">
              <table className="w-full text-sm text-left">
                <thead className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200">
                  <tr>
                    <th className="px-5 py-3 font-semibold">Section</th>
                    <th className="px-5 py-3 font-semibold">What to Include</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                  {[
                    ["Personal Details", "Full name, DOB, height, blood group, complexion, marital status"],
                    ["Religious / Astrological", "Religion, community/caste, Gotra, Rashi, Nakshatra, Manglik status (for Hindu families)"],
                    ["Education", "Highest degree, college/university name, field of study"],
                    ["Career", "Job title, company/employer, annual income (optional)"],
                    ["Family Background", "Father & mother (name + occupation), siblings, family city"],
                    ["About Me", "3–5 sentence personal statement — personality, values, interests"],
                    ["Partner Expectations", "2–3 sentences on what you are looking for"],
                    ["Contact Details", "WhatsApp number, email — parent or candidate"],
                  ].map(([section, detail]) => (
                    <tr key={section} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                      <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{section}</td>
                      <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">{detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="max-w-5xl mx-auto px-5 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
            Tips for Writing an Effective Marriage Biodata
          </h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 mb-12 max-w-xl mx-auto">
            A well-written biodata consistently gets more genuine responses from families.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Be honest and specific", desc: "State your actual income, height, and status clearly. Families that discover inaccuracies early will not proceed — save everyone time." },
              { title: "Write a genuine About Me", desc: "3–5 lines that feel like you. Mention what you do on weekends, your values, and what kind of partner you're hoping for. Avoid generic phrases like 'simple and humble'." },
              { title: "Use a recent, clear photo", desc: "A smiling, well-lit, front-facing photo dramatically increases genuine responses. Avoid cropped group photos or blurry images." },
              { title: "Keep it to one page", desc: "A tight, well-structured biodata is far more readable than a two-page document. Use tables and clear sections to organise information." },
              { title: "Include Kundali details if relevant", desc: "For Hindu families, including Rashi, Nakshatra, Gotra, and Manglik status upfront avoids delays and shows preparedness." },
              { title: "State expectations kindly", desc: "2–3 sentences on partner preferences is enough. Keep the tone open and positive — hard requirements can feel off-putting." },
            ].map((tip) => (
              <div key={tip.title} className="flex gap-4 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <div className="flex-shrink-0 w-2 h-2 rounded-full bg-indigo-500 mt-2.5" />
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{tip.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Community guides */}
        <section className="bg-zinc-50 dark:bg-zinc-900/50 border-y border-zinc-100 dark:border-zinc-800 py-20 px-5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
              Community & Language-Specific Biodata Guides
            </h2>
            <p className="text-center text-zinc-500 dark:text-zinc-400 mb-10 max-w-xl mx-auto">
              Every community has specific expectations and fields. Read our dedicated guides:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Hindu Marriage Biodata", slug: "best-marriage-biodata-format-for-hindu" },
                { title: "Muslim Rishta Biodata", slug: "marriage-biodata-format-for-muslim" },
                { title: "Christian Marriage Biodata", slug: "marriage-biodata-format-for-christian" },
                { title: "Vivah Biodata in Hindi", slug: "vivah-biodata-format-hindi" },
                { title: "Lagna Biodata in Marathi", slug: "lagna-biodata-format-marathi" },
                { title: "Lagna Biodata in Gujarati", slug: "lagna-biodata-format-gujarati" },
                { title: "Thirumanam Biodata in Tamil", slug: "thirumanam-biodata-format-tamil" },
                { title: "Vivah Biodata in Telugu", slug: "vivah-biodata-format-telugu" },
                { title: "Manglik Biodata Guide", slug: "manglik-biodata-format" },
                { title: "Biodata for Second Marriage", slug: "biodata-for-second-marriage" },
                { title: "Shaadi Biodata for Girl", slug: "shaadi-biodata-format-for-girl" },
                { title: "Marriage Biodata for Boy", slug: "marriage-biodata-for-boy" },
              ].map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/articles/${guide.slug}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-indigo-300 dark:hover:border-indigo-700 hover:bg-indigo-50/30 dark:hover:bg-indigo-950/20 transition-all group text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                >
                  {guide.title}
                  <span className="text-indigo-400 group-hover:translate-x-1 transition-transform ml-2 flex-shrink-0">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-5 py-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mb-3 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-zinc-500 dark:text-zinc-400 mb-12">
            Everything you need to know about creating your marriage biodata online.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
      <SiteFooter />
    </>
  );
}
