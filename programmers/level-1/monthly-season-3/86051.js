/*
  https://school.programmers.co.kr/learn/courses/30/lessons/86051
  월간 코드 챌린지 시즌3 - 없는 숫자 더하기
*/

function solution(numbers) {
  const set = new Set(numbers);
  let sum = 0;

  for (let i = 1; i < 10; i++) {
    if (!set.has(i)) sum += i;
  }

  return sum;
}

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

console.log(solution(numbers));

/*
  [모범 답안]
  1 ~ 9 까지의 모든 수를 더하면 45가 나온다.
  45에서 numbers 배열에 들어온 모든 수의 합을 빼면 정답이다.
*/

function solution2(numbers) {
  return 45 - numbers.reduce((a, n) => a + n);
}

console.log(solution(numbers));
