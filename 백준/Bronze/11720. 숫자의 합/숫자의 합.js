const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const len = Number(input[0]);
const number = input[1].split("").map((num) => {
  return Number(num);
});

let sum = 0;

for (let i = 0; i < len; i++) {
  sum += number[i];
}

console.log(sum);
