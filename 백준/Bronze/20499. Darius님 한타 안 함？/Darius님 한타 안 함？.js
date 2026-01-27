const fs = require("fs");

const s = fs.readFileSync(0, "utf8").trim();
const [K, D, A] = s.split("/").map(Number);

if (D === 0 || K + A < D) {
  console.log("hasu");
} else {
  console.log("gosu");
}