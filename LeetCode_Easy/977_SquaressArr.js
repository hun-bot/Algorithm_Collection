/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
  let ans=[]
  nums.forEach((e)=>{
      ans.push(Math.abs(e))
  })
  return ans.map((e)=>e*e).sort((a,b)=>a-b)
};