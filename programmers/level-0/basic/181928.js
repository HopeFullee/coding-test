/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181928
  코딩 기초 트레이닝 - 이어 붙인 수
*/

function solution(num_list) {
  const { odd, even } = num_list.reduce(
    ({ odd, even }, n) => {
      n % 2 ? (odd += n.toString()) : (even += n.toString());
      return { odd, even };
    },
    {
      odd: "",
      even: "",
    }
  );

  return Number(odd) + Number(even);
}

const num_list = [3, 4, 5, 2, 1];

console.log(solution(num_list));
