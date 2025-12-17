const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0].split(" ").map(Number);
const times = input[1].split(" ").map(Number);
const sortedTimes = times.sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < N; i++) {
  result += sortedTimes[i];
  sortedTimes[i + 1] += sortedTimes[i];
}

console.log(result);
