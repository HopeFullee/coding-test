/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120899
  코딩테스트 입문 - 가장 큰 수 찾기
*/

function solution(array) {
  const ans = [];
  ans.push(Math.max(...array));
  ans.push(array.indexOf(ans[0]));

  return ans;
}

const array = [9, 10, 11, 8];

console.log(solution(array));
