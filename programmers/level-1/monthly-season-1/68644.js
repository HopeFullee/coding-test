/*
  https://school.programmers.co.kr/learn/courses/30/lessons/68644
  월간 코드 챌린지 시즌1 - 두 개 뽑아서 더하기
*/

function solution(numbers) {
  const [...answer] = numbers.reduce((acc, num, idx) => {
    for (let i = idx + 1; i < numbers.length; i++) {
      acc.add(num + numbers[i]);
    }

    return acc;
  }, new Set());

  return answer.sort((a, b) => a - b);
}

const numbers = [2, 1, 3, 4, 1];

console.log(solution(numbers));
