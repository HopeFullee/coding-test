/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120902
  코딩테스트 입문 - 문자열 계산하기
*/

function solution(my_string) {
  const arr = my_string.split(" ");

  let total = Number(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    switch (arr[i]) {
      case "+":
        total += Number(arr[i + 1]);
        break;
      case "-":
        total -= Number(arr[i + 1]);
        break;
    }
  }

  return total;
}

const my_string = "30 + 40 + 30";

console.log(solution(my_string));
