/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181856
  코딩 기초 트레이닝 - 배열 비교하기
*/

function solution(arr1, arr2) {
  if (arr1.length < arr2.length) {
    return -1;
  } else if (arr1.length > arr2.length) {
    return 1;
  }

  const sum1 = arr1.reduce((a, n) => a + n);
  const sum2 = arr2.reduce((a, n) => a + n);

  if (sum1 < sum2) {
    return -1;
  } else if (sum1 > sum2) {
    return 1;
  }

  return 0;
}

const arr1 = [49, 13];
const arr2 = [70, 11, 2];

console.log(solution(arr1, arr2));
