/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12950
  연습문제 - 행렬의 덧셈
*/

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    const curArr = [];

    for (let j = 0; j < arr1[i].length; j++) {
      const a = arr1[i][j];
      const b = arr2[i][j];
      curArr.push(a + b);
    }

    answer.push(curArr);
  }

  return answer;
}

const arr1 = [[1], [2]];
const arr2 = [[3], [4]];

console.log(solution(arr1, arr2));
