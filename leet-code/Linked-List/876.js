/*
  https://leetcode.com/problems/middle-of-the-linked-list/
  876. Middle of the Linked List
*/

// Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let middle = head;
  let end = head;

  while (end !== null && end.next !== null) {
    middle = middle.next;
    end = end.next.next;
  }

  return middle;
};

const node1 = { data: 1, next: null };
const node2 = { data: 2, next: null };
const node3 = { data: 3, next: null };
const node4 = { data: 4, next: null };
const node5 = { data: 5, next: null };
const node6 = { data: 6, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

console.log(middleNode(node1));
