const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const count = input[0];
const text = "*";
let i = 0;

for (let i = 1; i <= count; i++) {
  console.log(text.repeat(i));
}
