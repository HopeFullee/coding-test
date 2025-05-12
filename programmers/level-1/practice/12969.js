/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12969
  연습문제 - 직사각형 별찍기
*/

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const [N, M] = data.split(" ").map(Number);

  let answer = "";

  for (let i = 0; i < M; i++) {
    answer += `${"*".repeat(N)}\n`;
  }

  console.log(answer);
});
