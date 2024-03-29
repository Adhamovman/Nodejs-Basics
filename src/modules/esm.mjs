import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import * as url from "url";
import path from "path";
import fs from "fs";
import "./files/c.js";

const random = Math.random();

let unknownObject;

unknownObject = fs.readFileSync(
  path.join(
    process.cwd(),
    "src",
    "modules",
    "files",
    `${random > 0.5 ? "a" : "b"}.json`
  ),
  "utf8"
);

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export { unknownObject, myServer };
