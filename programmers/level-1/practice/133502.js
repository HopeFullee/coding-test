/*
  https://school.programmers.co.kr/learn/courses/30/lessons/133502
  연습문제 - 햄버거 만들기
*/

/*
  시간 초과로 틀린 풀이
*/

function solution(ingredient) {
  let count = 0;

  let burgerIdx = ingredient.join("").indexOf("1231");

  while (burgerIdx !== -1) {
    count++;
    ingredient.splice(burgerIdx, 4);
    burgerIdx = ingredient.join("").indexOf("1231");
  }

  return count;
}

/*
  [모범 답안]
  stack에 하나씩 쌓아 최근 4자리 수가 '1231' 이라면, stack에서 최근 4개를 빼고 반복.

  [핵심]
  본인의 풀이와 다르게 별도의 stack을 만들어 한개씩의 elem을 추가하기 때문에,
  stack의 크기는 아무리 크다해도 절대적으로 ingredient 원본의 크기 만큼 클 수가 없음.

  즉 1백만의 elem을 가진 원본 ingredient에서 splice() 하는 과정보다,
  비교적 elem의 개수가 적은 stack을 splice하는 과정이 훨신 (매우매우) 빠름. 
*/

function solution2(ingredient) {
  let count = 0;
  const stack = [];

  for (const i of ingredient) {
    stack.push(i);
    if (stack.slice(-4).join("") === "1231") {
      stack.splice(-4);
      count++;
    }
  }

  return count;
}

const ingredient = [1, 2, 1, 2, 3, 1, 3, 1, 2, 3, 1, 2, 3, 1];

console.log(solution(ingredient));
console.log(solution2(ingredient));
