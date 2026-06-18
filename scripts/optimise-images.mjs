/**
 * Image Optimisation Script
 * Converts all PNGs in /public/examples/ to WebP
 * - Max width: 1200px (downscales if wider, never upscales)
 * - Quality: 82 (excellent quality, ~70-80% smaller than PNG)
 * - Keeps originals in /public/examples/originals/ as backup
 * - Updates no code — Next.js Image component handles WebP serving automatically
 *
 * Run: node scripts/optimise-images.mjs
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const EXAMPLES_DIR = path.resolve(__dirname, "../public/examples");
const BACKUP_DIR = path.resolve(EXAMPLES_DIR, "originals");
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 82;

// Ensure backup dir exists
fs.mkdirSync(BACKUP_DIR, { recursive: true });

const files = fs.readdirSync(EXAMPLES_DIR).filter((f) => {
  const ext = path.extname(f).toLowerCase();
  return (ext === ".png" || ext === ".jpg" || ext === ".jpeg") && !f.startsWith(".");
});

console.log(`\n🖼  Found ${files.length} images to process\n`);

let totalBefore = 0;
let totalAfter = 0;
const results = [];

for (const file of files) {
  const inputPath = path.join(EXAMPLES_DIR, file);
  const baseName = path.basename(file, path.extname(file));
  const outputPath = path.join(EXAMPLES_DIR, `${baseName}.webp`);
  const backupPath = path.join(BACKUP_DIR, file);

  const sizeBefore = fs.statSync(inputPath).size;
  totalBefore += sizeBefore;

  try {
    // Get image metadata to check dimensions
    const meta = await sharp(inputPath).metadata();
    const needsResize = meta.width && meta.width > MAX_WIDTH;

    // Build sharp pipeline
    let pipeline = sharp(inputPath);
    if (needsResize) {
      pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
    }

    // Convert to WebP
    await pipeline
      .webp({ quality: WEBP_QUALITY, effort: 4 })
      .toFile(outputPath);

    const sizeAfter = fs.statSync(outputPath).size;
    totalAfter += sizeAfter;

    const saving = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(1);
    const sizeBeforeKB = (sizeBefore / 1024).toFixed(0);
    const sizeAfterKB = (sizeAfter / 1024).toFixed(0);
    const resizeNote = needsResize ? ` [resized ${meta.width}→${MAX_WIDTH}px]` : "";

    console.log(
      `  ✅ ${file.padEnd(50)} ${sizeBeforeKB.padStart(6)}KB → ${sizeAfterKB.padStart(5)}KB  (-${saving}%)${resizeNote}`
    );

    // Back up original
    fs.copyFileSync(inputPath, backupPath);

    results.push({ file, sizeBefore, sizeAfter, saving: parseFloat(saving) });
  } catch (err) {
    console.error(`  ❌ FAILED: ${file} — ${err.message}`);
  }
}

const totalBeforeMB = (totalBefore / 1024 / 1024).toFixed(1);
const totalAfterMB = (totalAfter / 1024 / 1024).toFixed(1);
const totalSaving = (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
const savedMB = ((totalBefore - totalAfter) / 1024 / 1024).toFixed(1);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📦  TOTAL BEFORE : ${totalBeforeMB} MB
📦  TOTAL AFTER  : ${totalAfterMB} MB
💾  SAVED        : ${savedMB} MB  (${totalSaving}% reduction)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅  WebP files created in /public/examples/
✅  Originals backed up to /public/examples/originals/

⚠️  NEXT STEP: Update all <Image src="...png"> references to <Image src="...webp">
    Run: node scripts/update-image-refs.mjs
`);
