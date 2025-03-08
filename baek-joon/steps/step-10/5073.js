// https://www.acmicpc.net/problem/5073

/*
  백준한테 개같은 억까를 당했다..

  아래 if 문중 arr를 오름순으로 sort 하여 
  arr[0] + arr[1] 의 합이 <= arr[2] (가장 큰 값) 보다 작으면
  "Invalid" 를 출력하면 된다. 

  여러번의 테스트를 걸쳐봤지만 오류는 찾을 수 없었고 다른 Node.js 풀이를 보고
  if 문중에 reduce와 Math.max 를 남발하는 코드를 확인했다.

  결과적으로 본인이 sort 하여 계산한 방식과 다른 점을 찾을 수 없었지만 
  백준은 합격을 준다......
  
  오늘은 속상한 하루다...

  숙제 - 나중에 정윤쌤에게 꼭 물어봐야겠다 ㅠㅠ

  --------------------------------------------------------------------------------------------------------------------
  
  해결 - 14215 문제를 풀으면서 위에 설명한 sort 와 관련한 오류를 알아냈다!!
        원인은 MDN의 sort설명에서 sort((a, b) => a - b)와 같이 a,b 의 파라미터를
        직접적으로 - 또는 + 로 리턴 하지 않는다면 기본 리턴값으로 숫자를 정렬하는것이 아닌
        UTF-16 코드로 반환하기 때문이였다.
        
        ex) sort() 실행 시 [1, 30, 4, 21, 100000] 배열을 => [1, 100000, 21, 30, 4] UTF-16 코드의 오름차 순으로 리턴한다.
        
        ****************************************************************************
        앞으로 prototype.sort 로 숫자를 정렬할땐 필히 a,b 파라미터를 - 또는 + 로 리턴하자
        ****************************************************************************
*/

// sort 활용 안한 버전

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

// input.forEach((line) => {
//   if (line === "0 0 0") return;

//   const arr = line.split(" ").map(Number);

//   // 문제의 라인
//   if (arr.reduce((acc, n) => acc + n) - Math.max(...arr) <= Math.max(...arr)) {
//     console.log("Invalid");
//     return;
//   }

//   const set = new Set(arr);

//   if (set.size === 1) console.log("Equilateral");
//   else if (set.size === 2) console.log("Isosceles");
//   else if (set.size === 3) console.log("Scalene");
// });

/* 
  ----------------------------------------------------------------------------
*/

// sort 활용한 버전
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.pop();

input.forEach((line) => {
  const arr = line
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  if (arr[0] + arr[1] <= arr[2]) {
    console.log("Invalid");
    return;
  }

  const set = new Set(arr);

  if (set.size === 1) console.log("Equilateral");
  else if (set.size === 2) console.log("Isosceles");
  else if (set.size === 3) console.log("Scalene");
});
