/*
  https://leetcode.com/problems/add-two-numbers/description/
  2. Add Two Numbers

  링크드 리스트와 같은 노드의 지식을 요구하는 문제여서 많이 어려웠다..
  풀이 출처: https://www.youtube.com/watch?v=NHgyOaW1zuo

  위 강의 영상으로 풀이 해답을 공부할 수 있었지만, 'Node'의 개념을
  완벽히 이해 하지 못해서 학습에 큰 영양가는 없는거같다...

  TODO - 'Node' 자체를 학습하여 개념을 익히자.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let result = new ListNode(-1);
  let dummy = result;

  while (l1 || l2 || carry) {
    const l1Val = l1 ? l1.val : 0;
    const l2Val = l2 ? l2.val : 0;

    const nextDigit = (l1Val + l2Val + carry) % 10;
    result.next = new ListNode(nextDigit);
    result = result.next;

    carry = Math.floor((l1Val + l2Val + carry) / 10);

    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }

  return dummy.next;
};
