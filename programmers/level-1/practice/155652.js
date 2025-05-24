/*
  https://school.programmers.co.kr/learn/courses/30/lessons/155652
  연습문제 - 둘만의 암호
*/

function solution(s, skip, index) {
  skip = new Set(skip);
  let answer = "";

  for (const ch of s) {
    const code = ch.charCodeAt(0);
    let skipCount = 0;

    let idx = 1;
    let j = 1;

    while (idx <= index) {
      const gap = (code - 97 + j) % 26;
      const nextCh = String.fromCharCode(97 + gap);

      if (skip.has(nextCh)) skipCount++;
      else idx++;

      j++;
    }

    const gap = (code - 97 + index + skipCount) % 26;

    answer += String.fromCharCode(97 + gap);
  }

  return answer;
}

const s = "klmnopqrstuvwxyz";
const skip = "abcdefghij";
const index = 20;

console.log(solution(s, skip, index));

/*
  [모범 답안]
  skip에 있는 단어들을 제외한 알파벳 테이블을 만들어 쉽게 해결할 수 있다.

  2시간 + @ 동안 이런 풀이를 생각지 못한 자신에게 매우 실망스럽다..

  [P.S]
  모범 풀이의 작성자 이름이 '김정윤'이다.
  설마 킹갓정윤 센세이십니까 ㅠㅠ...
  이또한 센세의 은혜이겠지요..
*/

function solution2(s, skip, index) {
  let answer = "";

  const matched = "abcdefghijklmnopqrstuvwxyz".match(
    // [^skip] skip에 있는 char들을 제외한 나머지
    new RegExp(`[^${skip}]`, "g")
  );

  for (const ch of s) {
    const newIdx = matched.indexOf(ch) + index;
    // 유사 풀이를 통해 배워온 n번만 큼의 이동한 ASCII 알파벳 자리 구하기 ('a' - 97 % 26) 기법과 같이,
    // 기존 알파벳의 26자리를 skip이 제외된 새로운 알파벳 테이블의 길이로 교체하면 n번째의 다음 알파벳을 구할 수 있다.
    answer += matched[newIdx % matched.length];
  }

  return answer;
}

console.log(solution2(s, skip, index));
