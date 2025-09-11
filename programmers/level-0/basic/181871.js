/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181871
  코딩 기초 트레이닝 - 문자열이 몇 번 등장하는지 세기
*/

function solution(myString, pat) {
  let count = 0;

  while (myString.includes(pat)) {
    const idx = myString.indexOf(pat);
    myString = myString.slice(idx + 1);
    count++;
  }

  return count;
}

const myString = "banana";
const pat = "ana";

console.log(solution(myString, pat));
