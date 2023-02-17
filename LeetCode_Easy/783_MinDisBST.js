/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
  let arr=[]
  const dfs=(node,temp)=>{
      if(node.left){
          dfs(node.left,temp)
      }
      temp.push(node.val)
      if(node.right){
          dfs(node.right,temp)
      }
      return temp
  }
  dfs(root,arr)
  let min=99999999999
  for(let i=0;i<arr.length-1;i++){
      min=Math.min(min,arr[i+1]-arr[i])
  }
  return min
};