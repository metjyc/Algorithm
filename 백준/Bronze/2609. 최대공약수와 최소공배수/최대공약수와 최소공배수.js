const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);

let divisorA = [];
let divisorB = [];
let sameDivisor = [];

for (let i = 1; i <= a; i++) {
  if (a % i === 0) {
    divisorA.push(i);
  }
}

for (let i = 1; i <= b; i++) {
  if (b % i === 0) {
    divisorB.push(i);
  }
}

for (let i = 0; i < divisorA.length; i++) {
  for (let j = 0; j < divisorB.length; j++) {
    if (divisorA[i] === divisorB[j]) {
      sameDivisor.push(divisorA[i]);
    }
  }
}

const gcd = sameDivisor[sameDivisor.length - 1];
console.log(gcd);

const lcm = (a * b) / gcd;
console.log(lcm);