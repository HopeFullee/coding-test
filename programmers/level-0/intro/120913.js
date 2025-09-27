/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120913
  코딩테스트 입문 - 잘라서 배열로 저장하기
*/

function solution(my_str, n) {
  const arr = [...my_str];

  const newArr = [];

  while (arr.length) {
    newArr.push(arr.splice(0, n).join(""));
  }

  return newArr;
}

const my_str = "abc1Addfggg4556b";
const n = 6;

console.log(solution(my_str, n));
