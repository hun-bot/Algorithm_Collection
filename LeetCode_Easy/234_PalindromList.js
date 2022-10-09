/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
  if(!head) return false
  let nodeArr=[]
  let temp
  while(head){
      nodeArr.push(head.val)
      head=head.next
  }
  if(nodeArr.length===1) return true
  temp=[...nodeArr].reverse()
  let reversedArr=temp
  return (nodeArr.join('')===reversedArr.join(''))
};