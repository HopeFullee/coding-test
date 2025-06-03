/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120837
  코딩테스트 입문 - 개미 군단
*/

function solution(hp) {
  const dmg = [5, 3, 1];
  let remain = hp;

  return dmg.reduce((acc, d) => {
    acc += parseInt(remain / d);
    remain = remain % d;
    return acc;
  }, 0);
}

const hp = 23;

console.log(solution(hp));
