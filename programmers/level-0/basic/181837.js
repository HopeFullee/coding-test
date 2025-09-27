/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181837
  코딩 기초 트레이닝 - 커피 심부름
*/

function solution(order) {
  return order.reduce((acc, str) => {
    if (str.includes("cafelatte")) {
      acc += 5000;
    } else {
      acc += 4500;
    }

    return acc;
  }, 0);
}

const order = ["cafelatte", "americanoice", "hotcafelatte", "anything"];

console.log(solution(order));
