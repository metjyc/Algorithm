const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = input[0];

for (let i = 1; i <= n; i++) {
  console.log(i);
}
