/*
  https://leetcode.com/problems/ransom-note/description/
  383. Ransom Note
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let answer = false;

  const dict = [...magazine].reduce((acc, ch) => {
    acc[ch] ? acc[ch]++ : (acc[ch] = 1);
    return acc;
  }, {});

  for (let i = 0; i < ransomNote.length; i++) {
    const ch = ransomNote[i];

    if (dict[ch]) {
      answer = true;
      dict[ch]--;
    } else {
      answer = false;
      break;
    }
  }

  return answer;
};

const ransomNote = "fihjjjjei";
const magazine = "hjibagacbhadfaefdjaeaebgi";

console.log(canConstruct(ransomNote, magazine));
