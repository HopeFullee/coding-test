/*
  https://school.programmers.co.kr/learn/courses/30/lessons/1845
  해시 - 폰켓몬
*/

/*
  무식하게 nums[i]의 기준으로 nums[j]를 회전하며 문제를 풀어보려 했으나...
  nums의 절반인 n만큼의 종류를 담아서 최고 길이를 비교할려면, n만큼의 loop를 
  통해 i, j, k, +@... 돌아야한다는 생각에 미간의 좌우가 벌어졌다.

  벌어진 미간을 좁히고 다시 문제의 예시 testcase를 살펴보았다.
  우선 문제의 카테고리가 hash 임을 확인하여 set를 활용해 중복을 제거했다.
  set.size > half 라면 half를, size =< half 라면 size를 반환하여 쉽게 해결할 수 있었다.

  [P.S]
  testcase 분석을 통해 보다 현명한 방법으로 문제를 해결하자.
*/

function solution(nums) {
  const set = new Set(nums);
  const half = parseInt(nums.length / 2);
  return set.size > half ? half : set.size;
}

const nums = [3, 1, 2, 3];

console.log(solution(nums));
