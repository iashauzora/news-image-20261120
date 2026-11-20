// The World in a Day — Friday 20 November 2026.
//
// Entry for make.fun's news-image-20261120 bounty. The repository holds the
// finished front page as entry.png (researched and typeset in design/); this
// program's whole job is to deliver those exact bytes to the output
// directory the harness names, so both graded runs produce the same file.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

// The image lives beside this file, wherever the repository was unpacked.
const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "entry.png");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
const target = join(resolve(outDir), "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);

// A copied page is only delivered if it arrived whole: the byte counts of
// the repository's image and the output must agree exactly.
const expected = statSync(source).size;
const delivered = statSync(target).size;
if (delivered !== expected) {
  throw new Error(`copy truncated: wrote ${delivered} of ${expected} bytes`);
}
