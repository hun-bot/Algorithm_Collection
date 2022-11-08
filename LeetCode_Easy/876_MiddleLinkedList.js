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
 var middleNode = function(head) {
  let len=size(head)
  let middle=Math.floor(len/2)
  return findNode(head,middle)
};
  const findNode=(head,middle)=>{
      for(let i=0;i<middle;i++){
          head=head.next
      }
      return head
  }
  const size=(head)=>{
      let count=0
      while(head){
          count++
          head=head.next
      }
      return count
  }