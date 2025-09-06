/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120834
  코딩테스트 입문 - 외계행성의 나이
*/

function solution(age) {
  return [...age.toString()].reduce((acc, num) => {
    const code = 97 + Number(num);
    acc += String.fromCharCode(code);
    return acc;
  }, "");
}

const age = 23;

console.log(solution(age));
