/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181886
  코딩 기초 트레이닝 - 5명씩
*/

function solution(names) {
  return names.filter((_, idx) => idx % 5 === 0);
}

const names = ["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"];

console.log(solution(names));
