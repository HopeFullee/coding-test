/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181887
  코딩 기초 트레이닝 - 홀수 vs 짝수
*/

function solution(num_list) {
  const { odd, even } = num_list.reduce(
    ({ odd, even }, num, idx) => {
      if (idx % 2) odd += num;
      else even += num;

      return { odd, even };
    },
    {
      odd: 0,
      even: 0,
    }
  );

  return Math.max(odd, even);
}

const num_list = [4, 2, 6, 1, 7, 6];

console.log(solution(num_list));
