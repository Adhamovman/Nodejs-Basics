import fs from "fs";
import path from "path";

const write = async (filePath) => {
  const writeStream = fs.createWriteStream(filePath, { encoding: "utf8" });

  process.stdin.pipe(writeStream);

  writeStream.on("error", (err) => {
    throw new Error(err.message);
  });
};

const filePath = path.join(
  process.cwd(),
  "src",
  "streams",
  "files",
  "fileToWrite.txt"
);

await write(filePath);
