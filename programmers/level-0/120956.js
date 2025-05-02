/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120956
  120956 - 옹알이 (1)

  머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다.
  조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대
  한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다.
  문자열 배열 babbling이 매개변수로 주어질 때,
  머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
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
