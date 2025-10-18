/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181943
  코딩 기초 트레이닝 - 문자열 겹쳐쓰기
*/

function solution(my_string, overwrite_string, s) {
  const head = my_string.slice(0, s);
  const tail = my_string.slice(s + overwrite_string.length);
  return head + overwrite_string + tail;
}

const my_string = "He11oWor1d";
const overwrite_string = "lloWorl";
const s = 2;

console.log(solution(my_string, overwrite_string, s));
