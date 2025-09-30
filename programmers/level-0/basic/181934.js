/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181934
  코딩 기초 트레이닝 - 조건 문자열
*/

function solution(ineq, eq, n, m) {
  const operation = ineq + eq;
  n = Number(n);
  m = Number(m);

  switch (operation) {
    case ">=":
      return Number(n >= m);
    case "<=":
      return Number(n <= m);
    case ">!":
      return Number(n > m);
    case "<!":
      return Number(n < m);
  }
}

const ineq = "<";
const eq = "=";
const n = "20";
const m = "50";

console.log(solution(ineq, eq, n, m));
