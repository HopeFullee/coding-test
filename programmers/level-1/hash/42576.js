/*
  https://school.programmers.co.kr/learn/courses/30/lessons/42576
  해시 - 완주하지 못한 선수
*/

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return (answer = participant[i]);
  }
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];

console.log(solution(participant, completion));

/*
  [모법 답안]
  해시 맵을 활용한 풀이 방법.

  sort를 활용해 잔머리로 풀어낸 본인의 풀이 방식보다 약 2배~3배 가량 성능이 좋다.
*/

function solution2(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    const p = participant[i];
    const c = completion[i];

    map.set(p, (map.get(p) || 0) + 1);
    map.set(c, (map.get(c) || 0) - 1);
  }

  for (let [k, v] of map) {
    if (v > 0) return k;
  }
}

console.log(solution2(participant, completion));
