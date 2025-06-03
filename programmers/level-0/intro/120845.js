/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120845
  코딩테스트 입문 - 주사위의 개수
*/

function solution(box, n) {
  const [x, y, z] = box;

  return parseInt(x / n) * parseInt(y / n) * parseInt(z / n);
}

const box = [10, 8, 6];
const n = 3;

console.log(solution(box, n));
