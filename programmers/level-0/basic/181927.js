/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181927
  코딩 기초 트레이닝 - 마지막 두 원소
*/

function solution(num_list) {
  const lastElem = num_list[num_list.length - 1];
  const prevLastElem = num_list[num_list.length - 2];

  if (lastElem > prevLastElem) {
    num_list.push(lastElem - prevLastElem);
  } else {
    num_list.push(lastElem * 2);
  }

  return num_list;
}

function solution2(num_list2) {
  const [a, b] = [...num_list2].reverse();

  return [...num_list2, a > b ? a - b : a * 2];
}

const num_list = [5, 2, 1, 7, 5];
const num_list2 = [5, 2, 1, 7, 5];

console.log(solution(num_list));
console.log(solution2(num_list2));
