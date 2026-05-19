/**
 * resize-images.mjs
 * Resizes each image to 2× its maximum CSS display width so browsers
 * don't download a 1920px image for a 500px slot.
 * Run: node scripts/resize-images.mjs
 */

import sharp from 'sharp'
import { statSync, writeFileSync, readFileSync, unlinkSync } from 'fs'
import { join } from 'path'

const DIR = new URL('../public/images/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')

// max display width on desktop × 2 for HiDPI
const SIZES = {
  // Hero — full-bleed, keep large
  'DSC_3500-G.webp':        1920,

  // Home — about section main image (50% column on 1200px container)
  'DSC_3362-G.webp':        1100,

  // Home — about thumbnails (half of the above column)
  'DSC_3433-G.webp':         700,
  'DSC_3522-G.webp':         700,

  // Home + Services page — service card images (~550px slot)
  'DSC_3364-G.webp':        1100,
  'DSC_3475-G.webp':        1100,

  // Services page — full-width section image (~600px slot)
  'architecture-bureau-worker-drawing-sketches-office_1098-18821.webp': 1200,

  // Portfolio — grid items (~400px slot × 2)
  'DSC_3346-G.webp':         800,
  'DSC_3348-G.webp':         800,
  'DSC_3339-G.webp':         800,
  'DSC_3373-G.webp':         800,
  'DSC_3405-GM.webp':        800,
  'DSC_3408-GM.webp':        800,
  'DSC_3425-G.webp':         800,
  'DSC_3426-G.webp':         800,
  'DSC_3437-G.webp':         800,
  'DSC_3465-G.webp':         800,
  'DSC_3472-G-1.webp':       800,
  'DSC_3515-G.webp':         800,
  'DSC_3556-G.webp':         800,
  'DSC_3366-G.webp':         800,
  'DSC_3368-G.webp':         800,
  'DSC_3382-G.webp':         800,
  'DSC_3417-GM.webp':        800,

  // Logo — max 160px displayed, 320px for retina
  'default-90-1.webp':       320,

  // Icons — displayed at 50–52px, 104px for retina
  'badge-1.webp':            104,
  'collaborate.webp':        104,
  'costumer.webp':           104,
  'creativity-1.webp':       104,
  'honesty-1.webp':          104,
  'secure-shield-1.webp':    104,
  'transparency.webp':       104,

  // Favicon
  'favicon.webp':             64,
}

let totalBefore = 0
let totalAfter  = 0

for (const [file, maxW] of Object.entries(SIZES)) {
  const path = join(DIR, file)
  const sizeBefore = statSync(path).size
  const meta = await sharp(path).metadata()

  if (meta.width <= maxW) {
    console.log(`${file.padEnd(64)} already ≤ ${maxW}px — skipped`)
    totalBefore += sizeBefore
    totalAfter  += sizeBefore
    continue
  }

  // Read fully into memory first so sharp releases the file handle
  const inputBuffer = readFileSync(path)
  const buffer = await sharp(inputBuffer)
    .resize({ width: maxW, withoutEnlargement: true })
    .webp({ quality: 82, effort: 6 })
    .toBuffer()

  unlinkSync(path)
  writeFileSync(path, buffer)

  const sizeAfter = statSync(path).size
  totalBefore += sizeBefore
  totalAfter  += sizeAfter
  const pct = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(0)
  console.log(`${file.padEnd(64)} ${meta.width}px→${maxW}px  ${(sizeBefore/1024).toFixed(0).padStart(5)}KB→${(sizeAfter/1024).toFixed(0).padStart(4)}KB  (-${pct}%)`)
}

console.log('\n' + '─'.repeat(80))
console.log(`Total  ${(totalBefore/1024/1024).toFixed(2)} MB  →  ${(totalAfter/1024/1024).toFixed(2)} MB  (-${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(0)}%)`)
