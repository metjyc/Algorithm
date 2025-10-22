const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const testCaseCount = input.length;

for (let i = 0; i < testCaseCount - 1; i++) {
  var [A, B] = input[i].split(" ").map(Number);
  console.log(A + B);
}
