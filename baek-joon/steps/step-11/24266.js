// https://www.acmicpc.net/problem/24266

/*
  출처: https://minjo0n.tistory.com/12

  JavaScript로 표현할 수 있는 Number의 최대 범위는 9,007,199,254,740,991 까지 이지만
  예제 test case 에선 n이 최대 500,000 까지 나와서 N^3 을하여 최대 125,000,000,000,000,000 까지 나옴으로
  JavaScript로 표현할 수 있는 범위를 넘어 버려 '틀렸습니다' 가 나왔었음.

  위에 출처의 설명대로 JS가 표현할 수 있는 최대 Number를 넘기 위해 BigInt를 활용한다.
  input으로 받은 N을 BigInt로 변환하고 N^3으로 곱한뒤 출력을 하면 끝나지만,
  BigInt로 변환된 숫자는 꼬리에 "n"이 붙게 된다.

  꼬리에 "n"을 제거 하기 위해서 N^3계산 이후 -> String으로 변환해주면 꼬리에 "n"이 제거 되어있다.
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const n = BigInt(input);

console.log(`${n * n * n}`);
console.log(3);
