const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const memory = [];

for (let i = 0; i < A.length; i++) {
  if (A[i] < X) {
    memory.push(A[i]);
  }
}

console.log(memory.join(" "));
