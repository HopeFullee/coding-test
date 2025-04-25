/*
  https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/description/
  1342. Number of Steps to Reduce a Number to Zero
*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
  let step = 0;
  let remain = num;

  while (remain) {
    if (remain % 2 === 0) {
      remain = remain / 2;
    } else {
      remain--;
    }
    step++;
  }

  return step;
};

const num = 123;

console.log(numberOfSteps(num));
