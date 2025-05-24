/*
  https://school.programmers.co.kr/learn/courses/30/lessons/140108
  연습문제 - 문자열 나누기
*/

function solution(s) {
  let sliceCount = 0;
  let x = "";
  let sameCount = 0;
  let diffCount = 0;

  for (const str of s) {
    if (x === "") x = str;

    if (x === str) {
      sameCount++;
    } else {
      diffCount++;

      if (diffCount === sameCount) {
        x = "";
        sameCount = 0;
        diffCount = 0;
        sliceCount++;
      }
    }
  }

  if (sameCount > diffCount) return sliceCount + 1;
  else return sliceCount + sameCount;
}

const s = "banana";

console.log(solution(s));

/*
  [모범 답안]
*/

function solution2(s) {
  let answer = 0;
  let current;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (count === 0) {
      answer++;
      current = s[i];
      count = 1;
    } else {
      if (current !== s[i]) count--;
      else count++;
    }
  }

  return answer;
}
