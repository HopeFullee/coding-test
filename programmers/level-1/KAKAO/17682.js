/*
  https://school.programmers.co.kr/learn/courses/30/lessons/17682
  2018 KAKAO BLIND RECRUITMENT
  17682 - [1차] 다트 게임
*/

function solution(dartResult) {
  const pointArr = [];

  const bonusDict = {
    S: (p) => p,
    D: (p) => p * p,
    T: (p) => p * p * p,
    "*": (p) => p * 2,
    "#": (p) => p * -1,
  };

  [...dartResult].forEach((record, idx) => {
    const point = Number(record);

    if (point >= 0) {
      if (point === 0 && Number(dartResult[idx - 1])) {
        pointArr.pop();
        pointArr.push(10);
      } else pointArr.push(point);
    } else {
      const curPoint = pointArr.pop();

      if (record === "*") {
        const prevPoint = pointArr.pop();
        if (prevPoint) {
          const updatePrev = bonusDict[record](prevPoint);
          pointArr.push(updatePrev);
        }
      }

      const updateCur = bonusDict[record](curPoint);
      pointArr.push(updateCur);
    }
  });

  const totalScore = pointArr.reduce((a, p) => a + p);
  return totalScore;
}

const dartResult = "1D#2S*3S";

console.log(solution(dartResult));
