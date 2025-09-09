/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181872
  코딩 기초 트레이닝 - 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
*/

function solution(myString, pat) {
  const regex = new RegExp(`.*${pat}`, "g");
  const match = myString.match(regex);
  return match.sort((a, b) => b.length - a.length)[0];
}

const myString = "AbCdEFGdE";
const pat = "dE";

console.log(solution(myString, pat));
