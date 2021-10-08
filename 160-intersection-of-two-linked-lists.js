// 160. Intersection of Two Linked Lists

/** 
 * Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. 
 * If the two linked lists have no intersection at all, return null.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

var getIntersectionNode = function(headA, headB) {
  const map = new Map();
  while( headA || headB ){
    if( map.has(headA) ) {
      return headA;
    } else {
      map.set(headA, 1);
      headA = headA.next;
    }
    if( map.has(headB) ) {
      return headB;
    } else {
      map.set(headB, 1);
      headB = headB.next;
    }
  }
  return null;
};