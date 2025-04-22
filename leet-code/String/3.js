/*
  https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
  3. Longest Substring Without Repeating Characters
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();
  const countArr = [];

  for (let i = 0; i < s.length; i++) {
    if (!set.has(s[i])) {
      set.add(s[i]);
      countArr.push(set.size);
    } else {
      set.clear();
      set.add(s[i]);
      countArr.push(set.size);
    }
  }

  return !countArr.length ? 0 : Math.max(...countArr);
};

console.log(lengthOfLongestSubstring("dvdf"));
