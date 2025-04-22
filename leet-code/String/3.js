/*
  https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
  3. Longest Substring Without Repeating Characters
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  let start = 0;
  const lastIdx = {};

  [...s].forEach((ch, idx) => {
    if (ch in lastIdx) {
      start = Math.max(start, lastIdx[ch] + 1);
    }

    lastIdx[ch] = idx;
    maxLen = Math.max(maxLen, idx - start + 1);
  });

  return maxLen;
};
