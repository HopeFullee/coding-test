/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181836
  코딩 기초 트레이닝 - 그림 확대
*/

function solution(picture, k) {
  const newPicture = [];

  picture.forEach((frame) => {
    let newFrame = "";

    for (const ch of frame) {
      newFrame += ch.repeat(k);
    }

    for (let i = 0; i < k; i++) {
      newPicture.push(newFrame);
    }
  });

  return newPicture;
}

const picture = [
  ".xx...xx.",
  "x..x.x..x",
  "x...x...x",
  ".x.....x.",
  "..x...x..",
  "...x.x...",
  "....x....",
];

const k = 2;

console.log(solution(picture, k));
