/*
  https://school.programmers.co.kr/learn/courses/30/lessons/133499
  연습문제 - 옹알이 (2)
*/

function solution(babbling) {
  let count = 0;

  for (const bab of babbling) {
    const match = bab.match(/aya|ye|woo|ma/g);

    // match 배열이 null 이라면 babbling 내 허용 가능한 단어가 없음으로 continue.
    // 또는 join한 String 값이 babbling과 같지 않다면, babbling 내 허용 하지 않는 단어가 섞여있음으로 continue.
    if (match === null || match.join("") !== bab) continue;

    // 상단 match 부분에서 불순물 없이 허용 가능한 단어들만 통과 시켜줌.
    // match 내 연속해서 동일한 단어를 말하는 검사.
    const isConsecutive = match.some((str, idx) => {
      if (str === match[idx + 1]) return true;
      else return false;
    });

    // 연속해서 같은 단어가 없다면 valid 한 단어임으로 count 증가.
    if (!isConsecutive) count++;
  }

  return count;
}

const babbling = [
  "ayaye",
  "uuu",
  "yeye",
  "yemawoo",
  "ayaayaa",
  "myea",
  "wooyemawooye",
];

console.log(solution(babbling));

/*
  [모법 답안]
  정규식을 적당히 활용한 본인의 풀이도 나쁘다고 생각하진 않지만, 
  개쩌는 100% 정규식 풀이의 모범 답안을 발견하고 반성하게 되었다.

  [P.S]
  코테의 난이도가 올라갈수록 정규식의 필요성은 커지는것 같다.
*/

function solution2(babbling) {
  // (그룹) 내 있는 단어들이 연속 (back-to-back) 반복하는지 검사
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  // (그룹) 내 있는 단어들로만 구성되어 있는지 (불순물) 검사
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    // 허용하는 단어들중 연속적 (back-to-back)으로 등장하는 단어가 없고,
    // 불순물 없이 허용하는 단어들로만 구성되어 있다면, ++ans.
    (acc, word) => (!regexp1.test(word) && regexp2.test(word) ? ++acc : acc),
    0
  );
}

console.log(solution2(babbling));
