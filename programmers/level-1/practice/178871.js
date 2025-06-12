/*
  https://school.programmers.co.kr/learn/courses/30/lessons/178871
  연습문제 - 달리기 경주
*/

function solution(players, callings) {
  const dict = {};

  players.forEach(
    (p, idx) =>
      (dict[p] = {
        front: players[idx - 1] ?? "first",
        back: players[idx + 1] ?? "last",
        rank: idx + 1,
      })
  );

  for (const call of callings) {
    const currPlayer = dict[call];

    dict[call] = {
      ...dict[currPlayer.front],
      back: currPlayer.front,
    };

    if (dict[currPlayer.front]) {
      dict[currPlayer.front] = {
        ...currPlayer,
        front: dict[currPlayer.front].back,
      };
    }

    if (dict[currPlayer.back]) {
      dict[currPlayer.back].front = currPlayer.front;
    }
  }

  return Object.entries(dict)
    .sort((a, b) => a[1].rank - b[1].rank)
    .map(([k]) => k);
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

console.log(solution(players, callings));
