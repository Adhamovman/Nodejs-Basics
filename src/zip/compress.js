import fs from "fs";
import path from "path";
import zlib from "zlib";
const compress = async (inputFilePath, outputFilePath) => {
  const readStream = fs.createReadStream(inputFilePath);
  const writeStream = fs.createWriteStream(outputFilePath);
  const gzipStream = zlib.createGzip();

  readStream.pipe(gzipStream).pipe(writeStream);

  writeStream.on("error", (err) => {
    console.error(err);
  });
};

const compressingFilePath = path.join(
  process.cwd(),
  "src",
  "zip",
  "files",
  "fileToCompress.txt"
);
const gzipFilePath = path.join(
  process.cwd(),
  "src",
  "zip",
  "files",
  "archive.gz"
);
await compress(compressingFilePath, gzipFilePath);
