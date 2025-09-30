/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181890
  코딩 기초 트레이닝 - 왼쪽 오른쪽
*/

function solution(str_list) {
  const some = str_list.some((str, idx) => {
    if (str === "l") {
      str_list.splice(idx);
      return true;
    }

    if (str === "r") {
      str_list.splice(0, idx + 1);
      return true;
    }
  });

  return some ? str_list : [];
}

const str_list = ["u", "u", "u", "u"];

console.log(solution(str_list));
