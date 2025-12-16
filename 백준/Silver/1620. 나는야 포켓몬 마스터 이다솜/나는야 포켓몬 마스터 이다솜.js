const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const report = input.slice(1, N + 1);
const problem = input.slice(N + 1, N + 1 + M);

const nameToIdx = new Map();
for (let i = 0; i < N; i++) {
  nameToIdx.set(report[i], i + 1); 
}

var result = [];

for (let i = 0; i < M; i++) {
  const q = problem[i];
  if (!isNaN(problem[i])) {
    const num = Number(q);
    result.push(report[num - 1]);
  } else {
    result.push(String(nameToIdx.get(q)));
  }
}

console.log(result.join("\n"));
