import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";

export const metadata = {
  title: "લગ્ન બાયોડેટા ફોર્મેટ ગુજરાતી | Lagna Biodata Gujarati PDF",
  description: "ગુજરાતીમાં લગ્ન બાયોડેટા કેવી રીતે બનાવવો? સાચી માહિતી, ફક્ત ફ્રી PDF ડાઉનલોડ.",
  alternates: { canonical: "https://biodatabuilder.in/articles/lagna-biodata-format-gujarati" }
};

export default function Article() {
  return (
    <ArticleWrapper publishedDate="2024-03-24">

      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">લગ્ન બાયોડેટા ફોર્મેટ — ગુજરાતીમાં</h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          ગુજરાતી સમાજમાં <strong className="font-semibold text-zinc-900 dark:text-white">લગ્ન બાયોડેટા</strong> ખૂબ મહત્ત્વ ધરાવે છે. સારો બાયોડેટા ફક્ત માહિતી આપતો નથી — તે ઉમેદવારના સ્વભાવ, સંસ્કાર અને પારિવારિક પૃષ્ઠભૂમિ વિશે ઘણું કહે છે. ગુજરાતીમાં બાયોડેટા બનાવવાથી સામ-સામે ગ્રાહ્ય ભરોસો અને ઘનિષ્ઠ સ્વયંભૂ ઉભો થાય છે.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">ગુજરાતી બાયોડેટામાં શું-શું હોવું જોઈએ?</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">વ્યક્તિગત વિગત:</strong> નામ, જન્મ તારીખ, જન્મ સ્થળ, ઊંચાઈ, રક્ત જૂથ।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">જ્ઞાાત/ગોત્ર:</strong> જ્ઞાાત, ઉપ-જ્ઞાાત, ગોત્ર, મૂળ ગામ।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">રાશિ અને જન્મ-ગ્રહ:</strong> રાશિ, નક્ષત્ર, જન્મ-ગ્રહ / ગ્રહ-ઠારણ।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">શિક્ષણ અને ધંધો:</strong> ઉચ્ચ ડિગ્રી, નોકરીની જગ્યા, વાર્ષિક આવક।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">પારિવારિક વિગત:</strong> પિતા, માતા, ભાઈ-બહેન, ગામ।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">શોખ અને અપેક્ષા:</strong> ગમ-ન-ગમ, જીવનસાથી વિશે અપેક્ષા।</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">સંપર્ક:</strong> મોબાઇલ, ઇ-મેઇલ।</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">WhatsApp પર PDF શા માટે?</h2>
        <p>
          ઘણા લોક "Word ફોર્મેટ" શોધે છે, પરંતુ PDF ફ઼ાઇલ સૌ-ઉત્તમ છે. Word ડૉક્યૂમેન્ટ સ્માર્ટ-ફ઼ોન પર ખૂલશે ત્યારે ફૉન્ટ બદલાઈ જઈ શકે, ડિઝાઈન ઊડી શકે. PDF ગમે ત્যાં, ગમે તે ઉપકરણ પર બિલ્કૂલ એ જ દ઼ેખ઼ાશે.
        </p>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">ગુજરાતીમાં બાયોડેટા બનાવો — મફ઼્ત</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8 text-lg">સુંદર ટૅમ્પ્લૅટ પસ઼ંદ કરો, વિગ्त ભ઼ રો, PDF ડ઼ઉ ×ôloàd ક ×ôrو — ÷oðîkoi નóoðî ðöðo.</p>
          <Link
            href="/create?locale=gu"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            ગુજરાતીમાં બાયોડેટા બનાવો →
          </Link>
        </div>
      </div>
    </ArticleWrapper>
  );
}
