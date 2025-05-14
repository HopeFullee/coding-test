/*
  https://school.programmers.co.kr/learn/courses/30/lessons/42748
  정렬 - K번째수
*/

function solution(array, commands) {
  return commands.map((cmd) => {
    const [i, j, k] = cmd;
    const slice = array.slice(i - 1, j).sort((a, b) => a - b);
    return slice[k - 1];
  });
}

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));
