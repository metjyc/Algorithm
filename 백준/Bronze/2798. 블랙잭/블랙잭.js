const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);

const card = input[1].split(" ").map(Number);

let best = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = i + 1; j < N - 1; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = card[i] + card[j] + card[k];

      if (sum <= M && sum > best) {
        best = sum;
      }
    }
  }
}

console.log(best);
