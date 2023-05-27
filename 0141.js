/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let visited = [];
  while (head) {
    if (visited.includes(head)) return true;
    visited.push(head);
    head = head.next;
  }
  return false;
};

// space: O(n)
