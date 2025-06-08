/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181929
  코딩 기초 트레이닝 - 원소들의 곱과 합
*/

function solution(num_list) {
  let sum = 0;
  let mult = 1;

  for (const num of num_list) {
    sum += num;
    mult *= num;
  }

  return mult < sum ** 2 ? 1 : 0;
}

const num_list = [3, 4, 5, 2, 1];

console.log(solution(num_list));
