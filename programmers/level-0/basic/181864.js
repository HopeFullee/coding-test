/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181864
  코딩 기초 트레이닝 - 문자열 바꿔서 찾기
*/

function solution(myString, pat) {
  const str = [...myString].reduce(
    (a, ch) => (ch === "A" ? a + "B" : a + "A"),
    ""
  );

  return Number(str.includes(pat));
}

const myString = "ABBAA";
const pat = "AABB";

console.log(solution(myString, pat));
