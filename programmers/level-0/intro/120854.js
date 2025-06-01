/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120854
  코딩테스트 입문 - 배열 원소의 길이
*/

function solution(strlist) {
  return strlist.map((str) => str.length);
}

const strlist = ["We", "are", "the", "world!"];

console.log(solution(strlist));
