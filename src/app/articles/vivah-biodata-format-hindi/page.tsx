import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";
import ArticleCTA from "@/components/ArticleCTA";
import ArticleLanguageNav from "@/components/ArticleLanguageNav";

export const metadata = {
  title: "विवाह बायोडाटा फॉर्मेट हिंदी में | शादी बायोडाटा कैसे बनाएं",
  description: "हिंदी में शादी का बायोडाटा कैसे बनाएं? जानें सही फॉर्मेट, जरूरी जानकारी और डाउनलोड करें PDF में फ्री।",
  alternates: { canonical: "https://biodatabuilder.in/articles/vivah-biodata-format-hindi" }
};

export default function Article() {
  return (
    <ArticleWrapper publishedDate="2024-03-24">

      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">विवाह बायोडाटा फॉर्मेट — हिंदी में</h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          भारत में शादी के लिए <strong className="font-semibold text-zinc-900 dark:text-white">बायोडाटा</strong> सबसे पहला और सबसे महत्वपूर्ण दस्तावेज होता है। यह एक तरह का विवाहिक परिचय पत्र है जो दोनों परिवारों के बीच पहले आदान-प्रदान के रूप में भेजा जाता है। सही फॉर्मेट में बना बायोडाटा एक अच्छा पहला प्रभाव छोड़ता है।
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">हिंदी बायोडाटा में क्या-क्या होना चाहिए?</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">व्यक्तिगत जानकारी:</strong> नाम, जन्म तिथि, जन्म समय, जन्म स्थान, ऊँचाई, रंग-रूप, रक्त समूह।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">जाति/धर्म:</strong> जाति, उपजाति, गोत्र, मंगलिक स्थिति।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">राशि और कुंडली:</strong> राशि, नक्षत्र, और जन्म कुंडली की जानकारी।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">शिक्षा और पेशा:</strong> उच्चतम डिग्री, काम का स्थान, मासिक/वार्षिक आय।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">परिवार का परिचय:</strong> पिता, माता, भाई-बहन का विवरण, पैतृक गाँव।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">रुचियाँ और अपेक्षाएँ:</strong> शौक, जीवनसाथी से अपेक्षा।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">संपर्क जानकारी:</strong> मोबाइल नंबर, ईमेल पता।</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">हिंदी में बायोडाटा बनाना अब हुआ आसान</h2>
        <p>
          BiodataBuilder पर आप अपना बायोडाटा पूरी तरह <strong className="font-semibold text-zinc-900 dark:text-white">हिंदी में</strong> बना सकते हैं। सभी शीर्षक और जानकारी के खाने हिंदी में दिखाई देंगे। बस भाषा बदलें — बाकी सब अपने आप हो जाएगा। तैयार बायोडाटा को PDF या PNG में डाउनलोड करें — बिल्कुल मुफ्त।
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">PDF या Word — क्या बेहतर है?</h2>
        <p>
          बहुत से लोग "बायोडाटा Word फॉर्मेट डाउनलोड" खोजते हैं, लेकिन PDF बेहतर विकल्प है। PDF में बायोडाटा का डिज़ाइन किसी भी डिवाइस पर एक जैसा दिखता है — चाहे WhatsApp पर भेजें या प्रिंट करें। Word फाइल में फॉन्ट और फॉर्मेट बदल सकता है।
        </p>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">अभी हिंदी में बायोडाटा बनाएं — बिल्कुल मुफ्त</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8 text-lg">सुंदर टेम्पलेट चुनें, जानकारी भरें और PDF डाउनलोड करें — कोई रजिस्ट्रेशन नहीं।</p>
          <Link
            href="/create?locale=hi"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            हिंदी में बायोडाटा बनाएं →
          </Link>
        </div>
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
