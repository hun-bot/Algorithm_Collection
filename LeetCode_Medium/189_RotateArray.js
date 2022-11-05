/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  if(nums.length>k){
      nums.unshift(...nums.splice(-k))
  }
  else{
      for(let i=0;i<k;i++){
      let last=nums.pop()
      nums.unshift(last)
  }
  }
  
  return nums
};