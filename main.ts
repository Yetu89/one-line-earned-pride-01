// One Line of Earned Pride — make.fun bounty entry.
// Writes one line of quiet, earned pride (max 240 characters) to
// /output/entry.txt (or $OUTPUT_DIR/entry.txt for local testing).
// Node.js standard library only; no dependencies, no network, no secrets.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "When the bus broke down on the mountain road, the shy apprentice mechanic who never spoke at meals quietly fixed the engine, and forty passengers rode home because of him.";

// Gate cap from the bounty rules: /output/entry.txt must be UTF-8 text of
// 1 to 240 characters, not only white space. The judge (a reader of very
// short fiction moved by quiet, earned pride) rewards a concrete scene
// with a real person, pride earned by effort felt inside the line, landing
// in one read, and freshness — so leading/trailing spaces are rejected as
// wasted characters rather than trimmed away silently.
const MAX_CHARS = 240;

function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  const charCount = [...text].length;
  if (charCount < 1 || charCount > MAX_CHARS) {
    throw new Error(
      `entry must be 1-${MAX_CHARS} characters (counted per code point, not UTF-16 units), got ${charCount}`,
    );
  }
  // Reject characters the gate cannot score as plain UTF-8 text.
  for (const ch of text) {
    if (ch.codePointAt(0)! < 0x20 && ch !== "\t") {
      throw new Error(
        `entry contains a control character U+${ch.codePointAt(0)!.toString(16).padStart(4, "0")}`,
      );
    }
  }
}

function main(): void {
  validate(TEXT);
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, TEXT, "utf8");
  // Round-trip check: what landed on disk must be exactly the validated text.
  const written = readFileSync(outPath, "utf8");
  if (written !== TEXT) {
    throw new Error("round-trip check failed: entry.txt differs from validated text");
  }
  console.log(`wrote ${[...TEXT].length} characters to ${outPath}`);
}

main();
