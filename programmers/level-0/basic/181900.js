/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181900
  코딩 기초 트레이닝 - 글자 지우기
*/

// my_string에서 indices를 뺀 방법
function solution(my_string, indices) {
  indices = indices.sort((a, b) => a - b).map((n, idx) => n - idx);

  indices.forEach((i) => {
    my_string = my_string.slice(0, i) + my_string.slice(i + 1);
  });

  return my_string;
}

// my_string에서 indices가 아닌 character들만 남긴 방법
function solution2(my_string, indices) {
  return [...my_string].filter((_, idx) => !indices.includes(idx)).join("");
}

const my_string = "apporoograpemmemprs";
const indices = [1, 16, 6, 15, 0, 10, 11, 3];

console.log(solution(my_string, indices));
console.log(solution2(my_string, indices));
