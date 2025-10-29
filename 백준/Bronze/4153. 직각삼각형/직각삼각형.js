const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  const sides = [a, b, c].sort((x, y) => x - y);
  if (sides[0] ** 2 + sides[1] ** 2 === sides[2] ** 2) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
