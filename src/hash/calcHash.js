import { createReadStream } from "fs";
import { createHash } from "crypto";
import path from "path";

const calculateHash = async (filePath) => {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    const stream = createReadStream(filePath);

    stream.on("data", (data) => {
      hash.update(data);
    });

    stream.on("end", () => {
      const hashResult = hash.digest("hex");
      resolve(hashResult);
    });

    stream.on("error", (error) => {
      reject(error);
    });
  });
};

let filePath = path.join(
  process.cwd(),
  "src",
  "hash",
  "files",
  "fileToCalculateHashFor.txt"
);
console.log(await calculateHash(filePath));
