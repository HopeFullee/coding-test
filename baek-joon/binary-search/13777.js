/*
  tier: bronze 1
  https://www.acmicpc.net/problem/13777

  일기 - 수포자 입장에서 이진/이분 탐색 문제는 정말 어렵다..
        fast-campus 강의를 들어도 소귀에 경읽는 느낌이라 좌절하다
        근본적인 이해가 필요하다 느껴 그나마 제일 쉬운 브론즈1 티어의 문제를
        한줄 한줄 따라가며 이해력을 높이는 2시간 가량의 시간을 가져봤다.

  P.S - 현재 백준 기준 브론즈 티어 문제내에서 binary 문제는 이게 유일했다.. 
        고로 이진/이분 탐색은 태생 난이도가 기본적으로 높은 편이기에 
        좌절하지 말고 사전 단계들 부터 천천히 풀어가자.
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();

const arr = input.map(Number);

arr.forEach((target) => {
  let start = 1;
  let end = 50;

  const recordMid = [];

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    recordMid.push(mid);

    if (mid === target) break;

    if (mid < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(recordMid.join(" "));
});
