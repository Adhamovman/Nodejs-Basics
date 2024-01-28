import fs from "fs";
import path from "path";
const create = async () => {
  if (fs.existsSync(path.join(process.cwd() + "/src/fs/files", "fresh.txt"))) {
    throw new Error("FS operation failed!");
  } else {
     fs.writeFileSync(
      path.join(process.cwd() + "/src/fs/files", "fresh.txt"),
      "I am fresh and young."
    );
  }
};

await create();
