/*
  https://school.programmers.co.kr/learn/courses/30/lessons/159994
  연습문제 - 카드 뭉치
*/

function solution(cards1, cards2, goal) {
  for (const str of goal) {
    switch (str) {
      case cards1[0]:
        cards1.shift();
        break;
      case cards2[0]:
        cards2.shift();
        break;
      default:
        return "No";
    }
  }

  return "Yes";
}

const cards1 = ["i", "drink", "water"];
const cards2 = ["want", "to"];
const goal = ["i", "want", "to", "drink", "water"];

console.log(solution(cards1, cards2, goal));
