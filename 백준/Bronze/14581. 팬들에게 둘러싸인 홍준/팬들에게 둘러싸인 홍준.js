const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const arr = input[0];

console.log(":fan::fan::fan:");
console.log(`:fan::${arr}::fan:`);
console.log(":fan::fan::fan:");
