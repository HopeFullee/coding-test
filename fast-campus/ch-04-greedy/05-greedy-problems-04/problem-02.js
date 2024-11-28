// https://www.acmicpc.net/problem/17609

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const isPalindrome = (str) => {
  return str === [...str].reverse().join("");
};

input.forEach((tc) => {
  if (isPalindrome(tc)) console.log(0);
  else {
    let isPseudo = false;
    let leftIdx = 0;
    let rightIdx = tc.length - 1;

    while (leftIdx < rightIdx) {
      if (tc[leftIdx] !== tc[rightIdx]) {
        const leftCharRemoved =
          tc.slice(0, leftIdx) + tc.slice(leftIdx + 1, tc.length);
        const rightCharRemoved =
          tc.slice(0, rightIdx) + tc.slice(rightIdx + 1, tc.length);

        if (isPalindrome(leftCharRemoved)) isPseudo = true;
        if (isPalindrome(rightCharRemoved)) isPseudo = true;
        break;
      }
      leftIdx++;
      rightIdx--;
    }

    if (isPseudo) console.log(1);
    else console.log(2);
  }
});
