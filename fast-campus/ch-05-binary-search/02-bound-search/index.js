/*
  - 정렬된 배열에서 특정 원소의 개수 구하기
      - 코딩 테스트에서는 정렬된 배열에서 값이 특정 범위에 해당하는 원소의 개수를
        계산하는 것을 요구하는 경우가 종종 있다.
      - 이러한 문제를 해결하기 위해 lowerBound() 함수와 upperBound() 함수를 사용할 수 있다.
          - lowerBound(arr, x): arr에 x(value)를 찾아 가장 왼쪽 인덱스를 반환
          - upperBound(arr, x): arr에 x(value)를 찾아 가장 오른쪽 인덱스 + 1 을 반환

      - lowerBound 와 upperBound를 활용하여 정렬된 배열에서 특정 범위에 속하는 원소의 개수를 구할수있음.
          - 예시) 
            [1, 2, 2, 3, 4, 4, 5] 배열에서 
            lowerBound(2): '2'의 값이 있는 가장 왼쪽(하한선)의 index 반환 = return 1
            upperBound(4): '4'의 값이 있는 가장 오른쪽(상한선)의 index + 1 반환 = return 6

            upperBound.res(6) - lowerBound.res(1) = 5
            lowerBound(2) 부터 upperBound(4) 까지 사이에있는 [2, 2, 3, 4, 4] 5개의 원소 개수를 반환
            
      - countByRange() 함수로 lowerBound 와 upperBound 함수 사용
*/

// lowerBound 하한선의 소스 코드
const lowerBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
};

// upperBound 상한선의 소스 코드
const upperBound = (arr, target, start, end) => {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
};

const countByRange = (arr, leftValue, rightValue) => {
  // 유의: lowerBound와 upperBound는 end 변수의 값을 배열의 길이로 설정
  const leftIndex = lowerBound(arr, leftValue, 0, arr.length);
  const rightIndex = upperBound(arr, rightValue, 0, arr.length);
  return rightIndex - leftIndex;
};
