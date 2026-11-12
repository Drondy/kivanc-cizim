/**
 * Kıvanç'ın Çizim Atölyesi — Tam Katalog Bütünlük Denetleyicisi
 * Kullanım: node scripts/audit_catalog.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const repoDir = path.resolve(__dirname, "..");
const drawingsPath = path.join(repoDir, "drawings.js");
const code = fs.readFileSync(drawingsPath, "utf8");

const ctx = {};
vm.runInNewContext(
  code + "\nthis.CATS = CATEGORIES_DATA; this.DRW = DRAWINGS_DATA;",
  ctx
);

const cats = ctx.CATS || [];
const drawings = ctx.DRW || [];

let totalSteps = 0;
let blueGuides = 0;
let missingAudio = 0;
let emptyAudio = 0;
let badSvg = 0;
const seenIds = new Set();
const byCategory = {};

for (const d of drawings) {
  if (!d.id || seenIds.has(d.id)) {
    throw new Error("Duplicate or missing drawing id: " + d.id);
  }
  seenIds.add(d.id);
  byCategory[d.categoryId] = (byCategory[d.categoryId] || 0) + 1;

  if (d.welcomeAudio) {
    const wp = path.join(repoDir, d.welcomeAudio);
    if (!fs.existsSync(wp)) {
      console.error("Missing welcomeAudio:", d.id, d.welcomeAudio);
      missingAudio++;
    } else if (fs.statSync(wp).size < 200) {
      console.error("Too small welcomeAudio:", d.id, d.welcomeAudio);
      emptyAudio++;
    }
  } else {
    console.error("No welcomeAudio field:", d.id);
    missingAudio++;
  }

  for (let i = 0; i < d.steps.length; i++) {
    totalSteps++;
    const st = d.steps[i];
    if (st.audio) {
      const sp = path.join(repoDir, st.audio);
      if (!fs.existsSync(sp)) {
        console.error("Missing step audio:", d.id, "step", i + 1, st.audio);
        missingAudio++;
      } else if (fs.statSync(sp).size < 200) {
        console.error("Too small step audio:", d.id, "step", i + 1, st.audio);
        emptyAudio++;
      }
    } else {
      console.error("No audio property:", d.id, "step", i + 1);
      missingAudio++;
    }

    const svgLower = (st.svg || "").toLowerCase();
    if (svgLower.includes("<svg")) {
      console.error("Wrapped <svg tag inside step svg:", d.id, "step", i + 1);
      badSvg++;
    }
    if (i < d.steps.length - 1 && svgLower.includes("#3b82f6")) {
      console.error("Blue guide (#3b82f6) found:", d.id, "step", i + 1);
      blueGuides++;
    }
  }
}

const catAll = cats.find((c) => c.id === "all");
const catSonic = cats.find((c) => c.id === "sonic");

const report = {
  catAllCount: catAll ? catAll.count : null,
  catSonicCount: catSonic ? catSonic.count : null,
  totalDrawings: drawings.length,
  uniqueDrawings: seenIds.size,
  byCategory,
  totalSteps,
  missingAudio,
  emptyAudio,
  blueGuides,
  badSvg,
};

console.log(JSON.stringify(report, null, 2));

const failed =
  drawings.length === 0 ||
  seenIds.size !== drawings.length ||
  (catAll && catAll.count !== drawings.length) ||
  (catSonic && catSonic.count !== (byCategory.sonic || 0)) ||
  missingAudio > 0 ||
  emptyAudio > 0 ||
  blueGuides > 0 ||
  badSvg > 0;

if (failed) {
  process.exit(1);
}
