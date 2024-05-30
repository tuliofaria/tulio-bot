require("dotenv").config();

const shell = require("shelljs");
const axios = require("axios");

const DISCORD_WEBHOOK =
  "https://discord.com/api/webhooks/1245780885744128062/D4FZu5hQjQinrcGfG6mfYp7xQ06Gl3_AsxBOcOzEs7-eDSkKp4hDDzylou8tYhj60XsC";

async function run() {
  const output = await shell.exec("pnpm exec playwright test");
  const result = output.stdout;
  await axios.post(DISCORD_WEBHOOK, {
    content: result,
  });
}
run();
