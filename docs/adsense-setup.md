# AdSense Setup & Ad Slot Management

This document explains how to go from zero to live ads — including local testing,
production activation, and updating individual ad unit IDs whenever you create new
units in the AdSense dashboard.

---

## Architecture Overview

| File | Role |
|------|------|
| `src/components/AdSlot.tsx` | The single reusable ad component. All slots go through this. |
| `src/app/layout.tsx` | Loads the AdSense `<script>` tag (already present). |
| `.env.local` | Local dev overrides — never committed to git. |
| `.env.production` | Production env vars — create this file when going live. |

**How the kill switch works:**  
Every `<AdSlot>` checks `process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true"` on render.
If it's not `"true"`, the component returns `null` — no DOM output, no AdSense calls,
no console errors. The site works exactly as if ads don't exist.

**Auto Ads vs Manual Placement:**  
We use **manual placement only**. Auto Ads are disabled in the AdSense dashboard.
Do NOT re-enable Auto Ads — they will inject ads into the download overlay and
break the user experience.

---

## Step 1 — Enable Ads Locally (for testing layout)

Your `.env.local` already has this set:

```
NEXT_PUBLIC_ADSENSE_ENABLED=true
```

With a placeholder slot ID (e.g. `YOUR_CREATE_SIDEBAR_AD_SLOT_ID`), the component
renders a **dashed grey test box** showing the ad format and dimensions. This lets
you inspect layout without triggering any real AdSense calls.

When you replace a placeholder with a real slot ID, it will attempt to load a real ad.
On localhost, AdSense won't fill it (your domain isn't approved for localhost), but the
`<ins>` tag will be present in the DOM and you can verify there are no console errors.

---

## Step 2 — Enable Ads in Production

Create a `.env.production` file in the project root (next to `package.json`):

```bash
# .env.production
NEXT_PUBLIC_ADSENSE_ENABLED=true
```

> **Important:** `.env.production` is gitignored (`.env*` is in `.gitignore`).
> If you use Vercel or another host, set `NEXT_PUBLIC_ADSENSE_ENABLED=true`
> in the hosting dashboard's environment variables instead of committing the file.

For Vercel:
1. Go to your project → Settings → Environment Variables
2. Add `NEXT_PUBLIC_ADSENSE_ENABLED` = `true`
3. Set scope to **Production** only (not Preview/Development unless you want it there)
4. Redeploy

---

## Step 3 — Disable Auto Ads in AdSense Dashboard

Before deploying, do this **once** in the AdSense dashboard:

