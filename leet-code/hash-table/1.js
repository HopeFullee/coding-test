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
  const numDict = {};
  let answer = [];

  nums.forEach((n, idx) => {
    const match = target - n;

    if (match in numDict) {
      answer = [idx, numDict[match]];
    } else numDict[n] = idx;
  });

  return answer;
};

const nums = [3, 2, 3];
const target = 6;

console.log(twoSum(nums, target));
