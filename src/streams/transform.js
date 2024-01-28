import { Transform } from "stream";

const transform = async () => {
  class ReverseTransform extends Transform {
    constructor() {
      super();
    }
    _transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split("").reverse().join("");
      this.push(reversedText);
      callback();
    }
  }
  const reverseTransformStream = new ReverseTransform();
  process.stdin.pipe(reverseTransformStream).pipe(process.stdout);

};

await transform();
