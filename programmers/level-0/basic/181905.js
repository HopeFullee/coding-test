/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181905
  코딩 기초 트레이닝 - 문자열 뒤집기
*/

function solution(my_string, s, e) {
  const head = my_string.slice(0, s);
  const tail = my_string.slice(e + 1);
  const reverse = [...my_string.slice(s, e + 1)].reverse().join("");
  return head + reverse + tail;
}

const my_string = "Progra21Sremm3";
const s = 6;
const e = 12;

console.log(solution(my_string, s, e));
