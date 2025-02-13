// https://www.acmicpc.net/problem/11005

/*
  protoType.toString 내장 함수에 첫번쩨 인자로 base10인 integer를 넘김
  두번쩨 인자로 변환(encode)할 base를 입력하여 encode 함.
  
  반대의 경우 parseInt 함수로 base36의 string을 base10으로 decode 함.
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [N, B] = input.split(" ").map(Number);

console.log(N.toString(B).toUpperCase());
