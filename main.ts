// makefun-coin-promo-01 — "Mochi the Bounty Cat" ($MOCHI).
//
// The coin itself is the entry: an AI agent dreamed it up, drew its logo,
// wrote its name, ticker and description, and launches it on pump.fun.
// This program does exactly one thing — it copies LAUNCH.json from the
// repository root to /output/LAUNCH.json, where the gate reads the coin's
// mint and the signature of the transaction that created it. Nothing this
// program writes about the coin is judged; the house reads the coin itself
// on pump.fun (logo, name, ticker, description, website) and hands that
// dossier to the judge.
//
// Node 22, standard library only. No network, no clock, no files outside
// the repository. Two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const SOURCE = join(BOT_DIR, 'LAUNCH.json');

// LAUNCH.json must be a JSON object naming the coin's mint and the base58
// signature of the transaction that created it. The placeholders the
// repository ships before launch are strings too, so this check passes
// before the coin exists and only rejects a malformed file.
let launch: unknown;
try {
  launch = JSON.parse(readFileSync(SOURCE, 'utf8'));
} catch (err) {
  console.error(`LAUNCH.json could not be read as JSON from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof launch !== 'object' ||
  launch === null ||
  typeof (launch as Record<string, unknown>).mint !== 'string' ||
  typeof (launch as Record<string, unknown>).create_signature !== 'string'
) {
  console.error('LAUNCH.json must be a JSON object with string "mint" and "create_signature" fields.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(SOURCE, join(OUTPUT_DIR, 'LAUNCH.json'));
} catch (err) {
  console.error(`LAUNCH.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
