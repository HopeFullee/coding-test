/*
  https://school.programmers.co.kr/learn/courses/30/lessons/181885
  코딩 기초 트레이닝 - 할 일 목록
*/

function solution(todo_list, finished) {
  return todo_list.filter((_, idx) => !finished[idx]);
}

const todo_list = ["problemsolving", "practiceguitar", "swim", "studygraph"];
const finished = [true, false, true, false];

console.log(solution(todo_list, finished));
