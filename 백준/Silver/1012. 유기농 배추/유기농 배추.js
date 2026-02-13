const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let idx = 0;
const T = Number(input[idx++]);

let out = [];

for (let tc = 0; tc < T; tc++) {
  const M = Number(input[idx++]); // 가로
  const N = Number(input[idx++]); // 세로
  const K = Number(input[idx++]);

  const grid = Array.from({ length: N }, () => Array(M).fill(0));
  for (let i = 0; i < K; i++) {
    const x = Number(input[idx++]);
    const y = Number(input[idx++]);
    grid[y][x] = 1;
  }

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  let worms = 0;
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (grid[y][x] !== 1) continue;

      worms++;

      const qx = [];
      const qy = [];
      let head = 0;

      qx.push(x);
      qy.push(y);
      grid[y][x] = 0;

      while (head < qx.length) {
        const cx = qx[head];
        const cy = qy[head];
        head++;

        for (let d = 0; d < 4; d++) {
          const nx = cx + dx[d];
          const ny = cy + dy[d];

          if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
          if (grid[ny][nx] !== 1) continue;

          grid[ny][nx] = 0;
          qx.push(nx);
          qy.push(ny);
        }
      }
    }
  }
  out.push(String(worms));
}

console.log(out.join("\n"));
