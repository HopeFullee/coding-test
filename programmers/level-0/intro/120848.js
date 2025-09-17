/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120848
  코딩테스트 입문 - 팩토리얼
*/

const getFactorial = (count) => {
  return [...Array(count)].reduce((acc, _, idx) => {
    return acc * (idx + 1);
  }, 1);
};

function solution(n) {
  let count = 1;

  while (getFactorial(count) < n) {
    count++;
  }

  return getFactorial(count) > n ? count - 1 : count;
}

const n = 7;

console.log(solution(n));
