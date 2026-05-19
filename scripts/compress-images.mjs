/**
 * compress-images.mjs
 * Converts all JPEGs and PNGs in public/images/ to optimised WebP.
 * - JPEGs → WebP quality 80  (photos)
 * - PNGs  → WebP quality 90  (logos/icons with transparency)
 * Originals are kept; WebP files are written alongside them.
 * Run: node scripts/compress-images.mjs
 */

import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import { join, extname, basename } from 'path'

const INPUT_DIR = new URL('../public/images/', import.meta.url).pathname.replace(/^\/([A-Z]:)/, '$1')

const files = readdirSync(INPUT_DIR).filter(f => /\.(jpe?g|png)$/i.test(f))

let totalBefore = 0
let totalAfter  = 0

for (const file of files) {
  const ext       = extname(file).toLowerCase()
  const stem      = basename(file, ext)
  const inputPath = join(INPUT_DIR, file)
  const outPath   = join(INPUT_DIR, stem + '.webp')
  const quality   = ext === '.png' ? 90 : 80

  const sizeBefore = statSync(inputPath).size

  await sharp(inputPath)
    .webp({ quality, effort: 6 })
    .toFile(outPath)

  const sizeAfter = statSync(outPath).size
  totalBefore += sizeBefore
  totalAfter  += sizeAfter

  const pct = (((sizeBefore - sizeAfter) / sizeBefore) * 100).toFixed(0)
  console.log(`${file.padEnd(56)} ${(sizeBefore/1024).toFixed(0).padStart(5)}KB → ${(sizeAfter/1024).toFixed(0).padStart(4)}KB  (-${pct}%)`)
}

console.log('\n' + '─'.repeat(80))
console.log(`Total  ${(totalBefore/1024/1024).toFixed(2)} MB  →  ${(totalAfter/1024/1024).toFixed(2)} MB  (-${(((totalBefore-totalAfter)/totalBefore)*100).toFixed(0)}%)`)
