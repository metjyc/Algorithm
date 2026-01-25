const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);
const [C, D] = input[1].split(" ").map(Number);

const hanyang = A + C;
const yongdap = B + D;

if (hanyang < yongdap) {
  console.log("Hanyang Univ.");
} else if (hanyang > yongdap) {
  console.log("Yongdap");
} else {
  console.log("Either");
}