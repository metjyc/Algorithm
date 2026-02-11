const fs = require("fs");

//  입력 파싱
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);
let idx = 0;

const N = Number(input[idx++]);
const M = Number(input[idx++]);

const grid = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Number(input[idx++])),
);

//  DP 배열
// dp[i][j][d] : (i,j)에 d 방향으로 도착했을 때 최소 연료
const dp = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => Array(3).fill(Infinity)),
);

//  시작 행 초기화
for (let j = 0; j < M; j++) {
  for (let d = 0; d < 3; d++) {
    dp[0][j][d] = grid[0][j];
  }
}

//  점화식
for (let i = 1; i < N; i++) {
  for (let j = 0; j < M; j++) {
    // d = 0  : from (i-1, j+1), prevDir != 0
    if (j + 1 < M) {
      dp[i][j][0] =
        grid[i][j] + Math.min(dp[i - 1][j + 1][1], dp[i - 1][j + 1][2]);
    }

    // d = 1 : from (i-1, j), prevDir != 1
    dp[i][j][1] = grid[i][j] + Math.min(dp[i - 1][j][0], dp[i - 1][j][2]);

    // d = 2 : from (i-1, j-1), prevDir != 2
    if (j - 1 >= 0) {
      dp[i][j][2] =
        grid[i][j] + Math.min(dp[i - 1][j - 1][0], dp[i - 1][j - 1][1]);
    }
  }
}

// 정답 계산
let ans = Infinity;
for (let j = 0; j < M; j++) {
  for (let d = 0; d < 3; d++) {
    ans = Math.min(ans, dp[N - 1][j][d]);
  }
}

console.log(ans);
