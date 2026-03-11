import Link from "next/link";
import Logo from "@/components/Logo";
import { MoveRight, FileText, Image as ImageIcon, Download, CheckCircle2, Star, Sparkles, Shield, Smartphone, Zap, Languages } from "lucide-react";
import ClientThemeGallery from "@/components/ClientThemeGallery";

const STEPS = [
  {
    number: "01",
    title: "Fill Your Details",
    description: "Enter your personal, family, and contact information in our simple, guided form.",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-950/30",
    border: "border-violet-100 dark:border-violet-900/50",
  },
  {
    number: "02",
    title: "Choose a Theme",
    description: "Pick from beautiful, professionally designed biodata templates that suit your style.",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50 dark:bg-rose-950/30",
    border: "border-rose-100 dark:border-rose-900/50",
  },
  {
    number: "03",
    title: "Download Instantly",
    description: "Export your stunning biodata in high-quality PDF or PNG format — ready to share.",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-100 dark:border-amber-900/50",
  },
];

const FEATURES = [
  {
    icon: <Shield className="w-5 h-5" />,
    title: "100% Free Forever",
    description: "No hidden charges, no subscriptions. Create unlimited biodatas for free.",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Beautiful Themes",
    description: "Professionally crafted templates matching every tradition and personal taste.",
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Instant Download",
    description: "Your biodata is generated and downloaded in seconds — no waiting.",
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile Friendly",
    description: "Works perfectly on any device — phone, tablet, or desktop.",
    color: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-50 dark:bg-sky-950/30",
  },
  {
    icon: <ImageIcon className="w-5 h-5" />,
    title: "PDF & PNG Export",
    description: "Download as printable PDF or shareable PNG image — your choice.",
    color: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-50 dark:bg-rose-950/30",
  },
  {
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: "No Sign-up Needed",
    description: "Start creating immediately. No account, no email, no sign-up required.",
    color: "text-indigo-600 dark:text-indigo-400",
    bg: "bg-indigo-50 dark:bg-indigo-950/30",
  },
  {
    icon: <Languages className="w-5 h-5" />,
    title: "6 Indian Languages",
    description: "Create biodata in Hindi, Gujarati, Marathi, Tamil, Telugu, or English — your choice.",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-50 dark:bg-teal-950/30",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    text: "Made my biodata in under 10 minutes! The templates are so elegant and the PDF quality is excellent. Highly recommended to everyone looking for a quick, beautiful biodata.",
    rating: 5,
  },
  {
    name: "Rahul Patel",
    location: "Ahmedabad, Gujarat",
    text: "Simple to use and completely free. I was looking for something that looks professional and this delivered exactly that. The theme selection is amazing.",
    rating: 5,
  },
  {
    name: "Anjali Verma",
    location: "Delhi, NCR",
    text: "Loved the profile photo feature and the god icon selector. It made our biodata look very traditional and beautiful. Downloaded in PNG and it looks great when shared on WhatsApp!",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "Is this biodata maker completely free?",
    a: "Yes! Creating, previewing, and downloading your biodata is 100% free with no hidden charges or subscriptions.",
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can start creating your biodata immediately without any registration or sign-up.",
  },
  {
    q: "What formats can I download my biodata in?",
    a: "You can download your biodata as a high-quality PDF (ideal for printing) or PNG image (ideal for sharing on WhatsApp).",
  },
  {
    q: "Can I add my profile photo?",
    a: "Yes! You can upload and crop your profile photo and choose between a circular or square frame.",
  },
  {
    q: "Which languages are supported?",
    a: "You can create your biodata in English, Hindi (हिंदी), Gujarati (ગુજરાતી), Marathi (मराठी), Tamil (தமிழ்), and Telugu (తెలుగు). Simply select your language at the top of the form — field labels and section titles will be translated automatically.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans">

      {/* Navigation */}
      <nav className="border-b border-zinc-100 dark:border-zinc-900 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md fixed top-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <Logo />
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <Link href="#how-it-works" className="hover:text-zinc-900 dark:hover:text-white transition-colors">How it Works</Link>
            <Link href="#themes" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Themes</Link>
            <Link href="#faq" className="hover:text-zinc-900 dark:hover:text-white transition-colors">FAQ</Link>
          </div>
          <Link
            href="/create"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm transition-all shadow-md shadow-indigo-500/25 hover:shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Create Free
            <MoveRight className="w-4 h-4" />
          </Link>
        </div>
      </nav>

      <main>
        {/* ========== HERO ========== */}
        <section className="pt-32 pb-20 px-5 bg-gradient-to-b from-indigo-50/60 via-white to-white dark:from-indigo-950/20 dark:via-zinc-950 dark:to-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-100 dark:border-indigo-900 text-indigo-700 dark:text-indigo-400 text-sm font-medium">
              <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
              100% Free · No Sign-up Required
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6 leading-[1.1]">
              Create your perfect
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500">
                marriage biodata
              </span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
              Choose from beautiful Indian biodata templates, fill in your details, and instantly download a stunning biodata in PDF or PNG — completely free, no account needed.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4 sm:px-0">
              <Link
                href="/create"
                className="group flex h-12 sm:h-14 items-center justify-center gap-2 sm:gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 sm:px-8 text-white font-semibold text-sm sm:text-base transition-all hover:shadow-2xl hover:shadow-indigo-500/25 hover:-translate-y-1 shadow-lg shadow-indigo-500/20 w-full sm:w-auto"
              >
                <span>Create Biodata<span className="hidden sm:inline"> Now — It's Free</span></span>
                <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 shrink-0" />
              </Link>
              <Link
                href="#how-it-works"
                className="flex h-12 sm:h-14 items-center justify-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 px-6 sm:px-8 text-zinc-700 dark:text-zinc-300 font-medium text-sm sm:text-base hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all w-full sm:w-auto"
              >
                See How It Works
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-zinc-500 dark:text-zinc-500">
              {["No registration", "Instant download", "High-quality PDF & PNG", "Completely free", "6 Indian languages"].map(t => (
                <div key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== HOW IT WORKS ========== */}
        <section id="how-it-works" className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Create your biodata in 3 easy steps</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STEPS.map((step, i) => (
                <div key={i} className={`relative p-8 rounded-3xl border ${step.border} ${step.bg}`}>
                  <div className={`inline-flex w-12 h-12 rounded-2xl items-center justify-center text-white font-bold text-lg mb-5 bg-gradient-to-br ${step.color} shadow-lg`}>
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">{step.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{step.description}</p>
                  {i < STEPS.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-3 z-10 text-zinc-300 dark:text-zinc-700">
                      <MoveRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-10 px-4 sm:px-0">
              <Link
                href="/create"
                className="flex sm:inline-flex justify-center items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold text-sm hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all shadow-md hover:shadow-lg w-full sm:w-auto max-w-xs mx-auto"
              >
                Start Creating Now
                <MoveRight className="w-4 h-4 shrink-0" />
              </Link>
            </div>
          </div>
        </section>

        {/* ========== THEME GALLERY ========== */}
        <section id="themes" className="py-20 px-5 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Beautiful Themes</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">Pick a theme that reflects your style</h2>
              <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto">
                From traditional to modern, we have a growing collection of biodata templates crafted with love.
              </p>
            </div>

            {/* Dynamic theme preview grid — shows 4 random themes optimized for mobile/desktop layout */}
            <ClientThemeGallery />

            <div className="text-center mt-8 sm:mt-10 px-4 sm:px-0">
              <Link
                href="/create"
                className="flex sm:inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 font-semibold text-sm hover:bg-indigo-100 dark:hover:bg-indigo-900/30 transition-all w-full sm:w-auto max-w-xs mx-auto"
              >
                <FileText className="w-4 h-4 shrink-0" />
                Browse All Themes
              </Link>
            </div>
          </div>
        </section>

        {/* ========== FEATURES ========== */}
        <section className="py-20 px-5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Why Choose Us</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Everything you need, nothing you don't</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-zinc-200 dark:hover:border-zinc-700 transition-all group">
                  <div className={`inline-flex w-10 h-10 rounded-xl items-center justify-center ${f.bg} ${f.color} mb-5`}>
                    {f.icon}
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TESTIMONIALS ========== */}
        <section className="py-20 px-5 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Loved By Many</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">What people are saying</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 shadow-sm">
                  <div className="flex mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star key={si} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed mb-5">"{t.text}"</p>
                  <div>
                    <div className="font-semibold text-zinc-900 dark:text-white text-sm">{t.name}</div>
                    <div className="text-xs text-zinc-500">{t.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== FAQ ========== */}
        <section id="faq" className="py-20 px-5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-3">Quick Answers</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">Frequently asked questions</h2>
            </div>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <div key={i} className="p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <h3 className="font-semibold text-zinc-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== CTA BANNER ========== */}
        <section className="py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-12 md:p-16 text-center overflow-hidden">
              {/* decorative blobs */}
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-white/10 blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to create your biodata?</h2>
                <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">
                  Join thousands of people who created beautiful biodatas in minutes — completely free.
                </p>
                <Link
                  href="/create"
                  className="flex sm:inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-indigo-700 font-bold text-sm sm:text-base hover:bg-indigo-50 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto"
                >
                  <span>Create My Biodata<span className="hidden sm:inline"> — Free</span></span>
                  <MoveRight className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========== FOOTER ========== */}
      <footer className="border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 py-12 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <Logo className="mb-4" />
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
                Create beautiful Indian marriage biodatas for free. No sign-up, no charges — just a stunning biodata in minutes.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-white text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                <li><Link href="/" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</Link></li>
                <li><Link href="/create" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Create Biodata</Link></li>
                <li><Link href="#how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">How It Works</Link></li>
                <li><Link href="#faq" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-zinc-900 dark:text-white text-sm mb-4">Legal</h4>
              <ul className="space-y-2.5 text-sm text-zinc-500 dark:text-zinc-400">
                <li><Link href="/privacy-policy" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Terms of Use</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-100 dark:border-zinc-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
            <p>© {new Date().getFullYear()} BiodataBuilder. All rights reserved.</p>
            <p>Made with ❤️ for Indian families</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
