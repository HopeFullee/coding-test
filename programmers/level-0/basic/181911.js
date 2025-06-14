/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181911
  코딩 기초 트레이닝 - 부분 문자열 이어 붙여 문자열 만들기
*/

function solution(my_strings, parts) {
  return my_strings
    .map((str, idx) => {
      const [s, e] = parts[idx];
      return str.slice(s, e + 1);
    })
    .join("");
}

const my_strings = ["progressive", "hamburger", "hammer", "ahocorasick"];
const parts = [
  [0, 4],
  [1, 2],
  [3, 5],
  [7, 7],
];

console.log(solution(my_strings, parts));
