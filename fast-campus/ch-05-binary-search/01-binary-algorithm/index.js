/* 
  - 이진 탐색은 정렬이 되어있다는 가정하에 사용 가능.
    정렬이 되어있는 배열을 반갈죽 하여 중앙 mid를 구하고
    mid의 원소값과 찾고자하는 원소의 value를 비교함.
      - 배열이 오름차순 기준 - mid의 좌측은 mid 보다 낮은 영역 / mid의 우측은 보다 높은 영역 
    
    찾고자하는 원소 값이 mid보다 크거나 작거나의 기준으로
    찾고자하는 원소 값이 있는 반띵 영역으로 이동하여 다시 반갈죽 반복.
      - 찾는 값이 없는 소외된 나머지 반절의 영역은 계산할 필요가 없음으로 시간 복잡도를 줄일수있음.
      - 찾는 값이 존재하는 반절의 영역은 새롭게 left(배열의 시작)와 right(배열의 끝)의 위치를 정한다.
          - 찾는 값이 우측배열에 있다면 left는 mid의 idx + 1 로 재정의한다.
          - 찾는 값이 좌측배열에 있다면 right는 mid의 idx - 1 로 재정의한다. 
        mid 중앙의 idx와 값을 구하여 찾는 원소의 위치 까지 반복. 

  - 이진 탐색의 시간 복잡도
      - 각 단계마다 탐색 번위를 2로 나누는 것으로 이해할 수 있다.
      - 이상적인 경우 매 단계마다 범위가 반으로 감소하므로, 로그(log) 복잡도를 가진다.

  - 이진 탐색 문제 유형의 대표적인 사례
      - 이진 탐색은 다음과 같은 사례에서 효과적으로 사용할 수 있다.
        1. 매우 넓은(억 단위 이상) 탐색 범위에서 최적의 해를 찾아야 하는 경우
        2. 데이터를 정렬한 뒤에 다수의 쿼리(query)를 날려야 하는 경우
*/

// 이진 탐색 소스 코드 예시 (재귀 함수)

const binarySearch = (arr, target, start, end) => {
  if (start > end) return -1;
  const mid = parseInt((start + end) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 3;

const result = binarySearch(arr, target, 0, arr.length - 1);

if (result === -1) console.log("찾는 원소가 존재하지 않음");
else console.log(result + 1, "번째 원소입니다.");

// 이진 탐색 소스 코드 예시 (반복문)

const binarySearch2 = (arr, target, start, end) => {
  while (start <= end) {
    const mid = parseInt((start + end) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return -1;
};
