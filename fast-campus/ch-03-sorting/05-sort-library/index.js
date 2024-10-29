// merge sort 병합 정렬 라이브러리 사용 예시
const arr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

const compare = (a, b) => {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
};

arr.sort(compare);

// 축약 버전
arr.sort((a, b) => {
  return a - b;
});

/* 
  오름차, 내림차 기준 설명
  1. 기준을 잡기 위한 (a, b)의 파라미터를 받는다
  2. 받은 (a, b)의 파라미터로 계산하여 오름차, 내림차 기준을 정한다.
  3. 오름차의 경우
      a - b 를 계산한다.
      b가 a보다 크다면 음수 negative number를 리턴.
      a가 b보다 크다면 양수 positive number를 리턴.
      a와 b가 같다면 0을 리턴.

  4. 내림차의 경우
      b - a 를 계산한다.
      a가 b보다 크다면 음수 negative number를 리턴.
      b가 a보다 크다면 양수 positive number를 리턴.
      b와 a가 같다면 0을 리턴.
  
  5. (a, b)를 오름차 및 내림차로 계산하고
     - 음수 negative number가 리턴된다면
       1. 파라미터(a, b)의 기준 앞쪽(a)의 value를 앞으로(unshift) 보낸다.
       2. 남은 (b)의 value는 앞쪽에 먼저 보낸 (a)의 value뒤에(push) 보낸다.
     - 양수 positive number가 리턴된다면
       1. 파라미터(a, b)의 기준 뒤쪽(b)의 value를 앞으로(unshift) 보낸다.
       2. 남은 (a)의 value는 앞쪽에 먼저 보낸 (b)의 value뒤에(push) 보낸다.
     - (0)이 리턴된다면
       1. 파라미터(a, b)의 순서를 변경하지 않는다.
*/
