/*
  https://school.programmers.co.kr/learn/courses/30/lessons/388351
  2025 프로그래머스 코드챌린지 1차 예선 - 유연근무제
*/

function solution(schedules, timelogs, startday) {
  let answer = 0;

  for (let i = 0; i < schedules.length; i++) {
    let dueTime = schedules[i] + (schedules[i] % 100 > 49 ? 50 : 10);

    const isOnTime = timelogs[i].every((checkIn, idx) => {
      const curDay = (startday + idx) % 7;

      if (curDay === 6 || curDay === 0) return true;

      if (checkIn <= dueTime) return true;

      return false;
    });

    answer += Number(isOnTime);
  }

  return answer;
}

const schedules = [730, 855, 700, 720];
const timelogs = [
  [710, 700, 650, 735, 700, 931, 912],
  [908, 901, 805, 815, 800, 831, 835],
  [705, 701, 702, 705, 710, 710, 711],
  [707, 731, 859, 913, 934, 931, 905],
];
const startday = 1;

console.log(solution(schedules, timelogs, startday));
