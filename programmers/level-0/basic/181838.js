/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181838
  코딩 기초 트레이닝 - 날짜 비교하기
*/

function solution(date1, date2) {
  return Number(new Date(date1) < new Date(date2));
}

const date1 = [2021, 12, 28];
const date2 = [2021, 12, 29];

console.log(solution(date1, date2));
