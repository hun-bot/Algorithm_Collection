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
  let newHead=new Set()
  while(headA){
      newHead.add(headA)
      headA=headA.next
  }
  /*
  Note that the intersected node's value is not 1 because the nodes with value 1 in A and B (2nd node in A and 3rd node   
  in B) are different node references. In other words, they point to two different locations in memory
  [1,8,4,5] => 1 has different memory so if(newHead.has(headB))=> false
  */
  //Set(5) { [4,1,8,4,5], [1,8,4,5], [8,4,5], [4,5], [5] }
  while(headB){
      if(newHead.has(headB)){
          return headB
      }
      headB=headB.next
  }
  return null
};