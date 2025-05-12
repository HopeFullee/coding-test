/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12982
  Summer/Winter Coding(~2018) - 예산
*/

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let count = 0;

  for (request of d) {
    if (request <= budget) {
      budget -= request;
      count++;
    } else break;
  }

  return count;
}

const d = [1, 3, 2, 5, 4];
const budget = 9;

console.log(solution(d, budget));
