/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181919
  코딩 기초 트레이닝 - 콜라츠 수열 만들기
*/

function solution(n) {
  const ans = [n];

  while (n !== 1) {
    if (n % 2) n = n * 3 + 1;
    else n /= 2;

    ans.push(n);
  }

  return ans;
}

function solution2(n, arr = []) {
  arr.push(n);
  if (n === 1) return arr;
  if (n % 2 === 0) return solution2(n / 2, arr);
  else return solution2(n * 3 + 1, arr);
}

const n = 10;

console.log(solution(n));
