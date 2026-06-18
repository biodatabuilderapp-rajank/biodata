import Link from "next/link";
import Image from "next/image";
import ArticleWrapper from "@/components/ArticleWrapper";
import { MoveRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lagna Biodata Format Marathi | लग्न बायोडाटा PDF",
  description:
    "सुंदर मराठी लग्न बायोडाटा ऑनलाइन मोफत तयार करा. आधुनिक टेम्पलेट निवडा आणि PDF डाउनलोड करा.",
  alternates: { canonical: "https://biodatabuilder.in/articles/lagna-biodata-format-marathi" },
  openGraph: {
    title: "Lagna Biodata Format Marathi | लग्न बायोडाटा PDF",
    description:
      "सुंदर मराठी लग्न बायोडाटा ऑनलाइन मोफत तयार करा. आधुनिक टेम्पलेट निवडा आणि PDF डाउनलोड करा.",
    url: "https://biodatabuilder.in/articles/lagna-biodata-format-marathi",
    images: [{ url: "/examples/Hero-composite.png", width: 1200, height: 630, alt: "Marathi Lagna Biodata Format Templates" }],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "लग्न बायोडाटा म्हणजे काय?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "लग्न बायोडाटा (Lagna Biodata) हे एक पानाचे माहिती पत्रक असते जे लग्नाच्या प्रक्रियेत स्थळ सुचवण्यासाठी किंवा बघण्यासाठी वापरले जाते. यामध्ये वैयक्तिक, शैक्षणिक, कौटुंबिक आणि संपर्काची माहिती असते.",
      },
    },
    {
      "@type": "Question",
      name: "मोफत बायोडाटा तयार करता येतो का?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "होय! BiodataBuilder.in वर तुम्ही अगदी मोफत आणि सोप्या पद्धतीने तुमचा लग्न बायोडाटा तयार करू शकता आणि काही मिनिटांत PDF डाउनलोड करू शकता.",
      },
    },
    {
      "@type": "Question",
      name: "बायोडाटामध्ये कोणती माहिती लिहावी?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "बायोडाटामध्ये तुमचे नाव, जन्म तारीख आणि वेळ, उंची, शिक्षण, नोकरी/व्यवसाय, उत्पन्न, आणि कुटुंबाची (आई, वडील, आणि भावंडे) माहिती प्रामुख्याने असावी.",
      },
    },
    {
      "@type": "Question",
      name: "बायोडाटा किती पानांचा असावा?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "लग्न बायोडाटा नेहमी 1 पानाचा (one-page) असावा. खूप मोठी माहिती वाचायला वेळ लागतो, त्यामुळे थोडक्यात आणि महत्त्वाची माहिती एकाच पानावर द्यावी.",
      },
    },
    {
      "@type": "Question",
      name: "फोटो कसा असावा?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "बायोडाटामध्ये नेहमी एक स्पष्ट आणि नवीन पासपोर्ट आकाराचा फोटो वापरावा. अंधुक, दूरून काढलेला किंवा WhatsApp प्रोफाईलचा फोटो वापरू नये.",
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
    { "@type": "ListItem", position: 3, name: "Lagna Biodata Format Marathi", item: "https://biodatabuilder.in/articles/lagna-biodata-format-marathi" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Lagna Biodata Format Marathi | लग्न बायोडाटा PDF",
  description: "सुंदर मराठी लग्न बायोडाटा ऑनलाइन मोफत तयार करा. आधुनिक टेम्पलेट निवडा आणि PDF डाउनलोड करा.",
  image: "/examples/Hero-composite.png",
  datePublished: "2026-05-04",
  dateModified: "2026-05-29",
  author: { "@type": "Organization", name: "BiodataBuilder" },
  publisher: { "@type": "Organization", name: "BiodataBuilder", logo: { "@type": "ImageObject", url: "https://biodatabuilder.in/favicon.png" } },
  inLanguage: "mr",
};

export default function LagnaBiodataFormatMarathiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <ArticleWrapper publishedDate="2026-05-04">

        {/* ── H1 ── */}
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
          Lagna Biodata Format Marathi – लग्न बायोडाटा PDF
        </h1>

        {/* ── HERO IMAGE ── */}
        <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-lg">
          <Image
            src="/examples/Hero-composite.png"
            alt="Marathi Biodata Format Templates — सुंदर मराठी लग्न बायोडाटा"
            width={1200}
            height={630}
            className="w-full h-auto"
            priority
          />
          <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">
            BiodataBuilder वर तयार केलेले आकर्षक बायोडाटा टेम्पलेट्स
          </p>
        </div>

        {/* ── INTRO ── */}
        <div className="space-y-4 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            महाराष्ट्रामध्ये अरेंज मॅरेज (कांदेपोहे किंवा मध्यस्थामार्फत लग्न) ठरवताना सर्वात पहिली आणि महत्त्वाची गोष्ट म्हणजे <strong className="font-semibold text-zinc-900 dark:text-white">लग्न बायोडाटा</strong> (Lagna Biodata). हा एक असा दस्तावेज आहे जो तुमच्या कुटुंबाची आणि तुमची पहिली ओळख दुसऱ्या कुटुंबाला करून देतो.
          </p>
          <p>
            आजकाल लग्नासाठी बायोडाटा WhatsApp वर शेअर केला जातो. त्यामुळे तुमचा <strong className="font-semibold text-zinc-900 dark:text-white">Marathi biodata format</strong> आकर्षक असणे खूप गरजेचे आहे. सुंदर दिसणारा आणि अचूक माहिती असलेला बायोडाटा नेहमी चांगली छाप पाडतो.
          </p>
          <p>
            या गाईडमध्ये आपण पाहणार आहोत की आकर्षक <strong className="font-semibold text-zinc-900 dark:text-white">मराठी बायोडाटा PDF</strong> कशी तयार करावी, त्यात कोणती माहिती लिहावी आणि कोणत्याही डिझाईन स्किलशिवाय तुम्ही तो ५ मिनिटांत मोफत कसा बनवू शकता.
          </p>
        </div>

        {/* ── HERO CTA ── */}
        <div className="my-10 flex justify-center">
          <Link
            href="/create"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 transition-all shadow-lg"
          >
            मराठी बायोडाटा तयार करा <MoveRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">

          {/* ── SECTION 1 ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">लग्न बायोडाटा म्हणजे काय?</h2>
          <p>
            <strong className="font-semibold text-zinc-900 dark:text-white">लग्न बायोडाटा</strong> (marriage biodata) ही व्यक्तीची लग्नासाठीची प्रोफाईल असते. यात मुलाची किंवा मुलीची वय, शिक्षण, नोकरी आणि कौटुंबिक माहिती दिलेली असते. बायोडाटा हा रेझ्युमे (Job Resume) नसून तो कुटुंबांना एकमेकांना ओळखण्यासाठी आवश्यक असणारा एक दुवा आहे.
          </p>
          <p>
            महाराष्ट्रामध्ये पारंपरिक पद्धतीने लग्न ठरवताना कुंडल जुळवली जाते, त्यामुळे बायोडाटामध्ये रास, नक्षत्र आणि गोत्र यांसारख्या गोष्टींना विशेष महत्त्व असते. एक चांगला <strong className="font-semibold text-zinc-900 dark:text-white">lagna patrika biodata</strong> कुटुंबातील मोठ्या व्यक्तींना वाचण्यासाठी आणि समजण्यासाठी खूप सोपा असावा लागतो.
          </p>

          {/* ── SECTION 2 — TABLE ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">लग्न बायोडाटामध्ये काय लिहावे?</h2>
          <p>
            एका उत्तम <strong className="font-semibold text-zinc-900 dark:text-white">marathi marriage biodata</strong> मध्ये खालील गोष्टींचा समावेश असावा. बायोडाटा नेहमी थोडक्यात आणि सुटसुटीत असावा.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-700 my-6">
            <table className="w-full text-sm text-left">
              <thead className="bg-amber-50 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200">
                <tr>
                  <th className="px-5 py-3 font-semibold">माहिती (Section)</th>
                  <th className="px-5 py-3 font-semibold">उदाहरण (Example)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
                {[
                  ["संपूर्ण नाव (Full Name)", "राहुल पाटील"],
                  ["जन्म तारीख (Date of Birth)", "१५ मार्च १९९७"],
                  ["जन्म वेळ (Time of Birth)", "सकाळी ६:३० वाजता"],
                  ["उंची (Height)", "5′ 10″"],
                  ["रक्तगट (Blood Group)", "B+"],
                  ["धर्म आणि जात (Religion & Caste)", "हिंदू, मराठा"],
                  ["रास आणि नक्षत्र (Rashi / Nakshatra)", "वृषभ / रोहिणी"],
                  ["नाडी आणि गण (Nadi & Gan)", "अंत्य / देव"],
                  ["शिक्षण (Education)", "B.E. (Computer Science)"],
                  ["नोकरी / व्यवसाय (Job/Occupation)", "सॉफ्टवेअर इंजिनिअर, TCS, पुणे"],
                  ["उत्पन्न (Annual Income)", "१२ लाख प्रति वर्ष"],
                  ["वडील (Father's Name)", "श्री. रमेश पाटील (शेती / व्यवसाय)"],
                  ["आई (Mother's Name)", "श्रीमती सुनीता पाटील (गृहिणी)"],
                  ["भावंडे (Siblings)", "१ भाऊ (विवाहित), १ बहीण"],
                  ["संपर्क क्रमांक (Contact Number)", "+91 98765 43210"],
                  ["पत्ता (Address)", "शिवाजी नगर, पुणे, महाराष्ट्र"],
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
            टीप: बायोडाटा नेहमी <strong className="not-italic font-semibold text-zinc-700 dark:text-zinc-300">१ पानात (single page)</strong> संपवण्याचा प्रयत्न करा.
          </p>

          {/* ── SECTION 3 — BOY ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">मुलासाठी लग्न बायोडाटा उदाहरण</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md">
              <Image
                src="/examples/Boy-biodata-example-Marathi.png"
                alt="मुलाचा लग्न बायोडाटा — Boy marriage biodata format in Marathi"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-4">
              <p>
                मुलाचा बायोडाटा नेहमी साध्या पण आकर्षक डिझाईनमध्ये असावा. यामधून प्रामुख्याने स्थिरता आणि जबाबदारीची जाणीव दिसायला हवी.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li><strong>स्वच्छ आणि स्पष्ट डिझाईन</strong> — माहिती पटकन वाचता येते</li>
                <li><strong>नोकरी आणि उत्पन्नाची स्पष्ट माहिती</strong></li>
                <li><strong>कुटुंबाची थोडक्यात माहिती</strong></li>
                <li><strong>स्पष्ट आणि चांगला पासपोर्ट फोटो</strong> — सेल्फी वापरणे टाळा</li>
              </ul>
              <Link href="/create" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
                मुलाचा बायोडाटा तयार करा <MoveRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* ── SECTION 4 — GIRL ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">मुलीसाठी लग्न बायोडाटा उदाहरण</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 md:order-2">
              <p>
                मुलीसाठी बायोडाटा तयार करताना डिझाईनमध्ये जरा नाजूक आणि फुलांची (floral) किंवा पारंपरिक बॉर्डर असलेली टेम्पलेट्स खूप छान दिसतात.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-base">
                <li><strong>पारंपरिक फुलांची बॉर्डर</strong> — सुंदर आणि आकर्षक वाटते</li>
                <li><strong>छंद आणि अपेक्षांची माहिती</strong> — ज्यामुळे मुलाकडच्यांना चांगली कल्पना येते</li>
                <li><strong>गोलाकार फोटो फ्रेम</strong> किंवा नीटनेटका लेआऊट साजेसा दिसतो</li>
                <li><strong>संपर्कासाठी आई-वडिलांचा नंबर</strong> देणे नेहमी सुरक्षित असते</li>
              </ul>
              <Link href="/create" className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors">
                मुलीचा बायोडाटा तयार करा <MoveRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md md:order-1">
              <Image
                src="/examples/Girl-biodata-example-Marathi.png"
                alt="मुलीचा लग्न बायोडाटा — Girl marriage biodata format in Marathi"
                width={600}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* ── SECTION 5 — HOW TO CREATE ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">ऑनलाइन मराठी लग्न बायोडाटा कसा तयार करावा?</h2>
          <p>
            कोणत्याही डिझायनरला पैसे न देता आणि वर्ड फाईलचा (Word Document) त्रास न घेता तुम्ही स्वतः तुमचा <strong className="font-semibold text-zinc-900 dark:text-white">marathi biodata pdf</strong> कसा बनवू शकता, ते या स्टेप्समध्ये पाहा:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 my-8">
            {[
              { step: "01", title: "टेम्पलेट निवडा", desc: "तुमच्या आवडीनुसार एक आकर्षक आणि पारंपरिक डिझाईन निवडा." },
              { step: "02", title: "माहिती भरा", desc: "मराठीमध्ये तुमची वैयक्तिक आणि कौटुंबिक माहिती भरा." },
              { step: "03", title: "फोटो अपलोड करा", desc: "तुमचा एक स्पष्ट आणि चांगला फोटो अपलोड आणि क्रॉप करा." },
              { step: "04", title: "PDF डाउनलोड करा", desc: "एका क्लिकवर PDF तयार होईल! आणि ती थेट WhatsApp वर पाठवा." },
            ].map((s) => (
              <div key={s.step} className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900 text-center">
                <div className="w-9 h-9 rounded-xl bg-amber-500 text-white font-bold text-sm flex items-center justify-center mx-auto mb-3">{s.step}</div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">{s.title}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* ── MID-ARTICLE CTA ── */}
          <div className="my-10 p-8 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">मोफत बायोडाटा तयार करा</h3>
            <p className="text-amber-100 text-sm mb-6">कोणतेही रजिस्ट्रेशन नाही, वॉटरमार्क नाही. थेट PDF डाउनलोड करा.</p>
            <Link
              href="/create"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-amber-600 font-bold text-sm hover:bg-amber-50 transition-all shadow-lg"
            >
              बायोडाटा बनवा — Free <MoveRight className="w-4 h-4" />
            </Link>
          </div>

          {/* ── WHATSAPP IMAGE ── */}
          <div className="my-8 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-md">
            <Image
              src="/examples/WhatsApp-preview.jpg"
              alt="WhatsApp वर लग्न बायोडाटा PDF — marriage biodata pdf on WhatsApp"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
            <p className="text-center text-xs text-zinc-400 py-2 bg-zinc-50 dark:bg-zinc-900">
              BiodataBuilder ची PDF फाईल WhatsApp वर अशी सुस्पष्ट दिसते
            </p>
          </div>

          {/* ── SECTION 6 — MISTAKES ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">लग्न बायोडाटा तयार करताना होणाऱ्या चुका</h2>
          <p>
            चांगले स्थळ मिळण्यासाठी बायोडाटामध्ये चुका न होणे खूप महत्त्वाचे आहे. खालील गोष्टी आवर्जून टाळा:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>अंधुक किंवा कॅज्युअल फोटो वापरणे</strong> — नेहमी चांगला पासपोर्ट फोटो वापरावा.</li>
            <li><strong>चुकीची शब्दरचना किंवा स्पेलिंग चुका (Spelling mistakes)</strong> — दुसऱ्या कोणाकडून तरी एकदा वाचून घ्‍यावे.</li>
            <li><strong>खूप जास्त माहिती भरणे</strong> — फक्त महत्त्वाची माहिती द्यावी, बाकीच्या गोष्टी प्रत्यक्ष बोलणी करताना सांगता येतात.</li>
            <li><strong>जुन्या स्टाईलची डिझाईन किंवा Word Document</strong> — Word ફाईल कधीकधी फोनवर नीट उघडत नाही. त्यामुळे नेहमी <strong>PDF</strong> पाठवावी.</li>
          </ul>

          {/* ── SECTION 7 — BENEFITS ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">मराठी बायोडाटा वापरण्याचे फायदे</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
            {[
              { emoji: "🧓", title: "कुटुंबासाठी सोपे", desc: "आई-वडील आणि घराच्या मोठ्यांना मराठी वाचायला आणि समजायला सोपे जाते." },
              { emoji: "🤝", title: "संभाषण आणि आपुलकी", desc: "मातृभाषेतील बायोडाटा नेहमीच एक भावनिक जवळीक निर्माण करतो आणि चांगली छाप टाडतो." },
              { emoji: "📱", title: "WhatsApp Friendly", desc: "पीडीएफ फाईल्स (PDF) कोणालाही फॉरवर्ड करणे सोपे असते." },
            ].map((b) => (
              <div key={b.title} className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 text-center">
                <div className="text-3xl mb-3">{b.emoji}</div>
                <h3 className="font-bold text-zinc-900 dark:text-white text-sm mb-2">{b.title}</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* ── SECTION 8 — REGIONAL ── */}
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">इतर भाषांमधील बायोडाटा फॉर्मेट</h2>
          <p>
            तुमचा बायोडाटा तुम्ही इतर भारतीय भाषांमध्येही तयार करू शकता:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 my-6">
            {[
              { lang: "English", script: "Biodata", emoji: "🇮🇳", slug: "biodata-for-marriage", color: "bg-indigo-50 dark:bg-indigo-950/30 border-indigo-100 dark:border-indigo-900 hover:border-indigo-300" },
              { lang: "Hindi", script: "हिंदी", emoji: "🕉️", slug: "vivah-biodata-format-hindi", color: "bg-orange-50 dark:bg-orange-950/30 border-orange-100 dark:border-orange-900 hover:border-orange-300" },
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
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mt-16 mb-6">सामान्य प्रश्न (FAQ)</h2>
          <div className="space-y-4">
            {[
              { q: "लग्न बायोडाटा म्हणजे काय?", a: "लग्न बायोडाटा हे लग्नासाठी वापरले जाणारे एक पानभर माहिती पत्रक असते, ज्यामध्ये मुलाची किंवा मुलीची संपूर्ण आणि कौटुंबिक माहिती असते." },
              { q: "मोफत बायोडाटा तयार करता येतो का?", a: "होय, BiodataBuilder वर तुम्ही तुमचा लग्न बायोडाटा कोणत्याही खर्चाशिवाय मोफत बनवू आणि PDF डाऊनलोड करू शकता." },
              { q: "बायोडाटामध्ये कोणती माहिती लिहावी?", a: "बायोडाटामध्ये वैयक्तिक माहिती (नाव, वय, उंची, शिक्षण, नोकरी), कौटुंबिक माहिती (आई-वडील, बहीण-भाऊ) आणि संपर्कासाठी पत्ता, फोन नंबर असावा." },
              { q: "बायोडाटा किती पानांचा असावा?", a: "बायोडाटा नेहमी १ पानाचा असावा. खूप मोठी माहिती वाचायला कठीण जाते आणि कंटाळवाणी वाटते." },
              { q: "फोटो कसा असावा?", a: "फोटो स्पष्ट (Clear) आणि चांगल्या बॅकग्राउंडचा असावा. यात तुमचा चेहरा व्यवस्थित दिसायला हवा." },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* ── INTERNAL LINKS ── */}
          <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-bold text-xl mb-3 text-zinc-900 dark:text-white">अधिक माहिती (Read More)</h3>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <li>→ <Link href="/articles/biodata-for-marriage" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">Marriage Biodata — Complete Guide (English)</Link></li>
              <li>→ <Link href="/articles/marriage-biodata-for-boy" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">मुलासाठी बायोडाटा डिझाईन आणि माहिती</Link></li>
              <li>→ <Link href="/articles/shaadi-biodata-format-for-girl" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">मुलीसाठी बायोडाटा कसा तयार करावा?</Link></li>
              <li>→ <Link href="/articles/biodata-tips" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">बायोडाटामधील चुका कशा टाळाव्यात?</Link></li>
            </ul>
          </div>

          {/* ── FINAL CTA ── */}
          <div className="mt-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border border-amber-100 dark:border-amber-900 text-center">
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-3">सुंदर मराठी लग्न बायोडाटा तयार करा</h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-8 max-w-xl mx-auto">
              कोणतेही वॉटरमार्क नाही, कोणतेही चार्जेस नाहीत. टेम्पलेट निवडा, माहिती भरा आणि थेट मोबाईलवर PDF डाउनलोड करा.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/create"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-base hover:-translate-y-1 hover:shadow-2xl transition-all shadow-lg"
              >
                Create Biodata — Free <MoveRight className="w-5 h-5" />
              </Link>
              <Link
                href="/articles"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium text-base hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all"
              >
                अधिक गाईड्स वाचा
              </Link>
            </div>
          </div>

        </div>
      </ArticleWrapper>
    </>
  );
}
