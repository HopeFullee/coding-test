/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12916
  연습문제 - 문자열 내 p와 y의 개수
*/

// 내가 풀은 방법
function solution(s) {
  let countP = 0;
  let countY = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "P" || s[i] === "p") {
      countP++;
    } else if (s[i] === "Y" || s[i] === "y") {
      countY++;
    }
  }

  return countP === countY;
}

const s = "pPoooyY";

console.log(solution(s));

/*
  split()을 활용한 모범 답안
  문제를 살펴보면 대문자 소문자를 분간 하지 않기 때문에 
  모든 string을 toUpperCase()로 대문자로 변형한 후
  대문자 P, Y 기준으로 split() 하여 길이를 비교한다.

  [P.S]
  https://jsbench.me/ 벤치 결과
  상단 본인의 코드와 모범 답안의 성능 비교 결과 모법 답안이 11% 가량 느리다는것을 알았다.

  [뇌피셜]
  본인의 코드는 한번의 iterate 과정에서 P, Y의 개수를 검사하는 반면,
  모범 답안은 split()을 P, Y 각각 2회 진행하며 iterate 하기 때문이 아닐까 생각해본다.

  [교훈]
  코드가 짧다고 성능이 우수한 것은 아니다.
*/
function solution2(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

console.log(solution2(s));
