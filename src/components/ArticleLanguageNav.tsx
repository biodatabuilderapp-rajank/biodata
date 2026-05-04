import Link from "next/link";
import { Languages } from "lucide-react";

const languages = [
  { name: "हिंदी", label: "Hindi", href: "/articles/vivah-biodata-format-hindi" },
  { name: "मराठी", label: "Marathi", href: "/articles/lagna-biodata-format-marathi" },
  { name: "ગુજરાતી", label: "Gujarati", href: "/articles/lagna-biodata-format-gujarati" },
  { name: "தமிழ்", label: "Tamil", href: "/articles/thirumanam-biodata-format-tamil" },
  { name: "తెలుగు", label: "Telugu", href: "/articles/vivah-biodata-format-telugu" },
];

export default function ArticleLanguageNav() {
  return (
    <div className="mt-12 bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg">
            <Languages className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-semibold text-zinc-900 dark:text-white">Explore in other languages</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Read our guides built for regional languages.</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          {languages.map((lang) => (
            <Link 
              key={lang.name} 
              href={lang.href}
              className="px-4 py-2 bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium rounded-full transition-colors"
            >
              <span className="font-sans mr-2 text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-500">{lang.label}</span>
              {lang.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
