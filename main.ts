import { mkdirSync, writeFileSync } from "node:fs";

const partA = "The all-hands ran 12 minutes over to remind us ";
const partB = "that time management is a core value.";
const line = partA + partB;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
