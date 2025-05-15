/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12915
  연습문제 - 문자열 내 마음대로 정렬하기
*/

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    } else {
      if (a[n] < b[n]) return -1;
      if (a[n] > b[n]) return 1;
      return 0;
    }
  });

  return strings;
}

const strings = ["abce", "abcd", "cdx"];
const n = 2;

console.log(solution(strings, n));

/*
  [모법 답안]
  sort() 내에서 localeCompare()를 활용하여 비교하는 문자열보다
  사전순으로 위치를 알아낼 수 있다. ('앞' 1), ('동일' 0), ('뒤' -1)
*/

function solution2(strings, n) {
  return strings.sort((a, b) => {
    //sort() 함수내에서 return 해야하는 1, 0, -1 들을 localeCompare() 함수에서 반환되는 값으로 대처할 수 있음.
    a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
  });
}

console.log(solution2(strings, n));
