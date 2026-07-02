import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const dataFile = path.join(root, "app", "openkga", "_data", "datasets.jsx");
const publicDir = path.join(root, "public");
const outputDir = path.join(publicDir, "SharedDataThumbnail", "social");
const source = await fs.readFile(dataFile, "utf8");
const datasetPattern = /  \{\r?\n    slug: "([^"]+)",[\s\S]*?\r?\n    coverImage: "([^"]+)",/g;
const datasets = [...source.matchAll(datasetPattern)].map((match) => ({
  slug: match[1],
  coverImage: match[2],
}));

await fs.mkdir(outputDir, { recursive: true });

for (const dataset of datasets) {
  if (!dataset.coverImage.startsWith("/")) {
    console.warn(`Skipping remote thumbnail for ${dataset.slug}`);
    continue;
  }

  const input = path.join(publicDir, dataset.coverImage.replace(/^\/+/, ""));
  const output = path.join(outputDir, `${dataset.slug}.jpg`);

  await sharp(input)
    .resize(1200, 630, { fit: "cover", position: "centre" })
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(output);

  console.log(`Generated ${path.relative(root, output)}`);
}

console.log(`Generated ${datasets.length} OpenKGA social preview images.`);
