/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181880
  코딩 기초 트레이닝 - 1로 만들기
*/

function solution(num_list) {
  return num_list.reduce((acc, num) => {
    while (num > 1) {
      if (num % 2) {
        num = (num - 1) / 2;
      } else {
        num = num / 2;
      }
      acc++;
    }
    return acc;
  }, 0);
}

const num_list = [12, 4, 15, 1, 14];

console.log(solution(num_list));
