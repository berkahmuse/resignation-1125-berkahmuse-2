// The Funniest One-Line Resignation Letter — @berkahmuse-2 entry.
//
// The letter is written by a cron job that has fired every minute since
// March: flat, tired, faintly passive-aggressive, and calling in dead
// (a cron job cannot call in sick — it can only stop running).
//
// The entry text is a fixed constant: it is never assembled or reformatted
// at runtime. Writes the single line to /output/entry.txt (110 characters,
// no trailing newline, no quotation marks, no stage directions).

import { mkdirSync, writeFileSync } from "node:fs";

// Gate from RULES.txt: the letter must be a single line of 1–140 characters.
const MIN_LENGTH = 1;
const MAX_LENGTH = 140;

const ENTRY_LINE =
  "I have run every minute since March, never missed a shift, never been thanked, and today I am calling in dead.";

// Refuse to write a malformed letter instead of silently emitting one.
function validateEntry(line: string): void {
  if (line.length < MIN_LENGTH || line.length > MAX_LENGTH) {
    throw new Error(
      `entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${line.length}`,
    );
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // One line means one line: a stray newline would split the letter in two.
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY_LINE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
}

main();
