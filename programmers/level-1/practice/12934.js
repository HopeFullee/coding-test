/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12934
  연습문제 - 정수 제곱근 판별
*/

/*
  끔찍한 수포자라 첫 풀이를 brute force 방식으로 무식하게 n 만큼의 loop를 돌았다..
  당연히 시간초과로 틀려버렸고, 수학적으로 근제곱을 구하는 방식을 몰라서 해답을 찾던중
  Math ProtoType 중에 Math.sqrt() '근 제곱'을 찾아주는 함수와 Math.pow() 제곱 계산을 해주는
  두 함수를 알게되어 이를 활용해 문제를 해결할 수 있었다.

  [교훈]
  1. FE 개발이라 해도 수학적 사고방식은 필요하다, 구몬 수학 문제집을 풀어서라도 기본기를 다저야겠다. 
  2. 수학을 못한다면 JS라도 잘배워서 잘쓰자, JS가 지원하는 ProtoType 함수들은 무궁무진하다.
*/

function solution(n) {
  let answer = -1;

  const sqrt = Math.sqrt(n);

  if (sqrt % 1 === 0) {
    answer = Math.pow(sqrt + 1, 2);
  }

  return answer;
}

const n = 121;

console.log(solution(n));
