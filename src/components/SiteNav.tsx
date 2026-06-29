"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { Languages, MoveRight, Menu, X } from "lucide-react";
import { SUPPORTED_LANGUAGES } from "@/components/LanguageSelector";
import { useState } from "react";

interface SiteNavProps {
  locale?: string;
  onLocaleChange?: (lang: string) => void;
  /** Nav links to highlight when active. Defaults to the standard set. */
  activeHref?: string;
}

const NAV_LINKS = [
  { href: "/#how-it-works", label: "How it Works" },
  { href: "/#themes", label: "Templates" },
  { href: "/articles", label: "Guides" },
];

export default function SiteNav({ locale, onLocaleChange, activeHref }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-zinc-100 dark:border-zinc-900 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
        <Logo />

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              prefetch={false}
              className={`hover:text-zinc-900 dark:hover:text-white transition-colors ${
                activeHref === link.href ? "text-indigo-600 dark:text-indigo-400" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right-side controls */}
        <div className="flex items-center gap-3">
          {/* Language selector (optional — only shown if props are provided) */}
          {locale !== undefined && onLocaleChange && (
            <div className="hidden sm:flex items-center gap-1.5">
              <Languages className="w-4 h-4 text-zinc-400 shrink-0" />
              <select
                value={locale}
                onChange={(e) => onLocaleChange(e.target.value)}
                className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-transparent border-0 focus:outline-none focus:ring-0 cursor-pointer pr-1"
                aria-label="Select language"
              >
                {SUPPORTED_LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.native}
                  </option>
                ))}
              </select>
            </div>
          )}

          <Link
            href="/create"
            prefetch={false}
            className="flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5 whitespace-nowrap"
          >
            Create Free
            <MoveRight className="w-4 h-4" />
          </Link>

          {/* Mobile hamburger */}
          <button
            className="sm:hidden p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 px-5 pb-4">
          <div className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                prefetch={false}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile language selector */}
            {locale !== undefined && onLocaleChange && (
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                <Languages className="w-4 h-4 text-zinc-400 shrink-0" />
                <select
                  value={locale}
                  onChange={(e) => { onLocaleChange(e.target.value); setMenuOpen(false); }}
                  className="text-sm font-medium text-zinc-600 dark:text-zinc-400 bg-transparent border-0 focus:outline-none focus:ring-0 cursor-pointer"
                  aria-label="Select language"
                >
                  {SUPPORTED_LANGUAGES.map((l) => (
                    <option key={l.code} value={l.code}>
                      {l.native}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
