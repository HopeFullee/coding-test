/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120882
  코딩테스트 입문 - 등수 매기기
*/

// 수포자 빡대가리식 브루트포스 풀이 (원본)
function solution(score) {
  let prevAvg = 101;
  let rank = 1;
  let tied = 0;

  return score
    .map(([eng, math], idx) => [(eng + math) / 2, idx])
    .sort(([a], [b]) => b - a)
    .map(([avg, idx]) => {
      if (prevAvg > avg) {
        prevAvg = avg;
        rank += tied;
        tied = 1;
        return [rank, idx];
      }

      if (prevAvg === avg) tied++;

      return [rank, idx];
    })
    .sort((a, b) => a[1] - b[1])
    .map(([rank]) => rank);
}

// 멋쟁이 코딩 1
function solution2(score) {
  const avg = score.map((v) => (v[0] + v[1]) / 2);
  // deep-copy 안하면 avg 원본 배열도 sorting 됨.
  const sorted = [...avg].sort((a, b) => b - a);

  return avg.map((v) => sorted.indexOf(v) + 1);
}

// 멋쟁이 코딩 2
function solution3(score) {
  return score.map((a) => {
    return (
      score.filter((b) => (b[0] + b[1]) / 2 > (a[0] + a[1]) / 2).length + 1
    );
  });
}

const score = [
  [80, 70],
  [90, 50],
  [40, 70],
  [50, 80],
];

console.log(solution(score));
console.log(solution2(score));
console.log(solution3(score));
