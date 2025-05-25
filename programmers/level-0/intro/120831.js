/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120831
  코딩테스트 입문 - 짝수의 합
*/

function solution(n) {
  const answer = [...Array(n)].reduce((acc, _, idx) => {
    if ((idx + 1) % 2 === 0) acc += idx + 1;
    return acc;
  }, 0);

  return answer;
}
