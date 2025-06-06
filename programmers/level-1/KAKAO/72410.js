/*
  https://school.programmers.co.kr/learn/courses/30/lessons/72410
  2021 KAKAO BLIND RECRUITMENT - 신규 아이디 추천
*/

function solution(new_id) {
  let answer = new_id
    .toLowerCase()
    .replace(/[~!@#$%^&*()=+[{\]}:?,<>/]/g, "")
    .replace(/(\.)\1{1,}/g, ".")
    .replace(/^(\.)|(\.)$/g, "")
    .replace(/^$/g, "a")
    .slice(0, 15)
    .replace(/^(\.)|(\.)$/g, "");

  answer =
    answer.length < 3
      ? answer + answer[answer.length - 1].repeat(3 - answer.length)
      : answer;

  return answer;
}

const new_id = "abcdefghijklmn.p";

console.log(solution(new_id));
