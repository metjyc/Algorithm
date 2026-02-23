const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(/\s+/);

const N = Number(input[0]);
const x = input.slice(1).map(Number);

const heap = [];

function push(value) {
  heap.push(value);
  let idx = heap.length - 1;

  while (idx > 0) {
    let parent = Math.floor((idx - 1) / 2);
    if (heap[parent] > heap[idx]) {
      [heap[idx], heap[parent]] = [heap[parent], heap[idx]];
      idx = parent;
    } else {
      break;
    }
  }
}

function pop() {
  if (heap.length === 0) {
    return 0;
  } else if (heap.length === 1) {
    return heap.pop();
  } else {
    const min = heap[0];
    heap[0] = heap[heap.length - 1];
    heap.pop();
    let idx = 0;
    while (true) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;

      if (left >= heap.length) break;

      let next = left;

      if (right < heap.length && heap[right] < heap[left]) {
        next = right;
      }
      if (heap[idx] <= heap[next]) break;

      [heap[idx], heap[next]] = [heap[next], heap[idx]];
      idx = next;
    }
    return min;
  }
}

let ans = [];

for (let i = 0; i < N; i++) {
  const value = x[i];
  if (value === 0) {
    ans.push(pop());
  } else {
    push(value);
  }
}
console.log(ans.join("\n"));
