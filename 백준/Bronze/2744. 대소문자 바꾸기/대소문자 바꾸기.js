const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

let result = "";

for (let ch of input) {
  if (ch === ch.toUpperCase()) {
    result += ch.toLowerCase();
  } else {
    result += ch.toUpperCase();
  }
}

console.log(result);