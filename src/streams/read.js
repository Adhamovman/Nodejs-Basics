import { createReadStream } from "fs";
import readline from "readline";
import path from "path";

const read = async (filePath) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  const stream = createReadStream(filePath);

  stream.on("data", (chunk) => {
    let text = chunk.toString();
    rl.write(text);
  });

  stream.on("error", (error) => {
    throw new Error(error.message);
  });
};
const filePath = path.join(
  process.cwd(),
  "src",
  "streams",
  "files",
  "fileToRead.txt"
);

await read(filePath);
