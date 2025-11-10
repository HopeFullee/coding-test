/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120924
  코딩테스트 입문 - 다음에 올 숫자
*/

// 수포자식 (본인) 브루트포스 풀이
function solution(common) {
  const arithmetic = new Set();
  const geometric = new Set();

  for (let i = 0; i < 2; i++) {
    const minus = common[i + 1] - common[i];
    const divide = common[i + 1] / common[i];

    arithmetic.add(minus);
    geometric.add(divide);
  }

  if (arithmetic.size === 1)
    return common[common.length - 1] + [...arithmetic][0];

  if (geometric.size === 1)
    return common[common.length - 1] * [...geometric][0];
}

// 수학 똑똑이 멋쟁이 코딩
function solution2(common) {
  // common[0] ~ common[2] 까지 등차수열 계산 "(n + 1) - n" 빼기 했을 때 항상 같은 수가 나오면,
  // 동일한 간격으로 더해지는 등차수열이 맞음으로 common의 마지막 값과 간격의 차이를 더함.
  if (common[1] - common[0] == common[2] - common[1]) {
    return common.pop() + common[1] - common[0];
  } else {
    // 등차수열이 아니라면, 나누기 했을 때 항상 같은 수의 등비수열임.
    // common의 마지막 값과 간격의 차이를 곱함.
    return (common.pop() * common[1]) / common[0];
  }
}

const common = [2, 4, 8];

console.log(solution(common));
console.log(solution2(common));
