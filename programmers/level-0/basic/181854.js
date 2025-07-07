/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181854
  코딩 기초 트레이닝 - 배열의 길이에 따라 다른 연산하기
*/

function solution(arr, n) {
  return arr.map((num, idx) => {
    if (arr.length % 2 !== idx % 2) {
      return num + n;
    }

    return num;
  });
}

const arr = [49, 12, 100, 276, 33];
const n = 27;

console.log(solution(arr, n));
