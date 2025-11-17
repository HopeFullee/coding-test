/*
  https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away/?envType=daily-question&envId=2025-11-17
  Easy - 1437. Check If All 1's Are at Least Length K Places Away
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

function kLengthApart(nums, k) {
  if (k === 0) return true;

  let prevOneIdx = nums.indexOf(1);
  nums[prevOneIdx] = 0;

  while (nums.indexOf(1) !== -1) {
    const idx = nums.indexOf(1);
    nums[idx] = 0;

    idx;
    prevOneIdx;

    if (idx - prevOneIdx < k + 1) {
      return false;
    }

    prevOneIdx = idx;
  }

  return true;
}

const nums = [1, 1, 1, 1, 0, 0, 1, 1, 0];
const k = 0;

console.log(kLengthApart(nums, k));
