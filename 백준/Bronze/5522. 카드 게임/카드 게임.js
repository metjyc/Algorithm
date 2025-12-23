const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");

const nums = input.slice(0).map(Number);
let sum = 0;

for(let i = 0; i<nums.length; i++) {
    sum+= nums[i];
}

console.log(sum);