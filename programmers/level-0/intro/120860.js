/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120860
  코딩테스트 입문 - 직사각형 넓이 구하기
*/

function solution(dots) {
  const xArr = dots.map(([x]) => x);
  const yArr = dots.map(([_, y]) => y);
  const width = Math.max(...xArr) - Math.min(...xArr);
  const height = Math.max(...yArr) - Math.min(...yArr);

  return width * height;
}

const dots = [
  [-1, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
];

console.log(solution(dots));
