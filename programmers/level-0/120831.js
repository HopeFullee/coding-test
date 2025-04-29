/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120831
  120831 - 짝수의 합

  정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.
*/

function solution(n) {
  const answer = [...Array(n)].reduce((acc, _, idx) => {
    if ((idx + 1) % 2 === 0) acc += idx + 1;
    return acc;
  }, 0);

  return answer;
}
