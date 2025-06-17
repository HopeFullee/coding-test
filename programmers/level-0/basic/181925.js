/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181925
  코딩 기초 트레이닝 - 수 조작하기 2
*/

function solution(numLog) {
  let ans = "";

  for (let i = 1; i < numLog.length; i++) {
    switch (numLog[i] - numLog[i - 1]) {
      case 1:
        ans += "w";
        break;
      case 10:
        ans += "d";
        break;
      case -1:
        ans += "s";
        break;
      case -10:
        ans += "a";
        break;
    }
  }

  return ans;
}

const numLog = [0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1];

console.log(solution(numLog));
