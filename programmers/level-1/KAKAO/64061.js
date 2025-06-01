/*
  https://school.programmers.co.kr/learn/courses/30/lessons/64061
  2019 카카오 개발자 겨울 인턴십 - 크레인 인형뽑기 게임
*/

function solution(board, moves) {
  let count = 0;
  const basket = [];

  for (const m of moves) {
    for (const row of board) {
      if (!row[m - 1]) continue;

      if (basket[basket.length - 1] === row[m - 1]) {
        count += 2;
        basket.pop();
      } else {
        basket.push(row[m - 1]);
      }

      row[m - 1] = 0;
      break;
    }
  }

  return count;
}

const board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 4, 4, 0],
  [1, 2, 2, 1],
];
const moves = [2, 3, 1, 4, 2, 3];

console.log(solution(board, moves));
