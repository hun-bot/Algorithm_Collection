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
 var hasCycle = function(head) {
  let node=head
  if(!node) return false
  while(node){
      if(node.val==='Find') return true
      node.val='Find'
      node=node.next
  }
  return false
};