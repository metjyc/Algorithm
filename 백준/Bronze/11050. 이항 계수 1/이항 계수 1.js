const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim();

const [N, K] = input.split(" ").map(Number);

let n = 1;
let k = 1;

for (let i = 0; i < K; i++) {
  n *= N - i;
  k *= K - i;
}

console.log(n / k);

