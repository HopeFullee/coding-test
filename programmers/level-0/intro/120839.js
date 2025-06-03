/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120839
  코딩테스트 입문 - 가위 바위 보
*/

function solution(rsp) {
  const dict = {
    2: "0",
    0: "5",
    5: "2",
  };

  return [...rsp].reduce((a, v) => a + dict[v], "");
}

const rsp = "205";

console.log(solution(rsp));
