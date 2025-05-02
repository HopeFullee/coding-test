/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12939
  12939 - 최댓값과 최솟값
*/

// math min max 활용
function solution(s) {
  const nums = s.split(" ").map(Number);
  const max = Math.max(...nums);
  const min = Math.min(...nums);
  return `${min} ${max}`;
}

// for loop
function solution2(s) {
  const nums = s.split(" ").map(Number);
  let max = nums[0];
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curNum = nums[i];

    if (max < curNum) {
      max = curNum;
    } else if (min > curNum) {
      min = curNum;
    }
  }

  return `${min} ${max}`;
}
