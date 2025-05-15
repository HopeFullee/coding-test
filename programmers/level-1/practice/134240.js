/*
  https://school.programmers.co.kr/learn/courses/30/lessons/134240
  연습문제 - 푸드 파이트 대회
*/

function solution(food) {
  const left = food.reduce((acc, count, idx) => {
    return acc + idx.toString().repeat(parseInt(count / 2));
  }, "");

  return left + "0" + [...left].reverse().join("");
}

const food = [1, 7, 1, 2];

console.log(solution(food));
