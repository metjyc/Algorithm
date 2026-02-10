const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let idx = 0;
const T = Number(input[idx++]);
let out = [];

for (let tc = 0; tc < T; tc++) {
  const N = Number(input[idx++]);
  const arr = [];
  for (let i = 0; i < N; i++) arr.push(Number(input[idx++]));

  const count = Array(201).fill(0);
  for (let i = 0; i < N; i++) count[arr[i]]++;

  const ok = Array(201).fill(false);
  for (let team = 1; team <= 200; team++) {
    if (count[team] === 6) ok[team] = true;
  }

  const scores = Array.from({ length: 201 }, () => []);
  let score = 1;

  for (let i = 0; i < N; i++) {
    const team = arr[i];
    if (!ok[team]) continue;

    scores[team].push(score);
    score++;
  }

  let bestTeam = -1;
  let bestSum = Infinity;
  let bestFifth = Infinity;

  for (let team = 1; team <= 200; team++) {
    if (!ok[team]) continue;

    const s = scores[team]; // 길이 6이어야 정상
    const sum4 = s[0] + s[1] + s[2] + s[3];
    const fifth = s[4];

    if (sum4 < bestSum || (sum4 === bestSum && fifth < bestFifth)) {
      bestSum = sum4;
      bestFifth = fifth;
      bestTeam = team;
    }
  }

  out.push(String(bestTeam));
}
console.log(out.join("\n"));
