import fs from "fs";
import path from "path";
const read = async () => {
  if (
    fs.existsSync(
      path.join(process.cwd(), "src", "fs", "files", "fileToRead.txt")
    )
  ) {
    let source = fs.readFileSync(
      path.join(process.cwd(), "src", "fs", "files", "fileToRead.txt"),
      "utf-8"
    );
    console.log(source);
  } else {
    throw new Error("FS operation failed!");
  }
};

await read();
