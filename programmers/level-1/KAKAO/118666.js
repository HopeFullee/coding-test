/*
  https://school.programmers.co.kr/learn/courses/30/lessons/118666
  2022 KAKAO TECH INTERNSHIP - 성격 유형 검사하기
*/

function solution(survey, choices) {
  const characterTraits = [
    { R: 0, T: 0 },
    { C: 0, F: 0 },
    { J: 0, M: 0 },
    { A: 0, N: 0 },
  ];

  survey.forEach(([A, B], idx) => {
    const curChoice = choices[idx];
    const curTrait = curChoice < 4 ? A : B;

    for (const traits of characterTraits) {
      if (traits[curTrait] === undefined) continue;

      traits[curTrait] += Math.abs(curChoice - 4);
      break;
    }
  });

  return characterTraits.reduce((acc, traits) => {
    const [A, B] = Object.entries(traits);
    return A[1] >= B[1] ? acc + A[0] : acc + B[0];
  }, "");
}

const survey = ["TR", "RT", "TR"];
const choices = [7, 1, 3];

console.log(solution(survey, choices));
