import { mkdirSync, writeFileSync } from "node:fs";

const poem = `I learned the power was never in the going —
the red light holds the street by standing still,
the rock holds the shore by refusing the wave.
My hand, unclenched, is the one that decides.
`;

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, poem, "utf8");
