import fs from "fs";
import path from "path";
import zlib from "zlib";

const decompress = async (inputFilePath, outputFilePath) => {
  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const gunzipStream = zlib.createGunzip();

  readStream.pipe(gunzipStream).pipe(writeStream);

  writeStream.on("error", (err) => {
    console.error(err);
  });
};

const gzipFilePath = path.join(
  process.cwd(),
  "src",
  "zip",
  "files",
  "archive.gz"
);
const decompressedFilePath = path.join(
  process.cwd(),
  "src",
  "zip",
  "files",
  "fileToCompress.txt"
);

await decompress(gzipFilePath, decompressedFilePath);
