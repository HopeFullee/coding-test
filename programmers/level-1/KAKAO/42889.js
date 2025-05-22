/*
  https://school.programmers.co.kr/learn/courses/30/lessons/42889
  2019 KAKAO BLIND RECRUITMENT - 실패율
*/

function solution(N, stages) {
  // N + 1개의 stage에 0명의 player로 배열 초기화.
  const stageRecords = Array(N + 1).fill(0);
  const failRate = [];

  // O(N)의 시간복잡도를 위해 사전에 미리 N번째의 stage에 있는 player의 수를 기록.
  // 배열의 index는 스테이지, 배열의 elem은 해당 스테이지의 player 수를 의미함.
  stages.forEach((stage) => stageRecords[stage - 1]++);

  let players = stages.length;

  for (let i = 0; i < N; i++) {
    // N번째의 [스테이지, 실패확률]의 배열을 failRate에 2차원 배열로 기록.
    failRate.push([i + 1, stageRecords[i] / players]);

    // 실패확률 계산 이후 해당 스테이지의 player 수 만큼 제거하고 갱신.
    players -= stageRecords[i];
  }

  return failRate.sort((a, b) => b[1] - a[1]).map(([stage, _]) => stage);
}

const N = 4;
const stages = [3, 3, 3, 3, 3];

console.log(solution(N, stages));
