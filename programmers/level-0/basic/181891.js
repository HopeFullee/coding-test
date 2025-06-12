/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181891
  코딩 기초 트레이닝 - 순서 바꾸기
*/

function solution(num_list, n) {
  const front = num_list.slice(0, n);
  const back = num_list.slice(n);

  return back.concat(front);
}

const num_list = [5, 2, 1, 7, 5];
const n = 3;

console.log(solution(num_list, n));
