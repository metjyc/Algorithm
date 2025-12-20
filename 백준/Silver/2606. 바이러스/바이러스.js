const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[1]);

const arr = input.slice(2).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [a, b] = arr[i];
  graph[a].push(b);
  graph[b].push(a);
}

const queue = [1];
const visited = Array(N + 1).fill(false);
visited[1] = true;

let head = 0;
let count = 0;

while (head < queue.length) {
  const cur = queue[head++];

  for (const next of graph[cur]) {
    if (visited[next]) continue;

    visited[next] = true;
    queue.push(next);
    count++;
  }
}

console.log(count);
