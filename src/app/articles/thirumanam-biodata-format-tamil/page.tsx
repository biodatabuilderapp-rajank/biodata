import Link from "next/link";
import ArticleWrapper from "@/components/ArticleWrapper";

export const metadata = {
  title: "திருமண பயோடேட்டா வடிவம் தமிழில் | Thirumanam Biodata Tamil PDF",
  description: "தமிழில் திருமண பயோடேட்டா எப்படி தயாரிப்பது? சரியான வடிவம், தகவல்கள் மற்றும் இலவச PDF பதிவிறக்கம்.",
  alternates: { canonical: "https://biodatabuilder.in/articles/thirumanam-biodata-format-tamil" }
};

export default function Article() {
  return (
    <ArticleWrapper publishedDate="2024-03-24">

      <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-8 leading-tight">திருமண பயோடேட்டா வடிவம் — தமிழில்</h1>

      <div className="space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
        <p>
          தமிழ் திருமண பொருத்தம் பார்க்கும்போது, <strong className="font-semibold text-zinc-900 dark:text-white">பயோடேட்டா</strong> என்பது இரு குடும்பங்களுக்கும் இடையே முதல் அறிமுகமாக செல்லும் ஆவணம். சரியான, சுத்தமான வடிவத்தில் தயாரிக்கப்பட்ட பயோடேட்டா நல்ல முதல் தோற்றத்தை ஏற்படுத்துகிறது.
        </p>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">தமிழ் பயோடேட்டாவில் என்ன இருக்க வேண்டும்?</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong className="font-semibold text-zinc-900 dark:text-white">தனிப்பட்ட தகவல்கள்:</strong> பெயர், பிறந்த தேதி, பிறந்த நேரம், பிறந்த இடம், உயரம், நிறம், இரத்த வகை.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">ஜாதி / கோத்திரம்:</strong> ஜாதி, உப ஜாதி, கோத்திரம், சேவல்/மாங்கலியம் நிலை.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">ராசி மற்றும் ஜாதகம்:</strong> ராசி, நட்சத்திரம், பாதம், ஜாதக தகவல்கள்.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">கல்வி மற்றும் தொழில்:</strong> உயர் கல்வி, வேலை இடம், ஆண்டு வருமானம்.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">குடும்ப விவரங்கள்:</strong> தந்தை, தாய், சகோதர-சகோதரிகள், சொந்த ஊர்.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">விருப்பங்கள் மற்றும் எதிர்பார்ப்புகள்:</strong> பொழுதுபோக்கு, வாழ்க்கைத்துணையிடம் எதிர்பார்ப்பு.</li>
          <li><strong className="font-semibold text-zinc-900 dark:text-white">தொடர்பு தகவல்:</strong> மொபைல் எண், மின்னஞ்சல்.</li>
        </ul>

        <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white mt-12 mb-6">PDF ஏன் சிறந்தது?</h2>
        <p>
          பலரும் Word வடிவ பயோடேட்டா தேடுகிறார்கள், ஆனால் PDF சிறந்த தேர்வு. Word கோப்பை வேறு தொலைபேசியில் திறக்கும்போது எழுத்துரு மாறிவிடலாம், வடிவம் உடைந்துவிடலாம். PDF எங்கும் அதே தோற்றத்தில் தெரியும் — WhatsApp இல் அனுப்பினாலும், அச்சிட்டாலும்.
        </p>

        <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">தமிழில் பயோடேட்டா உருவாக்குங்கள் — இலவசமாக</h3>
          <p className="text-indigo-700 dark:text-indigo-300 mb-8 text-lg">அழகான வார்ப்புரு தேர்வு செய்யுங்கள், விவரங்களை நிரப்புங்கள், PDF பதிவிறக்கம் செய்யுங்கள் — பதிவு தேவையில்லை.</p>
          <Link
            href="/create?locale=ta"
            className="inline-block px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            தமிழில் பயோடேட்டா உருவாக்கு →
          </Link>
        </div>
      </div>
    </ArticleWrapper>
  );
}
