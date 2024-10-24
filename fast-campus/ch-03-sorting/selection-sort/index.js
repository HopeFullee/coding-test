// 선택 정렬(Selection Sort)이란 가장 작은 것을 선택해서 앞으로 보내는 정렬 기법이다.
// 매 단계에서 가장 작은 것을 선택하는 데에 약 N번의 연상이 필요하다. (선형 탐색)
// 결과적으로 약 N개의 단계를 거친다는 점에서 최악의 경우 O(N^2)의 시간 복잡도를 가진다

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    // 스와프 (swap)
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
};
