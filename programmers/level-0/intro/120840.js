/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120840
  코딩테스트 입문 - 구슬을 나누는 경우의 수
*/

function solution(balls, share) {
  let totalCombos = 0;

  function recur(idx, currCombo) {
    if (currCombo.length === share) {
      totalCombos++;
      return;
    }
    for (let i = idx; i < balls; i++) {
      currCombo.push(i);
      recur(i + 1, currCombo);
      currCombo.pop();
    }
  }

  recur(0, []);

  return totalCombos;
}

const balls = 5;
const share = 3;

console.log(solution(balls, share));
