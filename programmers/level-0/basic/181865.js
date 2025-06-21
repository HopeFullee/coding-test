/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181865
  코딩 기초 트레이닝 - 간단한 식 계산하기
*/

// eval은 보안 위험이 있어 되도록 사용 하지 말자.
function solution(binomial) {
  return eval(binomial);
}

function solution2(binomial) {
  const [a, op, b] = binomial.split(" ");

  switch (op) {
    case "+":
      return Number(a) + Number(b);
    case "-":
      return Number(a) - Number(b);
    case "*":
      return Number(a) * Number(b);
  }
}

const binomial = "43 + 12";

console.log(solution(binomial));
console.log(solution2(binomial));
