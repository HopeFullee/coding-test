/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120863
  코딩테스트 입문 - 다항식 더하기
*/

function solution(polynomial) {
  const split = polynomial.replaceAll(" ", "").split("+");
  let x = 0;
  let num = 0;

  split.forEach((p) => {
    if (p.includes("x")) {
      const removeX = Number(p.replace("x", ""));
      x += removeX > 0 ? removeX : 1;
    } else {
      num += Number(p);
    }
  });

  if (x && num) return x === 1 ? `x + ${num}` : `${x}x + ${num}`;
  if (x) return x === 1 ? `x` : `${x}x`;
  return `${num}`;
}

const polynomial = "x + 5";

console.log(solution(polynomial));
