/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120842
  코딩테스트 입문 - 2차원으로 만들기
*/

function solution(num_list, n) {
  const newArr = [];

  for (let i = 0; i < num_list.length; i += n) {
    newArr.push(num_list.slice(i, i + n));
  }

  return newArr;
}

const num_list = [1, 2, 3, 4, 5, 6, 7, 8];
const n = 2;

console.log(solution(num_list, n));
