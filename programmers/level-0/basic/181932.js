/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181932
  코딩 기초 트레이닝 - 코드 처리하기
*/

function solution(code) {
  let mode = 0;

  const ans = [...code].reduce((acc, c, idx) => {
    if (c === "1") {
      mode = mode % 2 ? 0 : 1;
    } else if (mode && idx % 2) {
      acc += c;
    } else if (!mode && !(idx % 2)) {
      acc += c;
    }

    return acc;
  }, "");

  return ans.length ? ans : "EMPTY";
}

const code = "1abc";

console.log(solution(code));
