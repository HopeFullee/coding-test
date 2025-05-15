/*
  https://school.programmers.co.kr/learn/courses/30/lessons/132267
  연습문제 - 콜라 문제
*/

function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const changeCount = parseInt(n / a);
    answer += b * changeCount;
    n = changeCount * b + (n % a);
  }

  return answer;
}

const [a, b, n] = [2, 1, 20];

console.log(solution(a, b, n));
