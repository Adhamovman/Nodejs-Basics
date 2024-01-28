import fs from "fs";
import path from "path";
const list = async () => {
  if (fs.existsSync(path.join(process.cwd(), "src", "fs", "files"))) {
    fs.readdirSync(path.join(process.cwd(), "src", "fs", "files")).map(
      (filename) => console.log(filename)
    );
  } else {
    throw new Error("FS operation failed!");
  }
};

await list();
