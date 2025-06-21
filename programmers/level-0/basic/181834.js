/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181834
  코딩 기초 트레이닝 - l로 만들기
*/

function solution(myString) {
  const lcode = "l".charCodeAt();

  return [...myString].reduce((acc, ch) => {
    return ch.charCodeAt() < lcode ? acc + "l" : acc + ch;
  }, "");
}

function solution2(myString) {
  return myString.replace(/[a-k]/g, "l");
}

const myString = "abcdevwxyz";

console.log(solution(myString));
console.log(solution2(myString));
