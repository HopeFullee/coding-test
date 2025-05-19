/*
  https://school.programmers.co.kr/learn/courses/30/lessons/176963
  연습문제 - 추억 점수
*/

function solution(name, yearning, photo) {
  const hash = new Map();

  for (let i = 0; i < name.length; i++) {
    hash.set(name[i], yearning[i]);
  }

  return photo.map((arr) => {
    let sum = 0;

    for (const el of arr) {
      if (hash.has(el)) sum += hash.get(el);
    }

    return sum;
  });
}

const name = ["may", "kein", "kain", "radi"];
const yearning = [5, 10, 1, 3];
const photo = [
  ["may", "kein", "kain", "radi"],
  ["may", "kein", "brin", "deny"],
  ["kon", "kain", "may", "coni"],
];

console.log(solution(name, yearning, photo));

/* 
  [모법 답안]
  name, yearning 두개의 배열은 동일한 index 위치의 값을 바라본다.
  이런 점을 고려한다면, photo를 순회하며 나온 string을 name 배열에 indexOf로 
  yearning의 동일한 index 위치 까지 알아낼 수 있다.
*/

function solution2(name, yearning, photo) {
  return photo.map((arr) =>
    arr.reduce((acc, str) => (acc += yearning[name.indexOf(str)] ?? 0), 0)
  );
}

console.log(solution2(name, yearning, photo));
