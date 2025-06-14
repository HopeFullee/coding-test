/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181915
  코딩 기초 트레이닝 - 글자 이어 붙여 문자열 만들기
*/

function solution(my_string, index_list) {
  return index_list.reduce((a, idx) => a + my_string[idx], "");
}

const my_string = "cvsgiorszzzmrpaqpe";
const index_list = [16, 6, 5, 3, 12, 14, 11, 11, 17, 12, 7];

console.log(solution(my_string, index_list));
