/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181897
  코딩 기초 트레이닝 - 리스트 자르기
*/

function solution(n, slicer, num_list) {
  const [a, b, c] = slicer;

  switch (n) {
    case 1:
      return num_list.slice(0, b + 1);
    case 2:
      return num_list.slice(a);
    case 3:
      return num_list.slice(a, b + 1);
    case 4:
      return num_list.slice(a, b + 1).filter((_, idx) => idx % c === 0);
  }
}

const n = 4;
const slicer = [1, 5, 2];
const num_list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(n, slicer, num_list));
