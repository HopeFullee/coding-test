/*
  https://school.programmers.co.kr/learn/courses/30/lessons/42862
  탐욕법(Greedy) - 체육복
*/

function solution(n, lost, reserve) {
  const map = new Map();

  // 모든 학생들에게 최초 채육복 1벌씩 지정.
  for (let i = 1; i <= n; i++) map.set(i, 1);

  // 채육복을 도난 당한 학생들은 기존 1벌에서 -1.
  for (const l of lost) map.set(l, map.get(l) - 1);

  // 여분의 채육복이 있는 학생들은 기존 1벌에서 +1.
  for (const r of reserve) map.set(r, map.get(r) + 1);

  for (let i = 1; i <= n; i++) {
    if (map.get(i) !== 0) continue;

    const head = map.get(i - 1);
    const tail = map.get(i + 1);

    // 앞면 학생이 여분이 있다면, 앞면 학생에게 먼저 빌림.
    if (head > 1) {
      map.set(i, 1);
      map.set(i - 1, 1);
      // 앞 학생에 여분이 없다면, 뒷 학생의 여분에 따라 비림.
    } else if (tail > 1) {
      map.set(i, 1);
      map.set(i + 1, 1);
    }
  }

  // 채육복 1개 이상의 학생들의 수를 리턴.
  return [...map].reduce((a, [_, v]) => (v > 0 ? ++a : a), 0);
}

const n = 5;
const lost = [2, 3];
const reserve = [3, 5];

console.log(solution(n, lost, reserve));
