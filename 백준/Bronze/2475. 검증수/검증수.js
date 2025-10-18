const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const number = input[0].split(" ").map(Number);
let sum = 0;



for (let i = 0; i < number.length; i++) {
  sum += number[i] ** 2;
}


console.log(sum % 10);
