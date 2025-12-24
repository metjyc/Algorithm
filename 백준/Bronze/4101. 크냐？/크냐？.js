const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const [A, B] = input[i].split(" ").map(Number);

  if (A === 0 && B === 0) break;

  if (A > B) console.log("Yes");
  else console.log("No");
}
