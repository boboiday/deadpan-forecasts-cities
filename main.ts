import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "In Varnmouth: 9°C, north-easterly winds of 52 km/h, rain falling upwards over the harbour — fishermen are advised to anchor their boats to the sky.";

if ([...line].length < 1 || [...line].length > 160) {
  throw new Error("entry must be 1-160 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
