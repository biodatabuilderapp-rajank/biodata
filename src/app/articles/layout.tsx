import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: {
    template: "%s — BiodataBuilder",
    default: "Biodata Format Guides & Tips",
  },
  description: "Learn how to create the perfect marriage and job biodata with our expert guides, format examples, and comparisons.",
  alternates: { canonical: "https://biodatabuilder.in/articles" },
  openGraph: { url: "https://biodatabuilder.in/articles" },
};

export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 font-sans flex flex-col">
      <SiteNav activeHref="/articles" />

      <main className="flex-1 pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
