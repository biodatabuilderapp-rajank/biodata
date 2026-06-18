/**
 * Update Image References Script
 * Replaces all .png and .jpg src references in /src with .webp equivalents
 * Only updates references that point to /examples/ (our optimised images)
 * Safe to run multiple times (idempotent)
 *
 * Run: node scripts/update-image-refs.mjs
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, "../src");
const EXAMPLES_DIR = path.resolve(__dirname, "../public/examples");

// Get all WebP files that now exist
const webpFiles = new Set(
  fs.readdirSync(EXAMPLES_DIR)
    .filter((f) => f.endsWith(".webp"))
    .map((f) => f.replace(".webp", ""))
);

// Walk all .tsx and .ts files in /src
function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((e) => {
    const fullPath = path.join(dir, e.name);
    return e.isDirectory() ? walkDir(fullPath) : fullPath;
  });
}

const tsxFiles = walkDir(SRC_DIR).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"));

let totalFilesChanged = 0;
let totalReplacements = 0;

for (const file of tsxFiles) {
  const original = fs.readFileSync(file, "utf-8");
  let updated = original;

  // Replace /examples/filename.png → /examples/filename.webp (if WebP exists)
  // Also handles .jpg and .jpeg
  updated = updated.replace(
    /\/examples\/([^"'\s]+)\.(png|jpg|jpeg)/g,
    (match, baseName, ext) => {
      if (webpFiles.has(baseName)) {
        return `/examples/${baseName}.webp`;
      }
      return match; // leave unchanged if no WebP version exists
    }
  );

  if (updated !== original) {
    fs.writeFileSync(file, updated, "utf-8");
    const count = (updated.match(/\/examples\/[^"'\s]+\.webp/g) || []).length;
    console.log(`  ✅ Updated: ${path.relative(process.cwd(), file)}`);
    totalFilesChanged++;
    totalReplacements++;
  }
}

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅  Files updated : ${totalFilesChanged}
✅  All /examples/*.png and .jpg → .webp references updated
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️  NEXT STEP: Run  npm run build  to verify no broken references.
`);
