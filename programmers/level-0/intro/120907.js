/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120907
  코딩테스트 입문 - OX퀴즈
*/

function solution(quiz) {
  return quiz.map((q) => {
    const [calc, res] = q.split("=");
    const [x, op, y] = calc.trim().split(" ");

    let ans = 0;

    switch (op) {
      case "+":
        ans = Number(x) + Number(y);
        break;
      case "-":
        ans = Number(x) - Number(y);
    }

    return ans === Number(res) ? "O" : "X";
  });
}

const quiz = ["3 - 4 = -3", "5 + 6 = 11"];

console.log(solution(quiz));
