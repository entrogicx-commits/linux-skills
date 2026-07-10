import { exec } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(exec);

const command = process.argv.slice(2).join(" ");

const blocked = [
  "rm",
  "shutdown",
  "reboot",
  "mkfs",
  "dd",
  "sudo",
];

if (!command) {
  console.error("Command required");
  process.exit(1);
}

if (blocked.some((cmd) => command.includes(cmd))) {
  console.error("Blocked command");
  process.exit(1);
}

(async () => {
  try {
    const { stdout } = await run(command);

    console.log(stdout);
  } catch (err) {
    console.error(err);
  }
})();