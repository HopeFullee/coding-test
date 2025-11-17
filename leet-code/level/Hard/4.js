/*
  https://leetcode.com/problems/median-of-two-sorted-arrays/description/
  Hard - 4. Median of Two Sorted Arrays
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  const concated = nums1.concat(nums2);
  const mid = parseInt(concated.length / 2);
  concated.sort((a, b) => a - b);

  if (concated.length % 2) {
    return concated[mid];
  } else {
    return (concated[mid - 1] + concated[mid]) / 2;
  }
}

const nums1 = [1, 2];
const nums2 = [3, 4];
console.log(findMedianSortedArrays(nums1, nums2));
