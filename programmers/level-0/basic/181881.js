/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181881
  코딩 기초 트레이닝 - 조건에 맞게 수열 변환하기 2
*/

function solution(arr) {
  let x = 0;

  while (true) {
    const next = arr.map((num) => {
      if (num >= 50 && num % 2 === 0) return num / 2;
      if (num < 50 && num % 2 === 1) return num * 2 + 1;
      return num;
    });

    if (arr.every((val, i) => val === next[i])) {
      return x;
    }

    arr = next;
    x++;
  }
}

const arr = [1, 2, 3, 100, 99, 98];

console.log(solution(arr));
