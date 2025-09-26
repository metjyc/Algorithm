const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a); // 무방향 그래프
}

for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b); // 작은 번호부터 방문
}

// DFS
const visitedDFS = Array(N + 1).fill(false);
const dfsResult = [];

function dfs(v) {
  visitedDFS[v] = true;
  dfsResult.push(v);
  for (const next of graph[v]) {
    if (!visitedDFS[next]) {
      dfs(next);
    }
  }
}

// BFS
const visitedBFS = Array(N + 1).fill(false);
const bfsResult = [];

function bfs(start) {
  const queue = [start];
  visitedBFS[start] = true;

  while (queue.length) {
    const current = queue.shift();
    bfsResult.push(current);

    for (const next of graph[current]) {
      if (!visitedBFS[next]) {
        visitedBFS[next] = true;
        queue.push(next);
      }
    }
  }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));