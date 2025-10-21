const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

console.log("|\\_/|");
console.log("|q p|   /}");
console.log('( 0 )"""\\');
console.log('|"^"`    |');
console.log("||_/=\\\\__|");
