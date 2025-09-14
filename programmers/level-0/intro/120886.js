/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120886
  코딩테스트 입문 - A로 B 만들기
*/

function solution(before, after) {
  [...before].forEach((ch) => {
    const idx = after.indexOf(ch);
    after = after.slice(0, idx) + after.slice(idx + 1);
  });

  return after ? 0 : 1;
}

// sort 정렬 꼼수 풀이
function solution2(before, after) {
  return Number([...before].sort().join("") === [...after].sort().join(""));
}

const before = "olleh";
const after = "hello";

console.log(solution(before, after));
console.log(solution2(before, after));
