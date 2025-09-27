/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120853
  코딩테스트 입문 - 컨트롤 제트
*/

function solution(s) {
  const arr = s.split(" ");

  return arr.reduce((acc, n, idx) => {
    if (n === "Z") {
      acc -= Number(arr[idx - 1]);
    } else {
      acc += Number(n);
    }

    return acc;
  }, 0);
}

const s = "1 2 Z 3";

console.log(solution(s));
