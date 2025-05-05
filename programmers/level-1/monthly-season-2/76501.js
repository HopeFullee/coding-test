/*
  https://school.programmers.co.kr/learn/courses/30/lessons/76501
  월간 코드 챌린지 시즌2 - 음양 더하기
*/

function solution(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      sum += Number("-" + absolutes[i]);
    } else sum += absolutes[i];
  }

  return sum;
}

const absolutes = [4, 7, 12];
const signs = [true, false, true];

console.log(solution(absolutes, signs));

/*
  [모법 답안]
  본인의 코드 처럼 음수를 만들기 위해 "-" string을 붙이고 Number로 바꾸는 대신
  음수라면 -1 을 곱하고 정수라면 1 을 곱하면 된다.
*/

function solution2(absolutes, signs) {
  let sum = 0;

  for (let i = 0; i < absolutes.length; i++) {
    sum += absolutes[i] * (signs[i] ? 1 : -1);
  }

  return sum;
}

console.log(solution2(absolutes, signs));
