/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Solution 1: Iterative O(n) 迭代
var mergeTwoLists = function (list1, list2) {
  let result = new ListNode(0);
  let c = result;

  while (list1 != null && list2 != null) {
    if (list1.val > list2.val) {
      c.next = list2;
      list2 = list2.next;
    } else {
      c.next = list1;
      list1 = list1.next;
    }
    c = c.next;
  }

  if (list1) c.next = list1;
  if (list2) c.next = list2;

  return result.next;
};
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
