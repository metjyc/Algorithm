const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
// console.log(N);

const size = input[1].split(" ").map(Number);
// console.log(size);

const [bundleSizeT, bundleSizeP] = input[2].split(" ").map(Number);

let tCount = 0;
let pCount = 0;
let singleP = 0;

for (let i = 0; i < size.length; i++) {
  tCount += Math.ceil(size[i] / bundleSizeT);
}

pCount += N / bundleSizeP;
singleP += N % bundleSizeP;

console.log(tCount);
console.log(Math.floor(pCount), singleP);
