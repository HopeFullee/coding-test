/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120868
  코딩테스트 입문 - 삼각형의 완성조건 (2)
*/

function solution(sides) {
  const [a, b] = sides;

  let minC = Math.abs(a - b);
  let maxC = a + b;

  return maxC - minC - 1;
}

const sides = [11, 7];

console.log(solution(sides));
