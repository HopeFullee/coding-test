/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120921
  코딩테스트 입문 - 문자열 밀기
*/

// 부르트포스 풀이..
function solution(A, B) {
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (A === B) {
      count = i;
      break;
    }

    if (i === A.length - 1) {
      count = -1;
    }

    const head = A.slice(0, -1);
    const tail = A.slice(A.length - 1);
    A = tail + head;
  }

  return count;
}

// 멋쟁이 코딩
function solution2(a, b) {
  return (b + b).indexOf(a);
}

const A = "hello";
const B = "elloh";

console.log(solution(A, B));
console.log(solution2(A, B));
