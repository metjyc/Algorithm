const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((line) => line.trim().split("").map(Number));

const INF = 1e9;
const dist = Array.from({ length: N }, () => Array(M).fill(INF));
const mx = [-1, 1, 0, 0];
const my = [0, 0, -1, 1];

dist[0][0] = 1;

const q = [];
let head = 0;
q.push([0, 0]);

while (head < q.length) {
  const [x, y] = q[head++];
  for (let i = 0; i < 4; i++) {
    const nx = x + mx[i];
    const ny = y + my[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;

    if (maze[nx][ny] === 0) continue;

    if (dist[nx][ny] !== INF) continue;

    dist[nx][ny] = dist[x][y] + 1;
    q.push([nx, ny]);
  }
}
console.log(dist[N - 1][M - 1]);
