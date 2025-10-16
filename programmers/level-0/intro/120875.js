/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120875
  코딩테스트 입문 - 평행
*/

function solution(dots) {
  const getSlope = ([x1, y1], [x2, y2]) => (y2 - y1) / (x2 - x1);

  const lines = dots.reduce((acc, dot, idx) => {
    for (let j = idx + 1; j < dots.length; j++) {
      acc.push({ point: [idx, j], slope: getSlope(dot, dots[j]) });
    }
    return acc;
  }, []);

  const isParallel = lines.some((line, idx) => {
    for (let j = idx + 1; j < lines.length; j++) {
      const point1 = line.point;
      const point2 = lines[j].point;

      if (new Set([...point1, ...point2]).size === 4) {
        return line.slope === lines[j].slope;
      }
    }
  });

  return Number(isParallel);
}

const dots = [
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
];

console.log(solution(dots));
