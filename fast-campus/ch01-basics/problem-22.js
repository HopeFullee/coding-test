// https://www.acmicpc.net/problem/1316

/* 
  오늘의 교훈 - loop 시 조건에 부합하면 break 할수있는 every(), some() 을 사용하자
               돌아야하는 length에 따라 멈출수 없는 forEach에 비해 시간복잡도면에서 좋아?보임?
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const getGroupStr = (input) => {
  const testCases = Number(input[0]);

  const groupStrCount = [...Array(testCases)].reduce((acc, _, idx) => {
    const str = input[idx + 1].split("");
    const validStr = [];

    // loop 중 오답 발견 시 break 를 위해 forEach 대신 every 사용
    const isGroupStr = str.every((s, idx) => {
      // 오른쪽 단어와 다르다면
      if (s !== str[idx + 1]) {
        // 이전에 이미 등장한 적 있는 단어라면 false 로 break
        if (validStr.includes(str[idx + 1])) return false;
        // 아니라면 다음 검증을 위해 validStr 에 기록하고 true 로 다음 loop 이동
        else {
          validStr.push(s);
          return true;
        }
        // 오른쪽 단어와 같다면 true 로 다음 loop 이동
      } else return true;
    });

    if (isGroupStr) acc += 1;
    return acc;
  }, 0);

  return groupStrCount;
};

console.log(getGroupStr(input));
