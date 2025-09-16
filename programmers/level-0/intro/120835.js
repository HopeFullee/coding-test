/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120835
  코딩테스트 입문 - 진료순서 정하기
*/

function solution(emergency) {
  const desc = [...emergency].sort((a, b) => b - a);

  return emergency.map((n) => {
    const newIdx = desc.indexOf(n) + 1;
    return newIdx;
  });
}

const emergency = [3, 76, 24];

console.log(solution(emergency));
