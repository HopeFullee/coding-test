// JS는 기본적으로 우선순위 큐('priority queue')를 라이브러리로 제공하지 않는다.

// https://github.com/ndb796/priorityqueuejs
// index.js 소스 코드를 가져온 뒤에 다음과 같이 사용할 수 있다.

import PriorityQueue from "./priority-queue";

// 최대힙 (Max Heap)
let pq = new PriorityQueue((a, b) => {
  return a.cash - b.cash;
});

pq.enq({ cash: 250, name: "Doohyun Kim" });
pq.enq({ cash: 300, name: "Gildong Hong" });
pq.enq({ cash: 150, name: "Minchul Han" });

console.log(pq.size()); // 3
console.log(pq.deq()); // {cash: 300, name: 'Gildong Hong'}
console.log(pq.peek()); //{cash: 250, name: 'Doohyun Kim'}
console.log(pq.size()); // 2
