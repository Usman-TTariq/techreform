/**
 * Fills empty alt="" on next/image <Image> and <img> tags using each tag's src.
 * Run: node scripts/fix-empty-image-alts.mjs
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "app");

/** Map URL or path substring → alt text (first match wins) */
const SRC_RULES = [
  { match: "whatwedobk_wisvaz.webp", alt: "Soft purple abstract gradient background decoration" },
  { match: "whatwedobk_wl6wjg.webp", alt: "Purple gradient background decoration for services section" },
  { match: "bk1_qqglcc.webp", alt: "Warm orange abstract light burst behind Who We Are section" },
  { match: "herolaptop.png", alt: "Laptop displaying business and app development visuals on hero" },
  { match: "Group%202147225267.png", alt: "Decorative abstract graphic accent on hero" },
  { match: "frame2_h4xmpf.webp", alt: "Decorative frame graphic on hero section" },
  { match: "iphone_bdeijn.png", alt: "iPhone mockup showing mobile app case study screens" },
  { match: "phones_djllco.png", alt: "Multiple smartphone mockups for app case studies" },
  { match: "footerbk1.png", alt: "Footer decorative gradient background top left" },
  { match: "footerbk2.png", alt: "Footer decorative gradient background bottom right" },
  { match: "footerline.png", alt: "Decorative horizontal divider line in footer" },
  { match: "circlewithdot.png", alt: "Animated circular graphic with center dot" },
  { match: "phone-icon.png", alt: "Phone contact icon" },
  { match: "mail-icon.png", alt: "Email contact icon" },
  { match: "location.png", alt: "Office location map pin icon" },
  { match: "globeicon.png", alt: "Globe icon representing global industries coverage" },
  { match: "bulbicon.png", alt: "Light bulb icon highlighting innovation and ideas" },
  { match: "checkitkc.png", alt: "Green checkmark icon for included feature" },
  { match: "keyicon.png", alt: "Key icon representing HR or access feature" },
  { match: "last.png", alt: "HR platform illustration with team and interface" },
  { match: "gamingicon.png", alt: "App or game service icon" },
  { match: "user1.png", alt: "Customer testimonial portrait" },
  { match: "user2.png", alt: "Customer testimonial portrait" },
  { match: "user3.png", alt: "Customer testimonial portrait" },
];

function altForSrc(src) {
  if (!src) return "Illustration supporting page content";
  const decoded = decodeURIComponent(src);
  for (const { match, alt } of SRC_RULES) {
    if (decoded.includes(match) || src.includes(match)) return alt;
  }
  if (src.includes("cloudinary.com")) return "Supporting illustration for Tech Reforms website section";
  if (src.includes("imagekit.io")) return "Supporting illustration for Tech Reforms website section";
  if (src.startsWith("/images/")) {
    const base = path.basename(src, path.extname(src));
    const words = base.replace(/[-_]/g, " ").replace(/\d+/g, (n) => ` ${n} `).trim();
    const titled = words.replace(/\b\w/g, (c) => c.toUpperCase());
    return `${titled || "Supporting"} illustration`;
  }
  return "Illustration supporting page content";
}

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, name.name);
    if (name.isDirectory()) walk(p, out);
    else if (/\.(jsx|tsx)$/.test(name.name)) out.push(p);
  }
  return out;
}

function processFile(filePath) {
  let s = fs.readFileSync(filePath, "utf8");
  const original = s;

  // Match Image ... src="..." ... alt="" (alt may be on same line or few lines after src within same tag)
  const imageTagRe = /<Image\b[\s\S]*?(?=\/>|>)/g;
  s = s.replace(imageTagRe, (tag) => {
    if (!/alt=\{?"\s*"\}?/.test(tag) && !/alt=\{\s*""\s*\}/.test(tag)) return tag;
    const srcM = tag.match(/src=\{?"([^"]+)"\}?/);
    const src = srcM ? srcM[1] : "";
    const alt = altForSrc(src);
    let next = tag.replace(/alt=\{?"\s*"\}?/g, `alt="${alt.replace(/"/g, '\\"')}"`);
    next = next.replace(/alt=\{\s*""\s*\}/g, `alt="${alt.replace(/"/g, '\\"')}"`);
    return next;
  });

  // <img ... alt="" />
  const imgTagRe = /<img\b[\s\S]*?\/?>/gi;
  s = s.replace(imgTagRe, (tag) => {
    if (!/alt=\{?"\s*"\}?/.test(tag)) return tag;
    const srcM = tag.match(/src=\{?"([^"]+)"\}?/i);
    const src = srcM ? srcM[1] : "";
    const alt = altForSrc(src);
    return tag.replace(/alt=\{?"\s*"\}?/g, `alt="${alt.replace(/"/g, '\\"')}"`);
  });

  if (s !== original) fs.writeFileSync(filePath, s, "utf8");
}

const files = walk(ROOT);
let changed = 0;
for (const f of files) {
  const before = fs.readFileSync(f, "utf8");
  processFile(f);
  if (fs.readFileSync(f, "utf8") !== before) changed++;
}
console.log(`Processed ${files.length} files, updated ${changed} files.`);
