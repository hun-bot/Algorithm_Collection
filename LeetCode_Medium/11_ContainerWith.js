/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let left=0
  let right=height.length-1
  let max=0
  while(left<right){
      let leftVal=height[left]
      let rightVal=height[right]
      let min=Math.min(leftVal,rightVal)
      let x_axis_len=right-left
      max=Math.max(max,min*x_axis_len)
      if(leftVal>rightVal) right--
      else left++
  }
  return max
};