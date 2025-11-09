/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120812
  코딩테스트 입문 - 최빈값 구하기
*/

function solution(array) {
  const hash = {};

  array.forEach((n) => {
    hash[n] ? hash[n]++ : (hash[n] = 1);
  });

  const sort = Object.entries(hash).sort((a, b) => b[1] - a[1]);

  if (sort.length === 1 || sort[0][1] > sort[1][1]) return Number(sort[0][0]);
  else return -1;
}

const array = [1];

console.log(solution(array));
