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
*/

// const input = require("fs")
//   .readFileSync("/dev/stdin")
//   .toString()
//   .trim()
//   .split("\n");

const input = ["7 7 7", "6 5 4", "3 2 5", "6 2 6", "0 0 0"];

input.forEach((line) => {
  if (line === "0 0 0") return;

  const arr = line.split(" ").map(Number);

  // 문제의 라인
  if (arr.reduce((acc, n) => acc + n) - Math.max(...arr) <= Math.max(...arr)) {
    console.log("Invalid");
    return;
  }

  const set = new Set(arr);

  if (set.size === 1) console.log("Equilateral");
  else if (set.size === 2) console.log("Isosceles");
  else if (set.size === 3) console.log("Scalene");
});
