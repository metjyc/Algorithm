const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const P = Number(input[0]);

for (let tc = 1; tc <= P; tc++) {
  const parts = input[tc].trim().split(" ").map(Number);
  const T = parts[0];
  const heights = parts.slice(1);
  let ans = 0;
  for (let i = 1; i < 20; i++) {
    for (let j = 0; j < i; j++) {
      if (heights[j] > heights[i]) {
        ans++;
      }
    }
  }
  console.log(T, ans);
}
