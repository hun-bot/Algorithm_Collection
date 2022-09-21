/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
  let arr=head
  let next=null
  while(arr!==null){
      let node=new ListNode()
      node.val=arr.val
      node.next=next
      next=node
      
      arr=arr.next
  }
  return next
};