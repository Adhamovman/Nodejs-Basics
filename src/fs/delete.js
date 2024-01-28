import fs from "fs";
import path from "path";
const remove = async () => {
  if (
    fs.existsSync(
      path.join(process.cwd(), "src", "fs", "files", "fileToRemove.txt")
    )
  ) {
    fs.unlinkSync(
      path.join(process.cwd(), "src", "fs", "files", "fileToRemove.txt")
    );
  } else {
    throw new Error("FS operation failed!");
  }
};

await remove();
