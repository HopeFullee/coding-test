/*
  https://school.programmers.co.kr/learn/courses/30/lessons/131705
  연습문제 - 삼총사
*/

function solution(number) {
  let count = 0;

  for (let i = 0; i < number.length; i++) {
    for (let j = i + 1; j < number.length; j++) {
      for (let k = j + 1; k < number.length; k++) {
        console.log(number[k]);
        if (number[i] + number[j] + number[k] === 0) count++;
      }
    }
  }

  return count;
}

const number = [-2, 3, 0, 2, -5];

console.log(solution(number));

/*
  [모범 답안]
  재귀 함수를 활용한 방법
*/

function solution2(number) {
  let result = 0;

  const combination = (current, start) => {
    if (current.length === 3) {
      result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
      return;
    }

    for (let i = start; i < number.length; i++) {
      combination([...current, number[i]], i + 1);
    }
  };

  combination([], 0);

  return result;
}

console.log(solution2(number));
