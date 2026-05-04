import Link from "next/link";
import Logo from "@/components/Logo";
import { Twitter, Instagram, Facebook, Youtube } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div className="md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
              Create beautiful traditional Indian marriage biodata formats for free. The easiest free biodata maker for Indian families.
            </p>
          </div>

          <div>
            <p className="font-semibold text-zinc-900 dark:text-white text-sm mb-4">Quick Links</p>
            <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link href="/create" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Create Biodata</Link></li>
              <li><Link href="/articles" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Articles &amp; Guides</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">How It Works</Link></li>
              <li><Link href="/#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-zinc-900 dark:text-white text-sm mb-4">Legal</p>
            <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
              <li><Link href="/privacy-policy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-zinc-900 dark:text-white text-sm mb-4">Connect With Us</p>
            <div className="flex items-center gap-4 text-zinc-500 dark:text-zinc-400">
              <a href="https://x.com/biodata_builder" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@BiodataBuilder" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/biodatabuilder/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61588891516092" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-100 dark:border-zinc-900 py-6 mb-2">
          <p className="text-xs text-zinc-500 dark:text-zinc-500 leading-relaxed max-w-4xl text-justify sm:text-left">
            <strong className="font-semibold text-zinc-600 dark:text-zinc-400">Disclaimer:</strong>{" "}
            BiodataBuilder is a free marriage biodata maker and design utility for generating PDF documents. We do not connect users and we do not store your personal data on our servers. All information entered remains securely on your device.
          </p>
        </div>

        <div className="border-t border-zinc-100 dark:border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
          <p>© {new Date().getFullYear()} BiodataBuilder. All rights reserved.</p>
          <p>Made with ❤️ for Indian families</p>
        </div>
      </div>
    </footer>
  );
}
