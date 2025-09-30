/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181902
  코딩 기초 트레이닝 - 문자 개수 세기
*/

function solution(my_string) {
  const arr = Array(52).fill(0);

  [...my_string].forEach((ch) => {
    if (ch === ch.toLowerCase()) {
      arr[ch.charCodeAt() - 71]++;
    } else {
      arr[ch.charCodeAt() - 65]++;
    }
  });

  return arr;
}

const my_string = "Programmers";

console.log(solution(my_string));
