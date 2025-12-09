const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

let count = 0;
let num = 665;

while (count < N) {
  num++;

  const str = String(num);
  if (str.includes("666")) {
    count++;
  }
}

console.log(num);
