/*
  https://leetcode.com/problems/two-sum/description/
  1. Two Sum
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let answer = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      answer.push(i);
      answer.push(i + 1);
      break;
    }
  }

  return answer;
};
