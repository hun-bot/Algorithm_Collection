/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
 var inorderTraversal = function(root) {
  if(root===null) return [];
  let data=[]
  helper(root)
  function helper(node){
    if(node.left) helper(node.left) 
    data.push(node.val)
    if(node.right) helper(node.right)
  }
  return data
};