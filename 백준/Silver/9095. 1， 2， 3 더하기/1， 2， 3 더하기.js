const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const n = input.slice(1).map(Number);

const maxN = Math.max(...n);

const dp = Array(T + 1).fill(0);
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= maxN; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

let answer = [];
for (let i = 0; i < T; i++) {
  answer.push(dp[n[i]]);
}

console.log(answer.join("\n"));
