/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12977
  Summer/Winter Coding(~2018) - 소수 만들기
*/

const isPrime = (num) => {
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

function solution(nums) {
  const sumArr = [];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sumArr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  let primeCount = 0;

  for (const num of sumArr) {
    if (isPrime(num)) primeCount++;
  }

  return primeCount;
}

const nums = [1, 2, 7, 6, 4];

console.log(solution(nums));
