#  www.acmicpc.net/problem/1010
#  수 정렬하기 3 - 수의 범위가 작다면 카운팅 정렬을 사용하여 더욱 빠르게 정렬할 수 있습니다.

# 자바스크립트 제출 불가 문제여서 불가피 하게 파이썬으로 풀어봤다.
# 코테 1황 파이썬이라지만 역시 익숙한 js가 최고다 ㅠㅠ

import sys

def input():
  return sys.stdin.readline()

n = int(input())

count = [0] * 10001

for _ in range(n):
  count[int(input())] += 1

for i in range(1, 10001):
  if count[i] != 0:
    for _ in range(count[i]):
      print(i)


