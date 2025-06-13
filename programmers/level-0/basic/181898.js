/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181898
  코딩 기초 트레이닝 - 가까운 1 찾기
*/

function solution(arr, idx) {
  // indexOf 파라미터중 두번째 인자로 n번째 index 부터 시작할 것인지 정할 수 있다.
  return arr.indexOf(1, idx);
}

function solution2(arr, idx) {
  let ans = -1;

  for (let i = 0; i < arr.length; i++) {
    if (idx > i || arr[i] === 0) continue;

    ans = i;
    break;
  }

  return ans;
}

const arr = [0, 0, 0, 1];
const idx = 1;

console.log(solution(arr, idx));
console.log(solution2(arr, idx));
