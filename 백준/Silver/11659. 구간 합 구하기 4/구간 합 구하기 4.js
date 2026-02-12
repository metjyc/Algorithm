const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

const prefix = Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  prefix[i] = prefix[i - 1] + arr[i - 1];
}

let idx = 2;
let out = [];

for (let k = 0; k < M; k++) {
  const [start, end] = input[idx++].split(" ").map(Number);
  out.push(prefix[end] - prefix[start - 1]);
}

console.log(out.join("\n"));
