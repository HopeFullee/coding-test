/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12919
  연습문제 - 서울에서 김서방 찾기
*/

function solution(seoul) {
  const index = seoul.indexOf("Kim");
  return `김서방은 ${index}에 있다`;
}

const seoul = ["Jane", "Kim"];

console.log(solution(seoul));
