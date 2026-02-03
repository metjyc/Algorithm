const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const A = input[0];
const B = input[1];

const result = (A + B) * (A - B);
// 또는: const result = A * A - B * B;

console.log(result);