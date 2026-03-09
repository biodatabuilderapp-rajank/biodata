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
