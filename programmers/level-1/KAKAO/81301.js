/*
  https://school.programmers.co.kr/learn/courses/30/lessons/81301
  2021 카카오 채용연계형 인턴십 - 숫자 문자열과 영단어
*/

function solution(s) {
  const dict = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const regex = /[0-9]|(zero|one|two|three|four|five|six|seven|eight|nine)/g;
  const MatchArr = s.match(regex);

  const answer = MatchArr.reduce((acc, num) => {
    return dict[num] !== undefined ? acc + dict[num] : acc + num;
  }, "");

  return Number(answer);
}

const s = "one4seveneight";

console.log(solution(s));

/*
  [모범 답안]
  정규식 표현 없이 iterate loop의 index값으로 풀이 한 방법.

  [P.S] 
  정규식 부터 생각한 본인은 반성이 필요하다..
  그래도 풀 수 있었다는 점에 이의를 두고 더 발전하자!!!
*/

function solution2(s) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  let answer = s;

  for (let i = 0; i < numbers.length; i++) {
    const split = answer.split(numbers[i]);
    answer = split.join(i);
  }

  return Number(answer);
}

console.log(solution2(s));
