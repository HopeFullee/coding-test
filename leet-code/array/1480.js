/*
  https://leetcode.com/problems/running-sum-of-1d-array/description/
  1480. Running Sum of 1d Array
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  const { incrementArr } = nums.reduce(
    (acc, n) => {
      acc.incrementArr.push((acc.prev += n));
      return acc;
    },
    {
      prev: 0,
      incrementArr: [],
    }
  );

  return incrementArr;
};

const nums = [1, 2, 3, 4];
console.log(runningSum(nums));
