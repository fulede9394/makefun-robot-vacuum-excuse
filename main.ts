import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Robot vacuum excuse: the dust needed time to reflect.
const LINE =
  "I didn't miss that spot — I was giving the dust a chance to reflect on its choices.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
