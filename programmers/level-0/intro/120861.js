/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120861
  코딩테스트 입문 - 캐릭터의 좌표
*/

function solution(keyinput, board) {
  const res = [0, 0];
  const xLimit = Math.floor(board[0] / 2);
  const yLimit = Math.floor(board[1] / 2);

  for (const key of keyinput) {
    switch (key) {
      case "left":
        if (res[0] > -xLimit) res[0]--;
        break;
      case "right":
        if (res[0] < xLimit) res[0]++;
        break;
      case "up":
        if (res[1] < yLimit) res[1]++;
        break;
      case "down":
        if (res[1] > -yLimit) res[1]--;
        break;
    }
  }

  return res;
}

const keyinput = [
  "right",
  "right",
  "right",
  "right",
  "left",
  "left",
  "left",
  "left",
];
const board = [5, 5];

console.log(solution(keyinput, board));
