const fs = require("fs");

const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

console.log(`         ,r'"7`);
console.log("r`-_   ,'  ,/");
console.log(` \\. ". L_r'`);
console.log("   `~\\/");
console.log("      |");
console.log("      |");
