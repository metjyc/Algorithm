function solution(n, control) {
  const delta = { w: 1, s: -1, d: 10, a: -10 };
  for (const ch of control) {
    n += delta[ch];
  }
  return n;
}

// 예시 테스트
console.log(solution(0, "wsdawsdassw")); // -1
