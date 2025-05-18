/*
  https://school.programmers.co.kr/learn/courses/30/lessons/17681
  2018 KAKAO BLIND RECRUITMENT - [1차] 비밀지도
*/

function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    const binary1 =
      "0".repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2);
    const binary2 =
      "0".repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2);

    const combine = [...binary1].reduce((acc, bit1, idx) => {
      const bit2 = binary2[idx];
      return Number(bit1) || Number(bit2) ? acc + "#" : acc + " ";
    }, "");

    answer.push(combine);
  }

  return answer;
}

const n = 6;
const arr1 = [46, 33, 33, 22, 31, 50];
const arr2 = [27, 56, 19, 14, 14, 10];

console.log(solution(n, arr1, arr2));

/*
  [모범 답안]
  각각의 arr1, arr2를 toString(2) 이진수로 변경할때, 
  (arr1[i] | arr2[i]).toString(2) 변환중 '|' 연산자로 이진수를 합체할 수 있다는 것을 확인.

  합체 이후에도 '0'을 추가하기 위해 repeat를 활용하기 보다 padStart() 함수를 활용할 수 있다는 것을 확인.

  '0' 추가 작업이 끝난 후 replace(/1|0/g) 내 정규식 비교로 '0'을 (' ')공백으로, '1'을 ('#')샵으로 변경. 
*/

function solution2(n, arr1, arr2) {
  return arr1.map((num1, idx) => {
    const num2 = arr2[idx];
    const binaryCombine = (num1 | num2).toString(2).padStart(n, 0);
    return binaryCombine.replace(/1|0/g, (bit) => (Number(bit) ? "#" : " "));
  });
}

console.log(solution2(n, arr1, arr2));
