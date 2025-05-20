/*
  https://school.programmers.co.kr/learn/courses/30/lessons/136798
  연습문제 - 기사단원의 무기
*/

/*
  factors를 구할때 n의 반절(half)만 iterate 하여 불필요한 회전을 줄임으로 시간복잡도를 최적화함.
*/

function solution(number, limit, power) {
  let sum = 1;

  for (let i = 2; i <= number; i++) {
    const isEven = i % 2 === 0;
    const inc = isEven ? 1 : 2;
    const half = Math.floor(i / 2);
    let factorCount = 2;

    for (let j = isEven ? 2 : 3; j <= half; j += inc) {
      if (i % j !== 0) continue;

      if (++factorCount > limit) {
        sum += power;
        factorCount = 0;
        break;
      }
    }

    sum += factorCount;
  }

  return sum;
}

const number = 10;
const limit = 3;
const power = 2;

console.log(solution(number, limit, power));
