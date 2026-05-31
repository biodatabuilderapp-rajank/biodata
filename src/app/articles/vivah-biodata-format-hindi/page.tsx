import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vivah Biodata Format in Hindi | शादी बायोडाटा PDF",
  description:
    "सुंदर हिंदी शादी बायोडाटा ऑनलाइन मुफ्त में बनाएं। आधुनिक टेम्पलेट चुनें और तुरंत PDF डाउनलोड करें।",
  alternates: { canonical: "https://biodatabuilder.in/articles/vivah-biodata-format-hindi" },
  openGraph: {
    title: "Vivah Biodata Format in Hindi | शादी बायोडाटा PDF",
    description:
      "सुंदर हिंदी शादी बायोडाटा ऑनलाइन मुफ्त में बनाएं। आधुनिक टेम्पलेट चुनें और तुरंत PDF डाउनलोड करें।",
    url: "https://biodatabuilder.in/articles/vivah-biodata-format-hindi",
    images: [{ url: "/examples/Hero-composite.png", width: 1200, height: 630, alt: "Hindi Vivah Biodata Format Templates" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "शादी बायोडाटा क्या होता है?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "शादी बायोडाटा (Vivah Biodata) एक एक-पेज का दस्तावेज़ होता है जो अरेंज मैरिज में लड़के या लड़की की जानकारी दूसरे परिवार को देने के लिए उपयोग किया जाता है। इसमें व्यक्तिगत, पारिवारिक, शैक्षणिक और संपर्क की जानकारी शामिल होती है।",
      },
    },
    {
      "@type": "Question",
      name: "क्या शादी बायोडाटा जरूरी है?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "हाँ, भारत में अरेंज मैरिज के लिए बायोडाटा सबसे पहला और सबसे जरूरी कदम होता है। परिवार मिलने से पहले बायोडाटा के आधार पर ही पहला मूल्यांकन करते हैं।",
      },
    },
    {
      "@type": "Question",
      name: "क्या मैं मुफ्त में शादी बायोडाटा बना सकता हूँ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "हाँ! BiodataBuilder.in पर आप बिल्कुल मुफ्त में सुंदर शादी बायोडाटा बना सकते हैं। कोई रजिस्ट्रेशन नहीं, कोई वॉटरमार्क नहीं, तुरंत PDF डाउनलोड करें।",
      },
    },
    {
      "@type": "Question",
      name: "बायोडाटा में कौन सी फोटो लगानी चाहिए?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "बायोडाटा में हमेशा एक ताज़ी, साफ पासपोर्ट-साइज़ फोटो लगाएं जिसमें चेहरा स्पष्ट दिखे। धुंधली WhatsApp प्रोफाइल फोटो, ग्रुप फोटो या ज़्यादा एडिट की गई फोटो से बचें।",
      },
    },
    {
      "@type": "Question",
      name: "बायोडाटा कितने पेज का होना चाहिए?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "बायोडाटा हमेशा 1 पेज का होना चाहिए, 2 पेज से ज़्यादा कभी नहीं। परिवार बहुत सारे बायोडाटा देखते हैं — एक साफ, संक्षिप्त पेज हमेशा बेहतर प्रभाव डालता है।",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
    { "@type": "ListItem", position: 3, name: "Vivah Biodata Format Hindi", item: "https://biodatabuilder.in/articles/vivah-biodata-format-hindi" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Vivah Biodata Format in Hindi | शादी बायोडाटा PDF",
  description: "सुंदर हिंदी शादी बायोडाटा ऑनलाइन मुफ्त में बनाएं। आधुनिक टेम्पलेट चुनें और तुरंत PDF डाउनलोड करें।",
  image: "https://biodatabuilder.in/examples/Hero-composite.png",
  datePublished: "2026-05-04",
  dateModified: "2026-05-27",
  author: { "@type": "Organization", name: "BiodataBuilder" },
  publisher: { "@type": "Organization", name: "BiodataBuilder", logo: { "@type": "ImageObject", url: "https://biodatabuilder.in/favicon.png" } },
  inLanguage: "hi",
};

export default function VivahBiodataFormatHindiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ArticleWrapper publishedDate="2026-05-04">

        {/* ── H1 ── */}
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Vivah Biodata Format in Hindi – शादी बायोडाटा फॉर्मेट PDF
        </h1>

        {/* ── HERO IMAGE ── */}
        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image
            src="/examples/Hero-composite.png"
            alt="हिंदी विवाह बायोडाटा टेम्पलेट — शादी के लिए सुंदर बायोडाटा फॉर्मेट"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">
            BiodataBuilder पर उपलब्ध शादी बायोडाटा टेम्पलेट के उदाहरण
          </p>
        </div>

        {/* ── INTRO ── */}
        <div className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            <strong className="font-semibold text-zinc-900 dark:text-white">विवाह बायोडाटा</strong> (Vivah Biodata) — यानी <strong className="font-semibold text-zinc-900 dark:text-white">शादी बायोडाटा फॉर्मेट</strong> — भारतीय अरेंज मैरिज का सबसे पहला और सबसे ज़रूरी कदम है। यह एक-पेज का दस्तावेज़ होता है जो आपकी, आपके परिवार की और आपकी ज़िंदगी की जानकारी दूसरे परिवार तक पहुँचाता है।
          </p>
          <p>
            आजकल लोग WhatsApp पर शादी बायोडाटा शेयर करते हैं — इसलिए यह ज़रूरी है कि आपका <strong className="font-semibold text-zinc-900 dark:text-white">biodata format in Hindi</strong> एक सुंदर, साफ PDF में हो जो हर फ़ोन पर सही दिखे। एक अच्छा <strong className="font-semibold text-zinc-900 dark:text-white">marriage biodata in Hindi</strong> न सिर्फ़ जानकारी देता है, बल्कि पहला अच्छा प्रभाव भी डालता है।
          </p>
          <p>
            इस गाइड में हम आपको बताएंगे कि एक प्रभावशाली <strong className="font-semibold text-zinc-900 dark:text-white">हिंदी बायोडाटा PDF</strong> कैसे बनाएं — मुफ्त में, बिना किसी डिज़ाइन स्किल के, सिर्फ 5 मिनट में।
          </p>
        </div>

        {/* ── HERO CTA ── */}
        <div className="my-10 flex justify-center">
          <Link
            href="/create"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all shadow-lg"
          >
            हिंदी बायोडाटा बनाएं <MoveRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">

          {/* ── SECTION 1 ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">विवाह बायोडाटा क्या होता है?</h2>
          <p>
            <strong className="font-semibold text-zinc-900 dark:text-white">शादी बायोडाटा</strong> (Shaadi Biodata) एक संरचित परिचय-पत्र होता है जो अरेंज मैरिज की प्रक्रिया में परिवारों के बीच साझा किया जाता है। इसमें लड़के या लड़की की व्यक्तिगत जानकारी, शैक्षणिक योग्यता, नौकरी, परिवार की जानकारी और संपर्क विवरण होते हैं।
          </p>
          <p>
            पुराने ज़माने में यह जानकारी हाथ से लिखी जाती थी या सादे कागज़ पर टाइप की जाती थी। आज के डिजिटल युग में <strong className="font-semibold text-zinc-900 dark:text-white">vivah biodata format</strong> को एक सुंदर PDF के रूप में WhatsApp, email या matrimonial websites पर शेयर किया जाता है।
          </p>
          <p>
            भारत में उत्तर प्रदेश, मध्य प्रदेश, बिहार, राजस्थान और अन्य हिंदी भाषी राज्यों में परिवार अपनी मातृभाषा में बायोडाटा बनाना पसंद करते हैं — क्योंकि यह घर के बड़े-बुजुर्गों के लिए पढ़ना और समझना आसान होता है।
          </p>

          {/* ── SECTION 2 — TABLE ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">शादी बायोडाटा में क्या लिखें?</h2>
          <p>
            एक अच्छे <strong className="font-semibold text-zinc-900 dark:text-white">विवाह बायोडाटा फॉर्मेट</strong> में ये सभी जानकारियाँ होनी चाहिए। हर जानकारी संक्षिप्त और सटीक होनी चाहिए — ज़्यादा लंबा बायोडाटा न बनाएं:
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-orange-50 dark:bg-orange-950/40 text-orange-900 dark:text-orange-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">जानकारी (Section)</th>
                  <th className="px-5 py-3 font-semibold">उदाहरण (Example)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["पूरा नाम (Full Name)", "राहुल शर्मा"],
                  ["जन्म तिथि और समय (DOB & Time)", "15 मार्च 1997, प्रातः 6:30 बजे"],
                  ["ऊंचाई (Height)", "5′ 10″"],
                  ["रक्त समूह (Blood Group)", "B+"],
                  ["धर्म / जाति (Religion / Caste)", "हिन्दू, ब्राह्मण"],
                  ["राशि / नक्षत्र (Rashi / Nakshatra)", "वृषभ / रोहिणी"],
                  ["मांगलिक स्थिति (Manglik Status)", "अमांगलिक (Non-Manglik)"],
                  ["शिक्षा (Education)", "MBA — IIM अहमदाबाद"],
                  ["नौकरी / व्यवसाय (Occupation)", "सॉफ्टवेयर इंजीनियर, Infosys"],
                  ["वार्षिक आय (Annual Income)", "₹18–20 लाख प्रति वर्ष"],
                  ["शौक (Hobbies)", "यात्रा, पढ़ना, क्रिकेट"],
                  ["पिता का नाम और पेशा", "श्री मोहन शर्मा — सरकारी सेवा"],
                  ["माता का नाम और पेशा", "श्रीमती सुनीता शर्मा — गृहिणी"],
                  ["भाई-बहन (Siblings)", "1 बड़ा भाई (विवाहित)"],
                  ["संपर्क नंबर (Contact)", "+91 98765 43210"],
                ].map(([section, example]) => (
                  <tr key={section} className="bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                    <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{section}</td>
                    <td className="px-5 py-3 text-zinc-500 dark:text-zinc-400">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-base text-zinc-500 dark:text-zinc-400 italic">
            💡 याद रखें: बायोडाटा हमेशा <strong className="not-italic font-semibold text-zinc-700 dark:text-zinc-300">सिर्फ 1 पेज</strong> का होना चाहिए। परिवार बहुत सारे बायोडाटा देखते हैं — एक साफ, पठनीय पेज हमेशा बेहतर प्रभाव डालता है।
          </p>

          {/* ── SECTION 3 — BOY ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">लड़के के लिए शादी बायोडाटा उदाहरण</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md">
              <Image
                src="/examples/Boy-biodata-example.png"
                alt="लड़के के लिए शादी बायोडाटा उदाहरण — marriage biodata format for boy in Hindi"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <p>
                लड़के का <strong className="font-semibold text-zinc-900 dark:text-white">शादी बायोडाटा फॉर्मेट</strong> (marriage biodata format for boy) में आत्मविश्वास और विश्वसनीयता झलकनी चाहिए। नीचे कुछ ज़रूरी बातें हैं:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li><strong>साफ, आकर्षक डिज़ाइन</strong> — माता-पिता के पढ़ने के लिए आसान</li>
                <li><strong>हाल की, साफ फोटो</strong> — पासपोर्ट स्टाइल, सादा बैकग्राउंड</li>
                <li><strong>नौकरी और आय स्पष्ट रूप से लिखें</strong></li>
                <li><strong>परिवार की जानकारी</strong> — स्थिरता का प्रतीक</li>
                <li><strong>ऊपर भगवान का चिह्न</strong> — सांस्कृतिक जुड़ाव दर्शाता है</li>
              </ul>
              <Link href="/create" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
                लड़के का बायोडाटा बनाएं <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── SECTION 4 — GIRL ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">लड़की के लिए विवाह बायोडाटा उदाहरण</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 md:order-2">
              <p>
                लड़की के <strong className="font-semibold text-zinc-900 dark:text-white">विवाह बायोडाटा फॉर्मेट</strong> में गर्म, सुंदर टेम्पलेट सबसे अच्छा प्रभाव डालते हैं। फूलों की डिज़ाइन और पारंपरिक बॉर्डर हिंदू परिवारों में बहुत लोकप्रिय हैं।
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li><strong>पारंपरिक फूलों की बॉर्डर</strong> — हिंदू परिवारों की पसंद</li>
                <li><strong>गोलाकार फोटो फ्रेम</strong> — बहुत आकर्षक लगता है</li>
                <li><strong>शौक और अपेक्षाएं स्पष्ट लिखें</strong></li>
                <li><strong>माता-पिता का संपर्क नंबर</strong> देना बिल्कुल सही है</li>
              </ul>
              <Link href="/create" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
                लड़की का बायोडाटा बनाएं <MoveRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md md:order-1">
              <Image
                src="/examples/Girl-biodata-example.png"
                alt="लड़की के लिए विवाह बायोडाटा उदाहरण — marriage biodata format for girl in Hindi"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* ── SECTION 5 — HOW TO CREATE ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">ऑनलाइन शादी बायोडाटा कैसे बनाएं?</h2>
          <p>
            आपको किसी डिज़ाइनर की ज़रूरत नहीं। <Link href="/create" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">BiodataBuilder</Link> पर आप सिर्फ 5 मिनट में एक professional <strong className="font-semibold text-zinc-900 dark:text-white">shaadi biodata hindi</strong> बना सकते हैं:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-8">
            {[
              { step: "01", title: "टेम्पलेट चुनें", desc: "पारंपरिक, आधुनिक या फूलों की डिज़ाइन में से अपना पसंदीदा चुनें।" },
              { step: "02", title: "जानकारी भरें", desc: "व्यक्तिगत, पारिवारिक और संपर्क जानकारी आसानी से भरें — हिंदी में।" },
              { step: "03", title: "फोटो अपलोड करें", desc: "अपनी साफ फोटो अपलोड करें और built-in crop tool से सेट करें।" },
              { step: "04", title: "PDF डाउनलोड करें", desc: "एक बटन दबाएं — तुरंत PDF तैयार! WhatsApp पर शेयर करें।" },
            ].map((s) => (
              <div key={s.step} className="p-5 rounded-2xl bg-orange-50 dark:bg-orange-950/30 border border-orange-100 dark:border-orange-900 text-center">
                <div className="w-9 h-9 rounded-xl bg-orange-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* ── MID-ARTICLE CTA ── */}
          <div className="my-10 p-8 rounded-3xl bg-gradient-to-r from-orange-500 to-pink-500 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">मुफ्त में बायोडाटा बनाएं</h3>
            <p className="text-orange-100 text-sm mb-6">कोई रजिस्ट्रेशन नहीं, कोई वॉटरमार्क नहीं। तुरंत PDF डाउनलोड करें।</p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-orange-600 font-bold text-sm hover:bg-orange-50 transition-all shadow-lg"
            >
              बायोडाटा बनाएं — Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── WHATSAPP IMAGE ── */}
          <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md">
            <Image
              src="/examples/WhatsApp-preview.jpg"
              alt="WhatsApp पर शादी बायोडाटा PDF — marriage biodata shared on WhatsApp"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">
              BiodataBuilder की PDF WhatsApp पर इस तरह दिखती है — बिल्कुल साफ और सुंदर
            </p>
          </div>

          {/* ── SECTION 6 — MISTAKES ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">शादी बायोडाटा बनाते समय होने वाली गलतियाँ</h2>
          <p>
            एक खराब <strong className="font-semibold text-zinc-900 dark:text-white">बायोडाटा फॉर्मेट</strong> पहली छाप को बिगाड़ सकता है। ये गलतियाँ कभी न करें:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>धुंधली या पुरानी फोटो लगाना</strong> — हमेशा हालिया, साफ पासपोर्ट फोटो लगाएं।</li>
            <li><strong>वर्तनी और व्याकरण की गलतियाँ</strong> — शेयर करने से पहले किसी परिवार के सदस्य से प्रूफरीड कराएं।</li>
            <li><strong>बहुत ज़्यादा जानकारी भरना</strong> — बायोडाटा 1 पेज का रखें। जो ज़रूरी नहीं, वो हटाएं।</li>
            <li><strong>Word document शेयर करना</strong> — Word फाइल अलग-अलग फोन पर टूट जाती है। हमेशा PDF या PNG शेयर करें।</li>
            <li><strong>पुराना, सामान्य टेम्पलेट इस्तेमाल करना</strong> — एक अच्छा डिज़ाइन यह दर्शाता है कि आपने मेहनत की।</li>
            <li><strong>फोटो न लगाना</strong> — बिना फोटो के बायोडाटा को बहुत कम प्रतिक्रिया मिलती है।</li>
          </ul>

          {/* ── SECTION 7 — BENEFITS ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">हिंदी विवाह बायोडाटा के फायदे</h2>
          <p>
            अपना <strong className="font-semibold text-zinc-900 dark:text-white">शादी बायोडाटा हिंदी में</strong> बनाने के कई फायदे हैं:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {[
              { emoji: "👴", title: "बड़ों के लिए आसान", desc: "दादा-दादी, नाना-नानी और बुजुर्ग परिवार के लोग हिंदी बायोडाटा आसानी से पढ़ और समझ सकते हैं।" },
              { emoji: "🤝", title: "सांस्कृतिक जुड़ाव", desc: "हिंदी में बायोडाटा भेजने से यह संदेश जाता है कि आप अपनी भाषा और संस्कृति से जुड़े हैं।" },
              { emoji: "📱", title: "WhatsApp Friendly", desc: "PDF फॉर्मेट में बायोडाटा WhatsApp पर बिना किसी लेआउट समस्या के शेयर होता है।" },
            ].map((b) => (
              <div key={b.title} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center">
                <div className="text-3xl mb-3">{b.emoji}</div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">{b.title}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* ── SECTION 8 — REGIONAL ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">अन्य भाषाओं में बायोडाटा फॉर्मेट</h2>
          <p>
            BiodataBuilder पर आप अपना बायोडाटा 6 भारतीय भाषाओं में बना सकते हैं। अपनी भाषा चुनें:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-6">
            {[
              { lang: "English", script: "Biodata", emoji: "🇮🇳", slug: "biodata-for-marriage", color: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900 hover:border-indigo-300" },
              { lang: "Marathi", script: "मराठी", emoji: "🪷", slug: "lagna-biodata-format-marathi", color: "bg-amber-50 dark:bg-amber-950/30 border-amber-100 dark:border-amber-900 hover:border-amber-300" },
              { lang: "Gujarati", script: "ગુજરાતી", emoji: "🌼", slug: "lagna-biodata-format-gujarati", color: "bg-teal-50 dark:bg-teal-950/30 border-teal-100 dark:border-teal-900 hover:border-teal-300" },
              { lang: "Tamil", script: "தமிழ்", emoji: "🌺", slug: "thirumanam-biodata-format-tamil", color: "bg-rose-50 dark:bg-rose-950/30 border-rose-100 dark:border-rose-900 hover:border-rose-300" },
              { lang: "Telugu", script: "తెలుగు", emoji: "🌸", slug: "vivah-biodata-format-telugu", color: "bg-purple-50 dark:bg-purple-950/30 border-purple-100 dark:border-purple-900 hover:border-purple-300" },
            ].map((r) => (
              <Link
                key={r.slug}
                href={`/articles/${r.slug}`}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border text-center transition-all hover:-translate-y-1 hover:shadow-md ${r.color}`}
              >
                <span className="text-2xl mb-2">{r.emoji}</span>
                <span className="font-bold text-zinc-900 dark:text-white text-sm">{r.lang}</span>
                <span className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{r.script}</span>
              </Link>
            ))}
          </div>

          {/* ── SECTION 9 — FAQ ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">अक्सर पूछे जाने वाले सवाल (FAQ)</h2>
          <div className="space-y-4">
            {[
              { q: "शादी बायोडाटा क्या होता है?", a: "शादी बायोडाटा (Vivah Biodata) एक एक-पेज का दस्तावेज़ होता है जो अरेंज मैरिज में लड़के या लड़की की पूरी जानकारी दूसरे परिवार को देने के लिए बनाया जाता है। इसमें व्यक्तिगत, शैक्षणिक, पारिवारिक और संपर्क जानकारी शामिल होती है।" },
              { q: "क्या शादी बायोडाटा जरूरी है?", a: "हाँ, भारत में अरेंज मैरिज के लिए बायोडाटा सबसे पहला और ज़रूरी कदम होता है। परिवार मिलने से पहले बायोडाटा देखकर ही पहला मूल्यांकन किया जाता है।" },
              { q: "क्या मैं मुफ्त में शादी बायोडाटा बना सकता हूँ?", a: "हाँ! BiodataBuilder.in पर आप बिल्कुल मुफ्त में सुंदर शादी बायोडाटा बना सकते हैं — कोई रजिस्ट्रेशन नहीं, कोई वॉटरमार्क नहीं, तुरंत PDF डाउनलोड करें।" },
              { q: "बायोडाटा में कौन सी फोटो लगानी चाहिए?", a: "बायोडाटा में हमेशा एक ताज़ी, साफ पासपोर्ट-साइज़ फोटो लगाएं जिसमें चेहरा स्पष्ट दिखे। धुंधली WhatsApp प्रोफाइल फोटो, ग्रुप फोटो या ज़्यादा एडिट की फोटो से बचें।" },
              { q: "बायोडाटा कितने पेज का होना चाहिए?", a: "बायोडाटा हमेशा 1 पेज का होना चाहिए। परिवार बहुत सारे बायोडाटा देखते हैं — एक साफ, संक्षिप्त पेज हमेशा बेहतर प्रभाव डालता है।" },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* ── INTERNAL LINKS ── */}
          <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-white">और पढ़ें (Read More)</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>→ <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Marriage Biodata — Complete Guide (English)</Link></li>
              <li>→ <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Marriage Biodata Format for Boy</Link></li>
              <li>→ <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Shaadi Biodata Format for Girl</Link></li>
              <li>→ <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">बायोडाटा में फोटो टिप्स और गलतियाँ (Biodata Tips)</Link></li>
            </ul>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-orange-50 to-pink-50 dark:from-orange-950/30 dark:to-pink-950/30 border border-orange-100 dark:border-orange-900 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">मुफ्त में सुंदर शादी बायोडाटा बनाएं</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
              कोई रजिस्ट्रेशन नहीं। कोई वॉटरमार्क नहीं। हिंदी भाषा सेलेक्ट करें, जानकारी भरें, और तुरंत WhatsApp-ready PDF डाउनलोड करें — बिल्कुल मुफ्त।
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/create"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all shadow-lg"
              >
                Create Biodata — Free <MoveRight className="w-5 h-5" />
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium text-base hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
              >
                और गाइड पढ़ें
              </Link>
            </div>
          </div>

        </div>
      </ArticleWrapper>
    </>
  );
}
