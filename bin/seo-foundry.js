#!/usr/bin/env node
"use strict";

const { spawn } = require("node:child_process");
const path = require("node:path");

function printHelp() {
  console.log(`seo-foundry - unified CLI for SEO tools\n\n` +
    `Usage:\n` +
    `  seo-foundry <tool> [args...]\n\n` +
    `Tools:\n` +
    `  pixel-forge    Generate social/OG images, favicons, and visual assets\n\n` +
    `Examples:\n` +
    `  seo-foundry pixel-forge generate --config ./seo-config.json\n` +
    `  seo-foundry pixel-forge favicon --input ./logo.png\n`);
}

const args = process.argv.slice(2);
if (args.length === 0 || ["-h", "--help"].includes(args[0])) {
  printHelp();
  process.exit(0);
}

const [tool, ...toolArgs] = args;

const toolToBin = {
  "pixel-forge": "pixel-forge"
};

const bin = toolToBin[tool];
if (!bin) {
  console.error(`Unknown tool: ${tool}`);
  printHelp();
  process.exit(1);
}

const isWindows = process.platform === "win32";
const localBin = path.join(__dirname, "..", "node_modules", ".bin", isWindows ? `${bin}.cmd` : bin);

const child = spawn(localBin, toolArgs, {
  stdio: "inherit",
  shell: false
});

child.on("exit", (code) => process.exit(code ?? 0));


