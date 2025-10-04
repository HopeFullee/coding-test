/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120894
  코딩테스트 입문 - 영어가 싫어요
*/

function solution(numbers) {
  const dict = {
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
    zero: "0",
  };
  const match = numbers.match(
    /one|two|three|four|five|six|seven|eight|nine|zero/g
  );

  return Number(match.reduce((acc, m) => acc + dict[m], ""));
}

const numbers = "onetwothreefourfivesixseveneightnine";

console.log(solution(numbers));
