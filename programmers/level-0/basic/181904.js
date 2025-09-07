/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181904
  코딩 기초 트레이닝 - 세로 읽기
*/

function solution(my_string, m, c) {
  const stringArr = [...my_string];
  const newArr = [];

  while (stringArr.length) {
    newArr.push(stringArr.splice(0, m));
  }

  return newArr.reduce((acc, str) => {
    return acc + str[c - 1];
  }, "");
}

function solution2(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join();
}

const my_string = "ihrhbakrfpndopljhygc";
const m = 4;
const c = 2;

console.log(solution(my_string, m, c));
console.log(solution2(my_string, m, c));
