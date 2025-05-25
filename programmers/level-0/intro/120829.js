/*
  https://school.programmers.co.kr/learn/courses/30/lessons/120829
  코딩테스트 입문 - 각도기
*/

function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle > 90 && angle < 180) {
    return 3;
  } else {
    return 4;
  }
}
