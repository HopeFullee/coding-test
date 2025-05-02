/*
  https://school.programmers.co.kr/learn/courses/30/lessons/87389
  87389 - 나머지가 1이 되는 수 찾기
*/

function solution(n) {
  let answer = 0;

  // 나머지 1을 구해야함으로 굳이 0~1 부터 iterate 해야할 필요는 없음
  for (let i = 2; i <= n; i++) {
    if (n % i === 1) {
      answer = i;
      break;
    }
  }

  return answer;
}

const n = 10;

console.log(solution(n));
