const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const len = Number(input[0]);

for (let i = 1; i <= len; i++) {
  console.log(" ".repeat(len - i) + "*".repeat(i));
}
