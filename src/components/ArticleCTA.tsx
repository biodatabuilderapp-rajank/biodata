import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function ArticleCTA() {
  return (
    <div className="mt-16 p-8 sm:p-10 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-3xl border border-indigo-100 dark:border-indigo-900/50 text-center shadow-sm">
      <h3 className="text-2xl font-bold text-indigo-900 dark:text-indigo-100 mb-3">Ready to Create Your Biodata?</h3>
      <p className="text-indigo-700 dark:text-indigo-300 mb-8 text-lg">Use our free guided builder to instantly create a beautiful, professional marriage biodata in 5 minutes.</p>
      <Link href="/create" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl hover:-translate-y-1">
        Create Your Biodata Now <MoveRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
