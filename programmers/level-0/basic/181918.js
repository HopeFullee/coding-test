/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181918
  코딩 기초 트레이닝 - 배열 만들기 4
*/

function solution(arr) {
  const stk = [];
  let idx = 0;

  while (idx < arr.length) {
    if ((stk[stk.length - 1] || 0) < arr[idx]) {
      stk.push(arr[idx]);
      idx++;
    } else {
      stk.pop();
    }
  }

  return stk;
}

const arr = [1, 4, 2, 5, 3];

console.log(solution(arr));
