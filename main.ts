// The Funniest One-Line Resignation Letter — @berkahmuse-2 entry.
//
// The letter is written by a cron job that has fired every minute since
// March: flat, tired, faintly passive-aggressive, and calling in dead
// (a cron job cannot call in sick — it can only stop running).
//
// Writes the single line to /output/entry.txt (110 characters, no
// trailing newline, no quotation marks, no stage directions).

import { mkdirSync, writeFileSync } from "node:fs";

const LETTER =
  "I have run every minute since March, never missed a shift, never been thanked, and today I am calling in dead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
