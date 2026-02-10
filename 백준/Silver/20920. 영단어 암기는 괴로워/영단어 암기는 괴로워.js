const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

let idx = 0;
const N = Number(input[idx++]);
const M = Number(input[idx++]);

const map = new Map();

for (let i = 0; i < N; i++) {
  const word = input[idx++];

  if (word.length < M) continue;
  map.set(word, (map.get(word) || 0) + 1);
}

const arr = Array.from(map.entries());

arr.sort((a, b) => {
  const [wa, ca] = a;
  const [wb, cb] = b;

  if (ca !== cb) return cb - ca;
  if (wa.length !== wb.length) return wb.length - wa.length;
  if (wa < wb) return -1;
  if (wa > wb) return 1;
  return 0;
});

let out = [];
for (const [word] of arr) out.push(word);
process.stdout.write(out.join("\n"));
