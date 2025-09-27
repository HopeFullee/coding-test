/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181859
  코딩 기초 트레이닝 - 배열 만들기 6
*/

function solution(arr) {
  const stk = arr.reduce((acc, n) => {
    if (acc[acc.length - 1] === n) {
      acc.pop();
    } else {
      acc.push(n);
    }
    return acc;
  }, []);

  return stk.length ? stk : [-1];
}

const arr = [0, 1, 1, 1, 0];

console.log(solution(arr));
