/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120880
  코딩테스트 입문 - 특이한 정렬
*/

function solution(numlist, n) {
  numlist.sort((a, b) => b - a);

  const diffArr = numlist
    .map((num, idx) => [Math.abs(num - n), idx])
    .sort(([a], [b]) => a - b);

  return diffArr.map(([_, idx]) => numlist[idx]);
}

// 멋쟁이 코딩
function solution2(numlist, n) {
  // prototype.sort() 함수 설명중,
  // 음수 (negative number)를 반환하면 "a"가 먼저,
  // 양수 (positive number)를 반환화면 "b"가 먼저 되도록 짜여저있다.

  // numlist의 숫자 (a, b)에 "n"만큼 뺀다면 거리를 알아낼 수 있다.
  // "a", "b" 각각의 거리를 서로 뺀다면 음수 또는 양수가 나온다. **상단 prototype.sort() 설명 참고**
  // 만약 "a", "b" 둘다 "n"과 동일한 거리라면, 서로 뺀 값은 0 이 나온다.
  // 0 의 "falsy" 값을 기준으로 || "or" 연산자를 사용해서 더 큰 수 "b"를 먼저 정렬한다.
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

const numlist = [10000, 20, 36, 47, 40, 6, 10, 7000];
const n = 30;

console.log(solution(numlist, n));
console.log(solution2(numlist, n));
