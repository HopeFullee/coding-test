/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181913
  코딩 기초 트레이닝 - 문자열 여러 번 뒤집기
*/

function solution(my_string, queries) {
  queries.forEach(([s, e]) => {
    const head = my_string.slice(0, s);
    const tail = my_string.slice(e + 1);
    const reversed = my_string
      .slice(s, e + 1)
      .split("")
      .reverse()
      .join("");

    my_string = head + reversed + tail;
  });

  return my_string;
}

const my_string = "rermgorpsam";
const queries = [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
];

console.log(solution(my_string, queries));
