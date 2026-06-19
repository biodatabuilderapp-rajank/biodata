/**
 * Batch-injects Article + BreadcrumbList JSON-LD schemas into all articles
 * that currently only have FAQPage schema.
 *
 * Run: node scripts/add-article-schemas.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ARTICLES_DIR = path.resolve(__dirname, "../src/app/articles");

// Articles that already have Article + BreadcrumbList — skip these
const ALREADY_DONE = new Set([
  "biodata-for-marriage",
  "lagna-biodata-format-marathi",
  "vivah-biodata-format-hindi",
]);

// Per-article metadata: title, description, image, slug, date, articleName
// Used to generate accurate schemas per article
const ARTICLE_META = {
  "best-marriage-biodata-format-for-hindu": {
    title: "Best Marriage Biodata Format for Hindu",
    desc: "Create the best Hindu marriage biodata format online for free. Beautiful templates with Gotra, Nakshatra, and Kundali details. Download PDF instantly.",
    img: "/examples/Hindu-biodata-example.webp",
    date: "2026-06-15",
    name: "Best Hindu Marriage Biodata Format",
  },
  "biodata-format-for-whatsapp": {
    title: "Biodata Format for WhatsApp — Share as PDF or PNG",
    desc: "How to share your marriage biodata on WhatsApp as a perfect PDF or PNG image. Tips on format, size, and sharing etiquette.",
    img: "/examples/whatsapp-biodata-infographic.webp",
    date: "2026-06-15",
    name: "Biodata Format for WhatsApp",
  },
  "biodata-format-hindi": {
    title: "Biodata Format in Hindi — Vivah Biodata (विवाह बायोडाटा)",
    desc: "Create a beautiful marriage biodata format in Hindi online for free. Download vivah biodata PDF in Hindi with all essential fields.",
    img: "/examples/Hindi-biodata-fields-infographic.webp",
    date: "2026-06-12",
    name: "Biodata Format in Hindi",
  },
  "biodata-format-word-download": {
    title: "Biodata Format Word Download — Why PDF Is Better",
    desc: "Looking for a marriage biodata format Word download? Discover why PDF is the better choice and how to create a perfect biodata online for free.",
    img: "/examples/word_vs_pdf_biodata_infographic.webp",
    date: "2026-06-15",
    name: "Biodata Format Word Download",
  },
  "biodata-for-second-marriage": {
    title: "Biodata for Second Marriage — Complete Guide",
    desc: "How to create a biodata for second marriage in India. What to include, what to omit, and how to present your profile confidently.",
    img: "/examples/Second-marriage-biodata-example.webp",
    date: "2026-06-14",
    name: "Biodata for Second Marriage",
  },
  "biodata-tips": {
    title: "Biodata Tips — Photos, Mistakes & Hobbies to Avoid",
    desc: "Expert tips for a perfect marriage biodata. Avoid common mistakes in photo selection, hobbies, and formatting for a great first impression.",
    img: "/examples/Biodata-hobbies-good-bad.webp",
    date: "2026-06-13",
    name: "Biodata Tips for Marriage",
  },
  "biodata-vs-resume-difference": {
    title: "Biodata vs Resume — Key Differences Explained",
    desc: "What is the difference between a biodata and a resume? A clear comparison of biodata vs CV vs resume for Indian job and marriage contexts.",
    img: "/examples/biodata-vs-resume-infographic.webp",
    date: "2026-06-15",
    name: "Biodata vs Resume Difference",
  },
  "how-to-write-biodata-about-me": {
    title: "How to Write About Me in Biodata — Examples & Tips",
    desc: "How to write the About Me section in a marriage biodata. Real examples, do's and don'ts, and phrases that make a great impression.",
    img: "/examples/About-me-biodata-samples.webp",
    date: "2026-06-11",
    name: "How to Write About Me in Biodata",
  },
  "kundali-details-in-biodata": {
    title: "Kundali Details in Marriage Biodata — What to Include",
    desc: "Which Kundali details to include in your marriage biodata — Rashi, Nakshatra, Gotra, Manglik status explained with examples.",
    img: "/examples/kundali_components_infographic.webp",
    date: "2026-06-15",
    name: "Kundali Details in Biodata",
  },
  "lagna-biodata-format-gujarati": {
    title: "Lagna Biodata Format in Gujarati — Free Download",
    desc: "Create a beautiful Gujarati lagna biodata format online for free. Download your vivah biodata in Gujarati as a PDF instantly.",
    img: "/examples/Girl-biodata-example-Gujarati.webp",
    date: "2026-06-15",
    name: "Lagna Biodata Format Gujarati",
  },
  "manglik-biodata-format": {
    title: "Manglik Biodata Format — How to Mention Manglik Status",
    desc: "How to correctly mention Manglik status in a marriage biodata. Sample formats and tips for Manglik and non-Manglik profiles.",
    img: "/examples/manglik-biodata-infographic.webp",
    date: "2026-06-15",
    name: "Manglik Biodata Format",
  },
  "marriage-biodata-for-boy": {
    title: "Marriage Biodata for Boy — Format, Tips & Examples",
    desc: "How to create a marriage biodata for a boy in India. What sections to include, sample formats, and tips for making a great impression.",
    img: "/examples/boy_biodata_infographic.webp",
    date: "2026-06-15",
    name: "Marriage Biodata for Boy",
  },
  "marriage-biodata-format-for-christian": {
    title: "Marriage Biodata Format for Christian — Free Template",
    desc: "Create a beautiful Christian marriage biodata format online for free. Includes all essential fields for Christian matrimonial profiles.",
    img: "/examples/christian-biodata-infographic.webp",
    date: "2026-06-15",
    name: "Christian Marriage Biodata Format",
  },
  "marriage-biodata-format-for-muslim": {
    title: "Marriage Biodata Format for Muslim — Free Template",
    desc: "Create a beautiful Muslim marriage biodata format online for free. Includes Islamic biodata fields and beautiful templates.",
    img: "/examples/muslim-biodata-infographic.webp",
    date: "2026-06-15",
    name: "Muslim Marriage Biodata Format",
  },
  "marriage-biodata-statistics-india": {
    title: "Marriage Biodata Statistics in India (2026)",
    desc: "Key statistics on how Indian families use marriage biodata. Data on arranged marriages, biodata sharing, and matrimonial trends in India.",
    img: "/examples/india-marriage-statistics-infographic-2024.webp",
    date: "2026-06-15",
    name: "Marriage Biodata Statistics India",
  },
  "modern-vs-traditional-biodata": {
    title: "Modern vs Traditional Biodata Format — Which Is Better?",
    desc: "Compare modern and traditional marriage biodata formats. Which style is right for your family? Examples, pros and cons included.",
    img: "/examples/modern_vs_traditional_infographic.webp",
    date: "2026-06-15",
    name: "Modern vs Traditional Biodata",
  },
  "shaadi-biodata-format-for-girl": {
    title: "Shaadi Biodata Format for Girl — Free Template",
    desc: "Create a beautiful shaadi biodata format for a girl online for free. Elegant templates for Hindu, Muslim, and Christian girl biodata.",
    img: "/examples/girl_biodata_infographic.webp",
    date: "2026-06-15",
    name: "Shaadi Biodata Format for Girl",
  },
  "simple-biodata-format-for-job-pdf": {
    title: "Simple Biodata Format for Job — PDF Download Free",
    desc: "Create a simple biodata format for job applications in India. Download a clean, professional job biodata as PDF for free.",
    img: "/examples/Job-biodata-structure.webp",
    date: "2026-06-15",
    name: "Simple Biodata Format for Job",
  },
  "thirumanam-biodata-format-tamil": {
    title: "Thirumanam Biodata Format in Tamil — Free Download",
    desc: "Create a beautiful Tamil thirumanam biodata format online for free. Download your Tamil marriage biodata as a PDF instantly.",
    img: "/examples/tamil-biodata-infographic.webp",
    date: "2026-06-15",
    name: "Thirumanam Biodata Format Tamil",
  },
  "vivah-biodata-format-telugu": {
    title: "Vivah Biodata Format in Telugu — Free Download",
    desc: "Create a beautiful Telugu vivah biodata format online for free. Download your Telugu marriage biodata as a PDF instantly.",
    img: "/examples/telugu_biodata_infographic.webp",
    date: "2026-06-15",
    name: "Vivah Biodata Format Telugu",
  },
};

let updated = 0;
let skipped = 0;

for (const [slug, meta] of Object.entries(ARTICLE_META)) {
  if (ALREADY_DONE.has(slug)) {
    console.log(`  ⏭  Skipping (already done): ${slug}`);
    skipped++;
    continue;
  }

  const filePath = path.join(ARTICLES_DIR, slug, "page.tsx");
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  File not found: ${slug}`);
    continue;
  }

  const original = fs.readFileSync(filePath, "utf-8");

  // Check if already has Article schema
  if (original.includes('"@type": "Article"') || original.includes('"@type":"Article"')) {
    console.log(`  ✅ Already has Article schema: ${slug}`);
    skipped++;
    continue;
  }

  // Build the two schema blocks to inject
  const breadcrumbSchema = `
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://biodatabuilder.in/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://biodatabuilder.in/articles" },
    { "@type": "ListItem", position: 3, name: "${meta.name}", item: "https://biodatabuilder.in/articles/${slug}" },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "${meta.title}",
  description: "${meta.desc}",
  image: "${meta.img}",
  datePublished: "${meta.date}",
  dateModified: "2026-06-18",
  author: { "@type": "Organization", name: "BiodataBuilder" },
  publisher: { "@type": "Organization", name: "BiodataBuilder", logo: { "@type": "ImageObject", url: "https://biodatabuilder.in/favicon.png" } },
};`;

  // Find where faqSchema const ends — inject after it
  // Look for the pattern: the const before export default
  const exportDefaultMatch = original.match(/\nexport default function/);
  if (!exportDefaultMatch) {
    console.log(`  ❌ Could not find export default in: ${slug}`);
    continue;
  }

  // Inject schema constants before export default
  const insertBefore = "\nexport default function";
  const updated_content = original.replace(
    insertBefore,
    `${breadcrumbSchema}\n${insertBefore}`
  );

  // Now inject the <script> tags into the JSX return
  // Find the first <> or <ArticleWrapper opening and add scripts before it
  const scriptTags = `      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />\n`;

  // Find the return (<> or return ( followed by <ArticleWrapper
  const finalContent = updated_content.replace(
    /(\s*return\s*\(\s*\n\s*<>)/,
    `$1\n${scriptTags}`
  );

  if (finalContent === original) {
    console.log(`  ⚠️  Pattern not matched (no <>): ${slug}`);
    continue;
  }

  fs.writeFileSync(filePath, finalContent, "utf-8");
  console.log(`  ✅ Updated: ${slug}`);
  updated++;
}

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Articles updated : ${updated}
⏭   Already done    : ${skipped}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
