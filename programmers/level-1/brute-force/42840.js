/*
  https://school.programmers.co.kr/learn/courses/30/lessons/42840
  완전탐색 - 모의고사
*/

/*
  본의 아니게 멋쟁이 코딩을 해버렸다..
  간단하게 생각해 학생의 수가 3명으로 항상 CONSTANT 하다면,
  굳이 obj로 관리하여 entries 배열 변환으로 loop를 도는것은 사실상 불필요 하다.

  하지만 만약 학생의 수가 N개가 들어온다면, obj에 학생의 정보만 추가 하면 됨으로
  유지보수면에서 큰 이점이 있다고 판단하여 이렇게 풀어보았다.
*/

function solution(answers) {
  const students = {
    1: [1, 2, 3, 4, 5],
    2: [2, 1, 2, 3, 2, 4, 2, 5],
    3: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  };

  const scores = answers.reduce(
    (acc, answer, ansIdx) => {
      Object.entries(students).forEach(([stdID, stdAns]) => {
        if (answer === stdAns[ansIdx % stdAns.length]) {
          acc[stdID]++;
        }
      });

      return acc;
    },
    { 1: 0, 2: 0, 3: 0 }
  );

  const maxScore = Math.max(...Object.values(scores));

  return Object.entries(scores).reduce((acc, [stdID, score]) => {
    if (score === maxScore) acc.push(Number(stdID));
    return acc;
  }, []);
}

const answers = [1, 2, 3, 4, 5];

console.log(solution(answers));
