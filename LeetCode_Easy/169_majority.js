/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  let temp={}
  nums.forEach(e=>{
      temp[e]=(temp[e]||0)+1
  })
  let idx=0
  let max=0
  for(const i in temp){
      console.log(i,temp[i])
      if(temp[i]>max){
          max=temp[i]
          idx=i
      }
  }
  return idx
};