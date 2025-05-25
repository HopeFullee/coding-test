/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120821
  코딩테스트 입문 - 배열 뒤집기
*/

function solution(num_list) {
  return num_list.reverse();
}

function solution2(num_list) {
  const reverse = [];

  for (let i = 1; i <= num_list.length; i++) {
    reverse.push(num_list[num_list.length - i]);
  }

  return reverse;
}

const num_list = [1, 0, 1, 1, 1, 3, 5];
const num_list2 = [1, 0, 1, 1, 1, 3, 5];

console.log(solution(num_list));
console.log(solution2(num_list2));
