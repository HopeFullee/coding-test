/*
  https://school.programmers.co.kr/learn/courses/30/lessons/178871
  연습문제 - 달리기 경주
*/

function solution(players, callings) {
  const map = new Map();

  players.forEach((p, idx) => map.set(p, idx));

  callings.forEach((call) => {
    const currIdx = map.get(call);
    const prevIdx = map.get(players[currIdx - 1]);

    [players[prevIdx], players[currIdx]] = [players[currIdx], players[prevIdx]];

    map.set(call, prevIdx);
    map.set(players[currIdx], currIdx);
  });

  return players;
}

function solution2(players2, callings) {
  const idxDict = {};

  players2.forEach((p, idx) => (idxDict[p] = idx));

  callings.forEach((currName) => {
    const currIdx = idxDict[currName];
    const prevName = players2[currIdx - 1];

    idxDict[currName]--;
    idxDict[prevName]++;

    players2[currIdx] = prevName;
    players2[currIdx - 1] = currName;
  });

  return players2;
}

const players = ["mumu", "soe", "poe", "kai", "mine"];
const players2 = ["mumu", "soe", "poe", "kai", "mine"];
const callings = ["kai", "kai", "mine", "mine"];

console.log(solution(players, callings));
console.log(solution2(players2, callings));
