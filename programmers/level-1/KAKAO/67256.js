/*
  https://school.programmers.co.kr/learn/courses/30/lessons/67256
  2020 카카오 인턴십 - 키패드 누르기
*/

/*
  [모범 답안]
  *은 10
  0은 11
  #은 12로 변환

  (현재 위치한 수 - 목표 숫자)의 절댓값을 구한 뒤 이 절댓값을 3으로 나눈 몫( 위나 아래로 갈 때 3씩 변함 )과
  3으로 나눈 나머지( 왼쪽 오른쪽으로 갈 때 마다 1씩 변함 )를 더한 값이 이동 횟수입니다.
*/

function solution(numbers, hand) {
  let answer = "";
  let leftPos = "10";
  let rightPos = "12";

  numbers = numbers.map((n) => (n === 0 ? 11 : n));

  for (const n of numbers) {
    if ([1, 4, 7].includes(n)) {
      leftPos = n;
      answer += "L";
    } else if ([3, 6, 9].includes(n)) {
      rightPos = n;
      answer += "R";
    } else {
      const leftAbs = Math.abs(leftPos - n);
      const rightAbs = Math.abs(rightPos - n);

      const leftGap = parseInt(leftAbs / 3) + (leftAbs % 3);
      const rightGap = parseInt(rightAbs / 3) + (rightAbs % 3);

      if (leftGap < rightGap) {
        leftPos = n;
        answer += "L";
      } else if (leftGap > rightGap) {
        rightPos = n;
        answer += "R";
      } else {
        if (hand === "left") {
          leftPos = n;
          answer += "L";
        } else {
          rightPos = n;
          answer += "R";
        }
      }
    }
  }

  return answer;
}

const numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
const hand = "left";

console.log(solution(numbers, hand));
