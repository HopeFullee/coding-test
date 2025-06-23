/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181841
  코딩 기초 트레이닝 - 꼬리 문자열
*/

function solution(str_list, ex) {
  return str_list.filter((str) => !str.includes(ex)).join("");
}

const str_list = ["abc", "def", "ghi"];
const ex = "ef";

console.log(solution(str_list, ex));
