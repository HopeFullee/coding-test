/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120883
  코딩테스트 입문 - 로그인 성공?
*/

function solution(id_pw, db) {
  const hash = new Map(db);
  const [id, pw] = id_pw;

  const db_pw = hash.get(id);

  if (pw === db_pw) return "login";
  if (db_pw) return "wrong pw";
  if (!db_pw) return "fail";
}

const id_pw = ["meosseugi", "1234"];
const db = [
  ["rardss", "123"],
  ["yyoom", "1234"],
  ["meosseugi", "1234"],
];

console.log(solution(id_pw, db));
