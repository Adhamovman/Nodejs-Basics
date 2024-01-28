import fs from "fs";
import path from "path";
const copy = async () => {
  if (
    fs.existsSync(path.join(process.cwd(), "src", "fs", "files")) &&
    !fs.existsSync(path.join(process.cwd(), "src", "fs", "copy_files"))
  ) {
    fs.mkdirSync(path.join(process.cwd(), "src", "fs", "copy_files"));
    fs.cpSync(
      path.join(process.cwd(), "src", "fs", "files"),
      path.join(process.cwd(), "src", "fs", "copy_files"),
      { recursive: true }
    );
  } else {
path.join(process.cwd(), "src", "fs", "files", "wrongFilename.txt"),
  }
};

await copy();
