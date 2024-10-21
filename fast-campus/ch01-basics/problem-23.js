// https://www.acmicpc.net/problem/1152

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const getWordCount = (input) => {
  const word = input.split(" ");

  if (!input) return 0;
  else return word.length;
};

console.log(getWordCount(input));
