const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];

const score = input[1].split(" ").map(Number);

const highScore = Math.max(...score);
const fakeScore = [];
let sum = 0;

for (let i = 0; i < score.length; i++) {
  fakeScore[i] = (score[i] / highScore) * 100;
}

for (let i = 0; i < fakeScore.length; i++) {
  sum += fakeScore[i];
}

const average = sum / fakeScore.length;

console.log(average);
