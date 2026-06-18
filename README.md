# BiodataBuilder — Free Marriage Biodata Maker

**Website:** [biodatabuilder.in](https://biodatabuilder.in)
**Contact:** biodatabuilderapp@gmail.com

A free, no-sign-up Indian marriage biodata maker built with Next.js. Users fill in their details, pick a beautiful theme, and instantly download their biodata as a high-quality PDF or PNG.

---

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS
- **Export:** `html-to-image` + `jsPDF`
- **Icons:** Lucide React

---

## Getting Started (Development)

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Home page (hero, features, SEO)
│   ├── layout.tsx            # Root layout (metadata, JSON-LD, AdSense)
│   ├── sitemap.ts            # Auto-generated sitemap
│   ├── robots.ts             # robots.txt
│   ├── create/               # Biodata form page
│   ├── preview/              # Preview, theme selection & download page
│   ├── faq/                  # FAQ page
│   ├── privacy-policy/       # Privacy Policy page
│   ├── terms/                # Terms of Use page
│   └── api/themes/           # API route: scans public/themes for available themes
├── components/
│   ├── BiodataForm.tsx       # Multi-section form with inline editing
│   ├── BiodataPreview.tsx    # Preview component (reads ThemeMeta styles)
│   ├── AdSlot.tsx            # Google AdSense slot (plug-and-play)
│   ├── ImageCropper.tsx      # Profile photo crop modal
│   └── GodIconSelector.tsx   # God icon picker modal
public/
├── themes/                   # Theme PNG files + JSON metadata (theme-1.png, theme-1.json, ...)
└── god_icons/                # God icon images
```

## Adding New Themes

The application includes an intelligent Python script that organically extracts aesthetic colors and safe padding anchors directly from image borders.

1. Drop your high-resolution theme image (`theme-N.png`) into `public/themes/`.
2. Open your terminal and activate the Python virtual environment:
   ```bash
   cd public/themes
   source .venv/bin/activate
   ```
3. Run the generator script:
   ```bash
   python generate_missing_jsons.py
   ```
4. The script will instantaneously scan your folder, locate the new `theme-N.png`, mathematically derive its dominant border hue and optimal `<cqi>` padding limits, and output a perfectly formatted `theme-N.json` configuration file!

*Note: The `/api/themes` endpoint automatically scans the folder, so no Next.js code changes are needed when dropping new themes.*

---

## Activating Google AdSense

Follow these steps **after** AdSense approves your site:

### Step 1 — Get Your Publisher ID
Log in to [Google AdSense](https://adsense.google.com) and copy your publisher ID. It looks like: `ca-pub-XXXXXXXXXXXXXXXX`.

### Step 2 — Enable the AdSense Script
Open `src/app/layout.tsx` and uncomment this block (update with your real publisher ID):

```tsx
// Before (commented out):
{/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous" /> */}

// After (uncommented + real ID):
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_REAL_ID" crossOrigin="anonymous" />
```

### Step 3 — Enable the AdSlot Component
In your `.env.production` file (create if it doesn't exist), add:

```env
NEXT_PUBLIC_ADSENSE_ENABLED=true
```

This flips the `<AdSlot>` component from "render nothing" to "render the ad unit".

### Step 4 — Place Your Ad Units
`<AdSlot>` is already imported-ready. Add it in strategic places:

```tsx
import AdSlot from "@/components/AdSlot";

// Usage example:
<AdSlot
  slotId="home-below-steps"
  adClient="ca-pub-XXXXXXXXXXXXXXXX"
  adSlot="1234567890"
  className="my-6"
/>
```

Recommended placements (already marked with `// TODO: AdSlot` comments):
- Home page: below "How it Works" section
- Create page: below the form
- Preview page: below the theme selector

### Step 5 — Initialize Ad Units (in `layout.tsx`)
After uncommenting the AdSense script, also add this inside `<body>`:

```tsx
<Script id="adsense-init" strategy="afterInteractive">
  {`(adsbygoogle = window.adsbygoogle || []).push({});`}
</Script>
```

---

## SEO Configuration

All SEO settings live in `src/app/layout.tsx`:
- Title, description, keywords
- OpenGraph and Twitter card metadata
- JSON-LD structured data (`SoftwareApplication` schema)
- `metadataBase` set to `https://biodatabuilder.in`

**OG Image:** Place a 1200×630px image at `public/og-image.png` for social sharing previews.

---

## Maintenance Scripts

Utility scripts live in `scripts/`. Run them from the **project root**.

### Prerequisites

The scripts require the `sharp` image processing library (already in `devDependencies`):

```bash
npm install
```

---

### 1. Image Optimisation — `scripts/optimise-images.mjs`

Converts all PNG and JPG images in `/public/examples/` to WebP format.

**What it does:**
- Converts every `.png` / `.jpg` / `.jpeg` to `.webp` (quality 82)
- Downscales images wider than **1200px** (never upscales)
- Backs up all originals to `/public/examples/originals/` before overwriting
- Prints a per-file report and total savings summary

**When to run:** Whenever you add new images to `/public/examples/`.

```bash
node scripts/optimise-images.mjs
```

**Example output:**
```
🖼  Found 52 images to process

  ✅ Hero-composite.png          3656KB →   87KB  (-97.6%) [resized 4150→1200px]
  ✅ Boy-biodata-example.png     1886KB →   62KB  (-96.7%) [resized 2000→1200px]
  ...

📦  TOTAL BEFORE : 93.0 MB
📦  TOTAL AFTER  : 5.8 MB
💾  SAVED        : 87.1 MB  (93.7% reduction)
```

> **Note:** After running this script, always run `update-image-refs.mjs` next to update the code.

---

### 2. Update Image References — `scripts/update-image-refs.mjs`

Updates all `<Image src="...png">` references in `/src` to point to the new `.webp` files.

**What it does:**
- Scans every `.tsx` and `.ts` file in `/src`
- Replaces `/examples/filename.png` (and `.jpg`) → `/examples/filename.webp`
- Only replaces references where a `.webp` version actually exists (safe)
- Idempotent — safe to run multiple times

**When to run:** Immediately after running `optimise-images.mjs`.

```bash
node scripts/update-image-refs.mjs
```

**Example output:**
```
  ✅ Updated: src/app/articles/biodata-for-marriage/page.tsx
  ✅ Updated: src/app/articles/marriage-biodata-for-boy/page.tsx
  ...

✅  Files updated : 23
✅  All /examples/*.png and .jpg → .webp references updated
```

---

### Full Workflow (Adding New Images)

```bash
# 1. Drop new image(s) into /public/examples/

# 2. Convert to WebP + resize
node scripts/optimise-images.mjs

# 3. Update all code references
node scripts/update-image-refs.mjs

# 4. Verify the build passes
npm run build

# 5. Commit
git add public/examples/ src/
git commit -m "perf: add and optimise new images"
```

---

## Deployment

Recommended: **[Vercel](https://vercel.com)** (one-click Next.js deploy)

```bash
# Build for production
npm run build

# Start production server
npm start
```

After deploying, submit your sitemap to [Google Search Console](https://search.google.com/search-console):
```
https://biodatabuilder.in/sitemap.xml
```
