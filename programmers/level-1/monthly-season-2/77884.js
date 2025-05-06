/*
  https://school.programmers.co.kr/learn/courses/30/lessons/77884
  월간 코드 챌린지 시즌2 - 약수의 개수와 덧셈
*/

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let factorsCount = 0;

    for (let j = 1; j <= i; j++) {
      if (i % j === 0) factorsCount++;
    }

    if (factorsCount % 2) answer -= i;
    else answer += i;
  }

  return answer;
}

const left = 13;
const right = 17;

console.log(solution(left, right));

/*
  [모범 답안]
  수학 똑똑이님의 답안을 확인하고 감탄사가 나왔다.
  Math.sqrt() 사용으로 n의 제곱근을 구하고, 
  Number.isInteger() 사용으로 해당 제곱근이 '정수'라면
  n의 약수의 개수는 '홀수'라는 것이다!

  [P.S]
  수학을 못해도 코딩을 할수는 있지만,
  코딩을 잘하는 사람은 수학을 잘한다. 
*/

function solution2(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    // (i)의 제곱근이 정수라면 (i)의 약수의 개수는 '홀수'이다
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}

console.log(solution2(left, right));
