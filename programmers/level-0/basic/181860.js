/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181860
  코딩 기초 트레이닝 - 빈 배열에 추가, 삭제하기
*/

function solution(arr, flag) {
  const x = [];

  flag.forEach((bool, idx) => {
    const n = arr[idx];

    if (bool) {
      x.push(...Array(n * 2).fill(n));
    } else {
      x.splice(x.length - n);
    }
  });

  return x;
}

const arr = [3, 2, 4, 1, 3];
const flag = [true, false, true, false, false];

console.log(solution(arr, flag));
