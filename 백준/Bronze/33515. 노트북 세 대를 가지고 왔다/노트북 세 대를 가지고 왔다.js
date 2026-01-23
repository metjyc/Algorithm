const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [T1, T2] = input[0].split(" ").map(Number);
let bigger = 0;

if (T1 > T2) {
  bigger = T2;
  console.log(T2);
} else {
  console.log(T1);
}
