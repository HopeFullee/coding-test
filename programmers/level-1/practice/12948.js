/*
  https://school.programmers.co.kr/learn/courses/30/lessons/12948
  연습문제 - 핸드폰 번호 가리기
*/

function solution(phone_number) {
  const fourDigits = phone_number.slice(-4);
  return "*".repeat(phone_number.length - 4) + fourDigits;
}

const phone_number = "01033334444";

console.log(solution(phone_number));

/*
  [모법 답안]
  본인도 처음엔 regex로 풀어보려 했지만... 
  정규식은 정말 어렵다..

  고수님의 정규식 규칙을 긴빠이 해온 코드는 아래와 같다.

  [성능 비교]
  https://jsbench.me/ 결과
  의외로 본인이 작성한 코드가 약 10% 빠르게 나왔다.
  하지만 간결한 정규식 방법이 실무에선 더 적합해 보일듯 하다.

  나중에라도 정규식 공부를 좀 하자..
*/

function solution2(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

console.log(solution2(phone_number));
