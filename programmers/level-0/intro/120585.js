/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120585
  코딩테스트 입문 - 머쓱이보다 키 큰 사람
*/

function solution(array, height) {
  return array.filter((n) => height < n).length;
}

const array = [149, 180, 192, 170];
const height = 167;

console.log(solution(array, height));
