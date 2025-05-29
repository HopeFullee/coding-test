/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120841
  코딩테스트 입문 - 점의 위치 구하기
*/

function solution([x, y]) {
  if (x > 0) {
    return y > 0 ? 1 : 4;
  } else {
    return y > 0 ? 2 : 3;
  }
}

function solution2([x, y]) {
  const isXPos = Math.sign(x) > 0;
  const isYPos = Math.sign(y) > 0;
  return isXPos ? (isYPos ? 1 : 4) : isYPos ? 2 : 3;
}

const dot = [-7, 9];

console.log(solution(dot));
console.log(solution2(dot));
