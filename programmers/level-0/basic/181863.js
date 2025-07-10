/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181863
  코딩 기초 트레이닝 - rny_string
*/

function solution(rny_string) {
  return rny_string.replaceAll("m", "rn");
}

const rny_string = "masterpiece";

console.log(solution(rny_string));
