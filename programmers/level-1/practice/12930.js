/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12930
  연습문제 - 이상한 문자 만들기
*/

function solution(s) {
  const split = s.toLowerCase().split(" ");

  let answer = [];

  for (str of split) {
    const modStr = [...str].reduce((acc, ch, idx) => {
      return idx % 2 ? acc + ch : acc + ch.toUpperCase();
    }, "");

    answer.push(modStr);
  }

  return answer.join(" ");
}

const s = "try hello world";

console.log(solution(s));
