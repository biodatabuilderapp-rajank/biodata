import Link from "next/link";
import Logo from "@/components/Logo";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 pt-16 pb-8 px-5">
      <div className="max-w-6xl mx-auto">

        {/* ── 4-column grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs mb-6">
              Free Indian marriage biodata maker. Beautiful templates, instant PDF download — no sign-up needed.
            </p>
            <div className="flex items-center gap-4 text-zinc-400 dark:text-zinc-500">
              <a href="https://x.com/biodata_builder" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/biodatabuilder/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61588891516092" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@BiodataBuilder" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <p className="font-semibold text-zinc-900 dark:text-white text-sm mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link href="/create" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Create Biodata</Link></li>
              <li><Link href="/#themes" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Templates</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">How It Works</Link></li>
              <li><Link href="/about-us" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link href="/faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQ</Link></li>
              <li><Link href="/contact-us" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3 — Guides */}
          <div>
            <p className="font-semibold text-zinc-900 dark:text-white text-sm mb-4">Guides</p>
            <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/articles/biodata-for-marriage" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Biodata for Marriage</Link></li>
              <li><Link href="/articles/how-to-write-biodata-about-me" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">How to Write About Me</Link></li>
              <li><Link href="/articles/biodata-tips" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Biodata Tips &amp; Mistakes</Link></li>
              <li><Link href="/articles/marriage-biodata-for-boy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Biodata for Boy</Link></li>
              <li><Link href="/articles/shaadi-biodata-format-for-girl" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Biodata for Girl</Link></li>
              <li><Link href="/articles/biodata-vs-resume-difference" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Biodata vs Resume</Link></li>
              <li><Link href="/articles" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors font-medium">All Guides →</Link></li>
            </ul>
          </div>

          {/* Col 4 — Regional Formats */}
          <div>
            <p className="font-semibold text-zinc-900 dark:text-white text-sm mb-4">Regional Formats</p>
            <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/articles/vivah-biodata-format-hindi" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Hindi Biodata (हिंदी)</Link></li>
              <li><Link href="/articles/lagna-biodata-format-marathi" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Marathi Biodata (मराठी)</Link></li>
              <li><Link href="/articles/lagna-biodata-format-gujarati" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Gujarati Biodata (ગુજરાતી)</Link></li>
              <li><Link href="/articles/thirumanam-biodata-format-tamil" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Tamil Biodata (தமிழ்)</Link></li>
              <li><Link href="/articles/vivah-biodata-format-telugu" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Telugu Biodata (తెలుగు)</Link></li>
              <li><Link href="/articles/marriage-biodata-format-for-muslim" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Muslim Biodata</Link></li>
              <li><Link href="/articles/marriage-biodata-format-for-christian" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Christian Biodata</Link></li>
            </ul>
          </div>

        </div>

        {/* ── Disclaimer ── */}
        <div className="border-t border-zinc-100 dark:border-zinc-900 py-6">
          <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed max-w-4xl text-justify sm:text-left">
            <strong className="font-semibold text-zinc-600 dark:text-zinc-400">Disclaimer:</strong>{" "}
            BiodataBuilder is a free marriage biodata maker and design utility for generating PDF documents. We do not connect users and we do not store your personal data on our servers. All information entered remains securely on your device.
          </p>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-zinc-100 dark:border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} BiodataBuilder. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-zinc-400">
            <Link href="/privacy-policy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Use</Link>
          </div>
          <p>Made with ❤️ for Indian families</p>
        </div>

      </div>
    </footer>
  );
}
