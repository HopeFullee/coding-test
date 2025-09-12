/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181857
  코딩 기초 트레이닝 - 배열의 길이를 2의 거듭제곱으로 만들기
*/

function solution(arr) {
  let pow = 0;

  while (2 ** pow < arr.length) {
    pow++;
  }

  return arr.concat(new Array(2 ** pow - arr.length).fill(0));
}

const arr = [22];

console.log(solution(arr));
