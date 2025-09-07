/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181942
  코딩 기초 트레이닝 - 문자열 섞기
*/

function solution(str1, str2) {
  return [...str1].reduce((acc, ch, idx) => {
    return acc + ch + str2[idx];
  }, "");
}

const str1 = "aaaaa";
const str2 = "bbbbb";

console.log(solution(str1, str2));
