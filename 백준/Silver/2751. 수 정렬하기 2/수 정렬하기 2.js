const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = input.slice(1).map(Number);

N.sort((a, b) => a - b);

console.log(N.join("\n"));
