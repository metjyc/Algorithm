const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const A = input[1].split(" ").map(Number);

const M = input[2];
const nums = input[3].split(" ").map(Number);

A.sort((a, b) => a - b);

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
}

let result = [];

for (let i = 0; i < M; i++) {
  const x = nums[i];

  if (binarySearch(A, x)) {
    result.push("1");
  } else {
    result.push("0");
  }
}

console.log(result.join("\n"));
