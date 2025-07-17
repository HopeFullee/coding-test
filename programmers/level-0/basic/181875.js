/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181875
  코딩 기초 트레이닝 - 배열에서 문자열 대소문자 변환하기
*/

function solution(strArr) {
  return strArr.map((str, idx) => {
    return idx % 2 ? str.toUpperCase() : str.toLowerCase();
  });
}

const strArr = ["AAA", "BBB", "CCC", "DDD"];

console.log(solution(strArr));
