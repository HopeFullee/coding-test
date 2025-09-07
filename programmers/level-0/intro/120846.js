/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120846
  코딩테스트 입문 - 합성수 찾기
*/

const isComposite = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return true;
  }
  return false;
};

function solution(n) {
  if (n < 4) return 0;

  let cnt = 0;

  for (let i = 4; i <= n; i++) {
    if (isComposite(i)) {
      cnt++;
    }
  }

  return cnt;
}

const n = 10;

console.log(solution(n));
