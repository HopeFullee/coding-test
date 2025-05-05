/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12943
  연습문제 - 콜라츠 추측
*/

function solution(num) {
  let count = 0;

  if (num === 1) return count;

  for (let i = 1; i <= 500; i++) {
    if (num % 2 === 0) num = num / 2;
    else num = num * 3 + 1;

    count++;

    if (num === 1) break;
    else if (i === 500) {
      count = -1;
      break;
    }
  }

  return count;
}

const num = 8;
console.log(solution(num));

/* 
  [모범 답안]
  500번까지 실패 시 -1을 반환해야 하는것에 집착을 하다 보니
  for loop을 500회 돌며 index 회차 값으로 -1 을 리턴할려했다. 
  (count 변수를 index 대신 활용해도 됬었기에 굳이 for 를 사용할 필요 X)

  결론은 if 범벅이였던 for loop 대신 iterate 조건을 받는 while 문으로 조금더 깔끔한 코드를 작성해 보았다.
*/

function solution2(num) {
  let count = 0;

  while (num !== 1 && count !== 500) {
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    count++;
  }

  return num === 1 ? count : -1;
}

console.log(solution2(num));
