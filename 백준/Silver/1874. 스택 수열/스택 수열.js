const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const target = input.slice(1).map(Number);
const stack = [];
const result = [];

let nextPush = 1;

for (let i = 0; i < N; i++) {
  const cur = target[i];

  while (cur >= nextPush) {
    stack.push(nextPush);
    result.push("+");
    nextPush++;
  }

  const top = stack[stack.length - 1];

  if (top === cur) {
    stack.pop();
    result.push("-");
  } else {
    console.log("NO");
    process.exit(0);
  }
}

console.log(result.join("\n"));
