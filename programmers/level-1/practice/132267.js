/*
  https://school.programmers.co.kr/learn/courses/30/lessons/132267
  연습문제 - 콜라 문제
*/

function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    const changeCount = parseInt(n / a);
    answer += b * changeCount;
    n = changeCount * b + (n % a);
  }

  return answer;
}

const [a, b, n] = [2, 1, 20];

console.log(solution(a, b, n));

/*
  [모법 답안]
  이산 수학의 중요성을 느끼는 풀이 방식을 보았다..
  코드의 팔로업은 되나, 수학적 공식의 개념은 한치도 이해하기 어렵다..
*/

const solution2 = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;
