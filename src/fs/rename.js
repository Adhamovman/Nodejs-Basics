import fs from "fs";
import path from "path";
const rename = async () => {
  if (
    fs.existsSync(
      path.join(process.cwd(), "src", "fs", "files", "wrongFilename.txt")
    ) &&
    !fs.existsSync(
      path.join(process.cwd(), "src", "fs", "files", "properFilename.md")
    )
  ) {
    fs.renameSync(
      path.join(process.cwd(), "src", "fs", "files", "wrongFilename.txt"),
      path.join(process.cwd(), "src", "fs", "files", "properFilename.md")
    );
  } else {
    throw new Error("FS operation failed!");
  }
};

await rename();
