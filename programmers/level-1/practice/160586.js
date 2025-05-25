/*
  https://school.programmers.co.kr/learn/courses/30/lessons/160586
  연습문제 - 대충 만든 자판
*/

function solution(keymap, targets) {
  const answer = [];

  for (const t of targets) {
    let count = 0;

    for (const ch of t) {
      const indexOfCh = [];

      for (const k of keymap) {
        if (k.indexOf(ch) !== -1) indexOfCh.push(k.indexOf(ch));
      }

      if (indexOfCh.length) {
        count += Math.min(...indexOfCh) + 1;
      } else {
        count = -1;
        break;
      }
    }

    answer.push(count);
  }

  return answer;
}

const keymap = ["ABACD", "BCEFD"];
const targets = ["ABCD", "AABB"];

console.log(solution(keymap, targets));

/*
  [모법 답안]
  map/dict 을 활용한 풀이 방법

  O(N^3)의 본인 코드와는 달리 O(N^2)로 성능면에서 훨신 우수하다.
*/

function solution2(keymap, targets) {
  const answer = [];
  const dict = {};

  for (const k of keymap) {
    [...k].forEach((ch, idx) => {
      if (dict[ch] < idx + 1) dict[ch] = dict[ch];
      else dict[ch] = idx + 1;
    });
  }

  for (const t of targets) {
    const count = [...t].reduce((acc, ch) => acc + dict[ch], 0);
    answer.push(count || -1);
  }

  return answer;
}

console.log(solution2(keymap, targets));
