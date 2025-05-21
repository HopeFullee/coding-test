/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12921
  연습문제 - 소수 찾기
*/

/*
  "에라토스테네스의 체" 알고리즘 활용으로 N의 소수를 구해보자.

  <알고리즘 학습에 참고한 블로그>
  https://velog.io/@changhee09/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%86%8C%EC%88%98%EC%9D%98-%ED%8C%90%EB%B3%84-%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98-%EC%B2%B4
*/

function solution(n) {
  const arr = Array(n + 1).fill(true);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = 2; i * j <= n; j++) {
        arr[i * j] = false;
      }
    }
  }

  let primeCount = 0;

  for (let i = 2; i <= n; i++) {
    if (arr[i]) primeCount++;
  }

  return primeCount;
}

const n = 10;

console.log(solution(n));

/*
  시간 초과로 실패한 풀이.
*/

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution2(n) {
  let primeCount = 0;

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) primeCount++;
  }

  return primeCount;
}

console.log(solution2(n));
