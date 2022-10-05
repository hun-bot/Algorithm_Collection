var containsDuplicate = function(nums) {
  let numSet=new Set(nums)
  if(numSet.size===nums.length){
      return false
  } 
  return true
};