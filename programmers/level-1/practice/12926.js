/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12926
  연습문제 - 시저 암호
*/

const getNextLetter = (ch, n) => {
  const code = ch.charCodeAt(0) + n;

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(code);
  }

  if (code > 122) {
    return String.fromCharCode(96 + n);
  }

  if (code > 90) {
    return String.fromCharCode(64 + n);
  }
};

function solution(s, n) {
  let answer = "";

  for (const ch of s) {
    if (ch !== " ") {
      answer += getNextLetter(ch, n);
    } else {
      answer += ch;
    }
  }

  return answer;
}

const s = "a B z";
const n = 4;

console.log(solution(s, n));

/*
  [모범 답안]
  위의 방식으론 납득하기 어려운 '틀렸습니다'가 나온다..
  
  힌트를 찾던중 생각지도 못한 방식의 풀이를 알게되었다.
*/

function solution2(s, n) {
  let answer = "";

  for (const ch of s) {
    if (ch !== " ") {
      const code = ch.charCodeAt(0);

      // 순회하는 char가 대문자라면 unicode 65 ('A'), 소문자라면 unicode 97 ('a')를 반환
      const range = ch === ch.toUpperCase() ? 65 : 97;

      // (풀이의 핵심) char의 unicode에 range를 뺀 값에 이동할 n을 더함,
      // 해당 값에 알파벳의 총 개수 26개 만큼 나누어 (나머지) 값을 추출하여 이동해야할 거리 gap을 구함.
      const gap = (code - range + n) % 26;

      // 대문자 65 또는 소문자 97의 range에 gap을 더하여 n만큼 이동할 수 있음.
      answer += String.fromCharCode(range + gap);
    } else {
      answer += ch;
    }
  }

  return answer;
}

console.log(solution2(s, n));

/*
  [모범 답안2]
  킹갓 정윤센세의 풀이식으로 풀어보자.

  ASCII 코드를 직접 조작하여 이동하는 방식 보단 훨신 더 직관적인 코드로 느껴진다.
  하지만 위에 solution2 함수와 비교한다면 ASCII 코드를 직접 조작한 코드가 조금더 
  성능면에서 우위점에 있다.

  아마 solution3 함수는 알파벳을 array에 담아 직관적인 대신,
  idx별로 호출 하는 단계에서 약간의 시간이 더 걸리는것 같다.
*/

function solution3(s, n) {
  let answer = "";

  const alphabets = [...Array(26)].map((_, idx) => {
    return String.fromCharCode(97 + idx);
  });

  for (const ch of s) {
    if (ch !== " ") {
      const idx = alphabets.indexOf(ch.toLowerCase()) + n;
      const nextCh = alphabets[idx % alphabets.length];

      answer += ch === ch.toUpperCase() ? nextCh.toUpperCase() : nextCh;
    } else {
      answer += ch;
    }
  }

  return answer;
}

console.log(solution3(s, n));
