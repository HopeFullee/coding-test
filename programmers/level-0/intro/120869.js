/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120869
  코딩테스트 입문 - 외계어 사전
*/

// 정규식 풀이
function solution(spell, dic) {
  const lookAhead = spell.reduce((acc, ch) => acc + `(?=.*${ch})`, "");
  const regex = new RegExp(`${lookAhead}`);

  for (const str of dic) {
    if (regex.test(str)) return 1;
  }

  return 2;
}

// 정렬 함수 풀이
function solution2(spell, dic) {
  const searchWord = spell.sort().join("");

  for (const str of dic) {
    if ([...str].sort().join("") === searchWord) return 1;
  }

  return 2;
}

const spell = ["z", "d", "x"];
const dic = ["def", "dww", "dzx", "loveaw"];

console.log(solution(spell, dic));
console.log(solution2(spell, dic));
