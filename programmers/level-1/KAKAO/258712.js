/*
  https://school.programmers.co.kr/learn/courses/30/lessons/258712
  2024 KAKAO WINTER INTERNSHIP - 가장 많이 받은 선물
*/

function solution(friends, gifts) {
  const ratio = {};
  const record = {};
  const max = new Array(friends.length).fill(0);

  friends.forEach((name) => {
    const filtered = friends.filter((v) => v !== name);
    const friendList = filtered.map((v) => [v, 0]);
    ratio[name] = 0;
    record[name] = {
      ...Object.fromEntries(friendList),
    };
  });

  gifts.forEach((g) => {
    const [from, to] = g.split(" ");
    ratio[from]++;
    ratio[to]--;
    record[to][from]++;
  });

  Object.entries(record).forEach(([name, received], idx) => {
    for (const from in received) {
      const receivedCnt = record[name][from];
      const givenCnt = record[from][name];

      if (receivedCnt < givenCnt) {
        max[idx]++;
      } else if (receivedCnt === givenCnt) {
        if (ratio[from] < ratio[name]) max[idx]++;
      }
    }
  });

  return Math.max(...max);
}

const friends = ["a", "b", "c"];

const gifts = ["a b", "b a", "c a", "a c", "a c", "c a"];

console.log(solution(friends, gifts));
