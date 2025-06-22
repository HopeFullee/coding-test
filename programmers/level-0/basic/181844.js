/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181844
  코딩 기초 트레이닝 - 배열의 원소 삭제하기
*/

function solution(arr, delete_list) {
  const set = new Set(arr);

  delete_list.forEach((d) => set.delete(d));

  return [...set];
}

function solution2(arr, delete_list) {
  const set = new Set(delete_list);

  return arr.filter((n) => !set.has(n));
}

const arr = [293, 1000, 395, 678, 94];
const delete_list = [94, 777, 104, 1000, 1, 12];

console.log(solution(arr, delete_list));
console.log(solution2(arr, delete_list));
