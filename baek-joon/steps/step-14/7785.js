//www.acmicpc.net/problem/7785

/*
  <오늘의 실수>

  회사에 남아있는 사람의 목록 remain에서 알파벳 역순으로 하기위해
  sort((a, b) => b - a)를 '습관'적으로 해버렸다..
  
  결론 적으로 '틀렸습니다'를 받고난뒤 sort의 b - a 부분이 Number 타입의 오름,내림 순이란걸 확인했고,
  알파벳 string을 오름,내림차 순으로 변경하기위해 

  sort((a, b)=> {
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })

  위의 코드 방식으로 현재 string과 다음 string의 비교로 
  -1, 1, 0 을 각기 return 하여 정렬을할 수 있었다. 

  <결론>

  위에 알파벳 string 정렬을 위한 소스 코드가 보기 불편했기에
  아무런 파라미터를 넘기지 않고 디폴트로 sort() 를 실행했다.

  디폴트로 실행을 하면 number, string을 분간하지 않고 오름순으로 정렬한다.

  이를 활용해 오름순으로 정렬 후 reverse() 함수를 활용해 알파벳의 역순으로 바꿀 수 있었다.

  [...remain].sort().reverse()
*/

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

const remain = new Set();

input.forEach((log) => {
  const [name, status] = log.split(" ");

  if (status === "enter") {
    remain.add(name);
  } else {
    remain.delete(name);
  }
});

const result = [...remain].sort().reverse().join("\n");

console.log(result);
