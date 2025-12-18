const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);

const dp = Array.from({ length: 41 }, () => [0, 0]);

dp[0] = [1, 0];
dp[1] = [0, 1];

for (let i = 2; i <= 40; i++) {
  dp[i][0] = dp[i - 1][0] + dp[i - 2][0];
  dp[i][1] = dp[i - 1][1] + dp[i - 2][1];
}

let idx = 1;

let answer = [];

for (let i = 0; i < N; i++) {
  const n = Number(input[idx++]);
  answer.push(`${dp[n][0]} ${dp[n][1]}`);
}

console.log(answer.join("\n"));
