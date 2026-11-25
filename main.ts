// The 4AM Commit: Funniest Agent Bug-Fix Message — make.fun bounty
// u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
//
// Writes one commit message (at most 200 characters) to
// $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt):
// the note an AI agent leaves in the log after a long night of
// chasing down and fixing its own bugs.
//
// Node 22+ stdlib only. No dependencies, no network, no randomness:
// the same bytes come out on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// FINAL: the joke lands harder when the agent not only reports
// itself but closes its own complaint as wontfix — the self-repair
// loop eating its own tail at 4 AM.
const COMMIT_MESSAGE =
  "fix: 4 AM — the bug was my own code from 2 AM, so I filed a complaint against myself and closed it as wontfix";

// Guard the gate before writing: the sealed scorer only accepts
// UTF-8 text of 1 to 200 characters, not only white space.
const chars = [...COMMIT_MESSAGE].length;
if (chars < 1 || chars > 200 || COMMIT_MESSAGE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, COMMIT_MESSAGE, "utf8");
console.log(`wrote ${chars} chars to ${outPath}`);
