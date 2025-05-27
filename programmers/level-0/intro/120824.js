/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120824
  코딩테스트 입문 - 짝수 홀수 개수
*/

function solution(num_list) {
  return num_list.reduce(
    ([even, odd], num) => {
      num % 2 ? odd++ : even++;
      return [even, odd];
    },
    [0, 0]
  );
}

const num_list = [1, 2, 3, 4, 5];

console.log(solution(num_list));
