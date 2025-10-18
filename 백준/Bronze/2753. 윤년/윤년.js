const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const year = input[0];

if (year % 400 === 0) {
  console.log(1);
} else if (year % 4 === 0 && year % 100 !== 0) {
  console.log(1);
} else {
  console.log(0);
}
