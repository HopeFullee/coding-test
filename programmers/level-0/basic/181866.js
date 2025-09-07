/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181866
  코딩 기초 트레이닝 - 문자열 잘라서 정렬하기
*/

function solution(myString) {
  return myString
    .split("x")
    .filter((v) => v)
    .sort();
}

const myString = "axbxcxdx";

console.log(solution(myString));
