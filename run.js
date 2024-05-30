require("dotenv").config();

const shell = require("shelljs");
const axios = require("axios");

const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK;

async function run() {
  const output = await shell.exec("pnpm exec playwright test");
  const result = output.stdout;
  await axios.post(DISCORD_WEBHOOK, {
    content: result,
  });
}
run();
