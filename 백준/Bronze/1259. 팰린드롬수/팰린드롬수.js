const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = input;

for (let i = 0; i < numbers.length; i++) {
  let str = numbers[i].toString();
  if (str === "0") break;
  let reversed = str.split("").reverse().join("");
  if (str === reversed) {
    console.log("yes");
  } else console.log("no");
}
