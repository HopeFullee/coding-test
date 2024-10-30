// javascirpt prototype sort 라이브러리 사용 예시

// 정수(Number)에 대한 정렬 예시
const numArr = [1, 8, 5, 9, 21, 3, 7, 2, 15];

// ex) 오름차 예시 / 내림차 경우 아래 (a)와 (b)의 계산 <=> 위치 변경
const NumCompare = (a, b) => {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
};

numArr.sort(NumCompare);

// 축약 버전 오름차 / 내림차 경우 b - a
numArr.sort((a, b) => {
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

/**************************************************************************************************/

// 문자열(String)에 대한 정렬 예시
const strArr = ["pineapple", "banana", "durian", "apple", "carrot"];

// 문자열 오름차순 정렬 예시
// 별도로 비교 함수(compare function)을 사용하지 않으면, 유니코드 순으로 정렬된다.
strArr.sort();

// 실행 결과 ['apple', 'banana', 'carrot', 'durian', 'pineapple'] (오름차)
console.log(strArr);

// 문자열 내림차순 정렬 예시
const strCompare = (a, b) => {
  if (b < a) return -1;
  else if (b > a) return 1;
  else return 0;
};

// 문자열(String)에 대한 정렬 예시 (대소문자 구분X)
const capitalMixStrArr = ["pineapple", "Banana", "durian", "Apple", "carrot"];

// 문자열 오름차순 정렬 예시 (대소문자 구분X) / 내림차는 caseA 와 caseB의 계산 <=> 위치 변경 (대소문자 구분 X)
const capitalMixStrCompare = (a, b) => {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();

  if (upperCaseA < upperCaseB) return -1;
  else if (upperCaseA > upperCaseB) return 1;
  else return 0;
};

capitalMixStrArr.sort(capitalMixStrCompare);

// 실행 결과 ['Apple', 'Banana', 'carrot', 'durian', 'pineapple'] (대소문자 구분X)
console.log(capitalMixStrArr);

/**************************************************************************************************/

// 객체(object)에 대한 정렬 예시
const objArr = [
  { name: "홍길동", score: 90 },
  { name: "김철수", score: 85 },
  { name: "박영희", score: 97 },
];

// 객체 오름차순 정렬 예시 / 내림차 경우 b - a
const objCompare = (a, b) => {
  return a.score - b.score;
};
