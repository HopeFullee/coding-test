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

/*
  [모법 답안]
  본인의 풀이처럼 half를 구하는것이 아닌 (j * j) <= n 까지의 회전으로 계산한 버전.

  https://jsbench.me/ 
  벤치 결과 최악의 경우 n = 10만회로 비교 결과 엄청난 성능차이를 확인했다.
  본인의 코드가 88% 느림으로 나왔고, 이유는 (n / 2)로 half를 구하여 iterate 하는것 보다,
  (j * j <= n) 만큼 iterate 하는것이 훨신더 효율적이였다.
*/

function solution2(number, limit, power) {
  var answer = 0;

  for (let n = 1; n <= number; n++) {
    let count = 0;

    for (let j = 1; j * j <= n; j++) {
      if (j * j == n) count++;
      else if (n % j == 0) count += 2;
    }

    if (count > limit) count = power;
    answer += count;
  }
  return answer;
}

console.log(solution2(number, limit, power));