1. Log in to [adsense.google.com](https://adsense.google.com)
2. Go to **Ads** → **By site** → click on `biodatabuilder.in`
3. Turn **Auto ads** OFF
4. Save

This is critical. Auto Ads + manual `<ins>` tags conflict. Auto Ads can inject
ads inside the download overlay and break the layout.

---

## Step 4 — Create Ad Units & Get Slot IDs

For each placement below, create a new ad unit in AdSense:

1. Go to **Ads** → **By ad unit** → **New ad unit**
2. Choose **Display ads**
3. Name it clearly (e.g. "Create Page — Sidebar 300x250")
4. Copy the **slot ID** (the number, not the full script)

### All Ad Slots — Replacement Table

Search for each placeholder string in the codebase and replace with your real slot ID.

| Placeholder String | File | Format | Page | Notes |
|--------------------|------|--------|------|-------|
| `YOUR_CREATE_SIDEBAR_AD_SLOT_ID` | `src/app/create/_CreatePage.tsx` | 300×250 display | /create | Desktop sidebar, sticky |
| `YOUR_CREATE_MOBILE_TOP_AD_SLOT_ID` | `src/app/create/_CreatePage.tsx` | 300×250 display | /create | Mobile, above-the-fold |
| `YOUR_CREATE_AFTER_HELP_AD_SLOT_ID` | `src/app/create/_CreatePage.tsx` | Banner (728×90) | /create | Mobile, below Help section |
| `YOUR_PREVIEW_LEFT_AD_SLOT_ID` | `src/app/preview/page.tsx` | 300×250 display | /preview | Desktop, left column, always visible |
| `YOUR_PREVIEW_MOBILE_TOP_AD_SLOT_ID` | `src/app/preview/page.tsx` | Banner (728×90) | /preview | Mobile, above biodata canvas |
| `YOUR_ARTICLE_TOP_AD_SLOT_ID` | `src/components/ArticleWrapper.tsx` | Banner (728×90) | All articles | Above article body |
| `YOUR_ARTICLE_BOTTOM_AD_SLOT_ID` | `src/components/ArticleWrapper.tsx` | Banner (728×90) | All articles | Above related articles |
| `YOUR_ARTICLE_SIDEBAR_AD_SLOT_ID` | `src/components/ArticleWrapper.tsx` | 300×250 display | All articles | Desktop sidebar, sticky |
| `YOUR_HOME_MID_AD_SLOT_ID` | `src/app/page.tsx` | Responsive | Homepage | Between How It Works and Themes |

### Quick find-and-replace (terminal)

To see all slots that still have placeholder IDs:

```bash
grep -rn "YOUR_" src/ --include="*.tsx"
```

---

## Step 5 — Update the Affiliate Promo (Download Overlay)

The download buffer overlay shows an affiliate card, not an AdSense ad.
It's configured via environment variables so you can change it without a code deploy.

Edit `.env.local` (local) or your hosting env vars (production):

```bash
# Download overlay affiliate promo
NEXT_PUBLIC_DOWNLOAD_PROMO_LABEL=Recommended
NEXT_PUBLIC_DOWNLOAD_PROMO_TITLE=Share your biodata clearly on WhatsApp
NEXT_PUBLIC_DOWNLOAD_PROMO_DESCRIPTION=A quick guide to sending PDF or PNG biodata files without losing quality.
NEXT_PUBLIC_DOWNLOAD_PROMO_CTA=View guide
NEXT_PUBLIC_DOWNLOAD_AFFILIATE_URL=/articles/biodata-format-for-whatsapp
```

To point it to an external affiliate (e.g. Shaadi.com):
```bash
NEXT_PUBLIC_DOWNLOAD_PROMO_LABEL=Sponsored
NEXT_PUBLIC_DOWNLOAD_PROMO_TITLE=Find your match on Shaadi.com
NEXT_PUBLIC_DOWNLOAD_PROMO_DESCRIPTION=India's most trusted matrimony platform. Create your profile free.
NEXT_PUBLIC_DOWNLOAD_PROMO_CTA=Create Profile Free
NEXT_PUBLIC_DOWNLOAD_AFFILIATE_URL=https://www.shaadi.com/?ref=biodatabuilder
```

The `href` value accepts both internal paths (`/articles/...`) and external URLs.
Always add `rel="sponsored noopener noreferrer"` — this is already in the component.

---

## AdSlot Component — Quick Reference

```tsx
<AdSlot
    slotId="unique-id"           // Used for the DOM id — must be unique per page
    adSlot="1234567890"          // Your AdSense ad unit ID (10-digit number)
    format="display"             // "display" | "banner" | "responsive" | "vertical"
    label="Advertisement"        // Text above the ad. Pass label="" to hide.
    className="mt-0"             // Extra Tailwind classes on the wrapper div
/>
```

| Format | Dimensions | Best used for |
|--------|-----------|---------------|
| `display` | 300×250 | Sidebar, mobile top slot |
| `banner` | 728×90 (responsive width) | Horizontal placements, mobile strips |
| `responsive` | Full width, auto height | Homepage, article body |
| `vertical` | 300×600 | Tall sidebars (not currently used) |

### Local placeholder behaviour

When `NEXT_PUBLIC_ADSENSE_ENABLED=true` AND the `adSlot` prop is still a placeholder
(starts with `YOUR_` or equals `0000000000`), the component renders a **dashed grey
test box** in development mode only. In production builds it renders nothing (returns
null). This prevents fake boxes showing to real users if you accidentally deploy with
a placeholder slot ID.

---

## Checklist Before Going Live

- [ ] AdSense account approved for `biodatabuilder.in`
- [ ] Auto Ads turned OFF in AdSense dashboard
- [ ] All `YOUR_*` placeholder slot IDs replaced with real 10-digit unit IDs
- [ ] `NEXT_PUBLIC_ADSENSE_ENABLED=true` set in production environment
- [ ] AdSense `<script>` in `src/app/layout.tsx` has your `ca-pub-XXXXXXXXXXXXXXXX` (already set)
- [ ] Test one download to confirm overlay affiliate link works
- [ ] Verify no ads appear inside `#biodata-preview-container` (would corrupt PDF)
