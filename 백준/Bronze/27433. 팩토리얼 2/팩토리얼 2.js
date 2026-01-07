const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim();
const N = Number(input);

let result = 1;

for (let i = 1; i <= N; i++) {
  result *= i;
}

console.log(result);