// https://www.acmicpc.net/problem/2745

/*
  오늘의 교훈 -
    문제를 푸는 시간 보다 문제 자체를 이해하는데 더 많은 시간이 들었다.
    10진법과 2진법은 지금껏 코테를 풀어가며 경험이 있는 친구들인데,
    36진법과 같이 알파벳이 섞인 진수의 형태는 생소했다.

    결론적으로 수학적인 풀이 방식으로 풀진 않았지만,
    일상 코테에서 소수점을 제거하기 위해 흔하게 사용해온 
    prototype 내장함수의 parseInt 로 해결할 수 있었다.

    함수 이름 자체가 뜻하길 parse 분석/해석하여 int 정수(10진법)로 변경.
    첫 번쩨 파라미터에 N진법의 수를 넘기고,
    두 번쩨 파라미터는 앞전에 넘긴 N수의 진법형태 (2, 10, 36.. 등등) 를 넘겨준다.
*/

const input = require("fs").readFileSync("/dev/stdin").toString().trim();

const [N, B] = input.split(" ");

console.log(parseInt(N, B));
