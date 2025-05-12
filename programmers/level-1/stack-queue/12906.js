/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12906
  스택/큐 - 같은 숫자는 싫어
*/

function solution(arr) {
  const answer = [];

  for (num of arr) {
    if (answer[answer.length - 1] !== num) {
      answer.push(num);
    }
  }

  return answer;
}

const arr = [1, 1, 3, 3, 0, 1, 1];

console.log(solution(arr));

/*
  [모법 답안]
  filter 를 활용한 깔끔한 버전
*/

function solution2(arr) {
  // 현재 num과 다음 num이 서로 다른 값만 추출
  const answer = arr.filter((num, idx) => num !== arr[idx + 1]);
  return answer;
}

console.log(solution2(arr));
