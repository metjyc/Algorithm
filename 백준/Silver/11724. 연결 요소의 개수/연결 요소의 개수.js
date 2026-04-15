const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);

  graph[u].push(v);
  graph[v].push(u);
}

const visited = Array(N + 1).fill(false);

function dfs(node) {
  visited[node] = true;

  for (const next of graph[node]) {
    if (!visited[next]) {
      dfs(next);
    }
  }
}

let count = 0;

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    count++;
    dfs(i);
  }
}

console.log(count);
