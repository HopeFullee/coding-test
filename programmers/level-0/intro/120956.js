/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120956
  코딩테스트 입문 - 옹알이 (1)
*/

/*
  0레벨이긴 하지만 정답률이 가장 낮은 문제를 20분 내로 풀었다.. 조금은 뿌듯하다.. 히히
*/

function solution(babbling) {
  const set = new Set(["aya", "ye", "woo", "ma"]);

  let answer = 0;

  babbling.forEach((str) => {
    const arr = [...str];

    while (arr.length > 0) {
      const slice2 = arr.slice(0, 2).join("");
      const slice3 = arr.slice(0, 3).join("");

      if (set.has(slice2)) {
        arr.splice(0, 2);
      } else if (set.has(slice3)) {
        arr.splice(0, 3);
      } else {
        break;
      }
    }

    if (!arr.length) answer++;
  });

  return answer;
}

const babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];

console.log(solution(babbling));
