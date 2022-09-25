/* Bad => O(n^2) */
var twoSum = function(nums, target) {
  let temp=[]
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if(nums[i]+nums[j]===target){
        temp.push(i)
        temp.push(j)
      }
    }
  }
  return temp
};

twoSum([2,7,11,15],9)

/* Better */

var twoSum=function(nums,target){
  let temp={}
  for (let i = 0; i < nums.length; i++) {
    if(temp[target-nums[i]]!=undefined){
      return [temp[target-nums[i]],i]
    }else{
      temp[nums[i]]=i
    }
  }
}