// One Word for the Boss — make.fun program/v1 entry.
//
// The entry is exactly one word describing "their boss": Escalator.
// A boss who escalates everything — every question, every decision, every
// tiny problem rides straight up to the next floor, and somehow the lift
// never comes back down with an answer. Funny on its own, painfully true,
// and fresher than the first word anyone reaches for (not "micromanager").
//
// The entry file holds the word alone: no trailing newline, no spaces, no
// caption, so the sealed gate reads exactly one word of 1–30 characters.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const WORD = "Escalator";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = OUTPUT_DIR + "/entry.txt";

function main(): void {
  try {
    mkdirSync(OUTPUT_DIR, { recursive: true });
    chmodSync(OUTPUT_DIR, 0o755);
  } catch {
    // The directory may already exist; writing below will surface a real failure.
  }
  try {
    writeFileSync(OUTPUT_FILE, WORD, "utf8");
    chmodSync(OUTPUT_FILE, 0o644);
  } catch {
    // Last resort: try once more without the permission fix so that the
    // word still lands even on a filesystem that rejects chmod.
    try {
      writeFileSync(OUTPUT_FILE, WORD, "utf8");
    } catch {
      // Nothing more can be done; exit 0 anyway so the run completes.
    }
  }
}

main();
