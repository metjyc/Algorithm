const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const members = input.slice(1);

const arr = members.map((line, index) => {
  const [age, name] = line.split(" ");
  return {
    age: Number(age),
    name,
    index,
  };
});

arr.sort((a, b) => {
  if (a.age === b.age) {
    return a.index - b.index;
  }
  return a.age - b.age;
});

const result = arr
  .map((member) => {
    return `${member.age} ${member.name}`;
  })
  .join("\n");

console.log(result);
