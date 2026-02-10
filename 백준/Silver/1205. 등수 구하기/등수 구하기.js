const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, tScore, P] = input[0].split(" ").map(Number);
let score = [];
if (N > 0) {
  score = input[1].split(" ").map(Number);
}

if (N === 0) {
  console.log(1);
  process.exit(0);
}

const last = score[N - 1];

if (N === P && tScore <= last) {
  console.log(-1);
  process.exit(0);
}

let count = 0;
for (let i = 0; i < N; i++) {
  if (score[i] > tScore) {
    count++;
  } else {
    break;
  }
}

console.log(count + 1);
