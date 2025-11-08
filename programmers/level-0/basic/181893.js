/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181893
  코딩 기초 트레이닝 - 배열 조각하기
*/

function solution(arr, query) {
  query.forEach((q, idx) => {
    if (idx % 2) {
      arr.splice(0, q);
    } else {
      arr.splice(q + 1);
    }
  });

  return arr;
}

const arr = [0, 1, 2, 3, 4, 5];
const query = [4, 1, 2];

console.log(solution(arr, query));
