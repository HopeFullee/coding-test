/*
  https://school.programmers.co.kr/learn/courses/30/lessons/138477
  연습문제 - 명예의 전당 (1)
*/

function solution(k, score) {
  const arr = [];
  const result = [];

  score.forEach((val) => {
    if (arr.length < k) {
      arr.push(val);
    } else if (Math.min(...arr) < val) {
      arr.pop();
      arr.push(val);
    }

    arr.sort((a, b) => b - a);

    result.push(Math.min(...arr));
  });

  return result;
}

const k = 4;
const score = [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000];

console.log(solution(k, score));
