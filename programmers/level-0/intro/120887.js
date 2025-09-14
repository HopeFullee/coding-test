/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120887
  코딩테스트 입문 - k의 개수
*/

function solution(i, j, k) {
  let count = 0;
  const regex = new RegExp(k, "g");

  for (i; i <= j; i++) {
    count += i.toString().match(regex)?.length ?? 0;
  }

  return count;
}

const i = 1;
const j = 13;
const k = 1;

console.log(solution(i, j, k));
