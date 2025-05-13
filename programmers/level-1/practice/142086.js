/*
  https://school.programmers.co.kr/learn/courses/30/lessons/142086
  연습문제 - 가장 가까운 같은 글자
*/

function solution(s) {
  return [...s].map((ch, idx) => {
    const nearIdx = s.slice(0, idx).lastIndexOf(ch);
    return nearIdx < 0 ? nearIdx : idx - nearIdx;
  });
}

const s = "banana";

console.log(solution(s));

/*
  [모범 답안]
  HashMap 자료구조를 활용한 풀이 방법
*/

function solution2(s) {
  const hash = {};

  return [...s].map((ch, idx) => {
    // hash를 조회하여 현재 char와 동일한 char의 idx 정보가 있는지 검사.
    // 동일한 정보가 있다면, 현재 idx와 hash[char]의 idx를 뺀 값을 리턴.
    // 동일한 정보가 없다면, -1을 리턴.
    const between = hash[ch] !== undefined ? idx - hash[ch] : -1;
    hash[ch] = idx;

    return between;
  });
}

console.log(solution2(s));
