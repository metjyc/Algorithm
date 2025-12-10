const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// 산술평균 : N개의 수들의 합을 N으로 나눈 값
// 중앙값 : N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
// 최빈값 : N개의 수들 중 가장 많이 나타나는 값
// 범위 : N개의 수들 중 최댓값과 최솟값의 차이

const N = Number(input[0]);
const nums = input.slice(1).map(Number);
const sortedNums = nums.sort((a, b) => a - b);

let A = 0;
let B = 0;
let C = 0;
let D = 0;

// 산술 평균

let sum = 0;

for (let i = 0; i < nums.length; i++) {
  sum += nums[i];
}

let avg = Math.round(sum / nums.length);
if (avg === -0) avg = 0; // -0 나오면 0으로 보정

console.log(avg);

//중앙값

const middleIndex = Math.floor(sortedNums.length / 2);
console.log(sortedNums[middleIndex]);

// 최빈값

const count = {};

for (const num of nums) {
  count[num] = (count[num] || 0) + 1;
}

let maxCount = 0;
let mode = null;

for (const key in count) {
  if (maxCount < count[key]) {
    maxCount = count[key];
    mode = Number(key);
  }
}

const candidates = [];
for (const key in count) {
  if (count[key] === maxCount) {
    candidates.push(Number(key));
  }
}

candidates.sort((a, b) => a - b);

mode = candidates.length > 1 ? candidates[1] : candidates[0];

console.log(mode);

// 범위

const maxNum = sortedNums[sortedNums.length - 1];
const minNum = sortedNums[0];
console.log(maxNum - minNum);
