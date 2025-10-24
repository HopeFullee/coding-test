/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120871
  코딩테스트 입문 - 저주의 숫자 3
*/

function solution(n) {
  let fuckedUpNumber = 0;

  for (let i = 0; i < n; i++) {
    fuckedUpNumber++;

    while (true) {
      const hasThree = fuckedUpNumber.toString().includes("3");
      const isMultiple = fuckedUpNumber % 3 === 0;

      if (!hasThree && !isMultiple) break;

      fuckedUpNumber++;
    }
  }

  return fuckedUpNumber;
}

const n = 10;

console.log(solution(n));
