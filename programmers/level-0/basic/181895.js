/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181895
  코딩 기초 트레이닝 - 배열 만들기 3
*/

function solution(arr, intervals) {
  const newArr = intervals.reduce((acc, [start, end]) => {
    for (let i = start; i <= end; i++) {
      acc.push(arr[i]);
    }
    return acc;
  }, []);

  return newArr;
}

// 멋쟁이 코딩
function solution2(arr, intervals) {
  const [[a, b], [c, d]] = intervals;
  const newArr = [...arr.slice(a, b + 1), ...arr.slice(c, d + 1)];

  return newArr;
}

// 멋쟁이 코딩 2
function solution3(arr, intervals) {
  const newArr = intervals.flatMap(([start, end]) => arr.slice(start, end + 1));

  return newArr;
}

const arr = [1, 2, 3, 4, 5];
const intervals = [
  [1, 3],
  [0, 4],
];

console.log(solution(arr, intervals));
console.log(solution2(arr, intervals));
console.log(solution3(arr, intervals));
