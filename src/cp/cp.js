import { spawn } from "child_process";
import path from "path";
const sendArgsToPath = path.join(
  process.cwd(),
  "src",
  "cp",
  "files",
  "script.js"
);
const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", [sendArgsToPath, ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);

  childProcess.on("error", (error) => {
    console.error(error);
  });
};

spawnChildProcess(["someArgument1", "someArgument2"]);
