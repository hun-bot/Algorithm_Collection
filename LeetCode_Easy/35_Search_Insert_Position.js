var searchInsert = function(nums, target) {
  let idx=nums.indexOf(target)
  let count=0
  if(idx>0){
    return idx
  }
  else{
    nums.forEach(e => {
      if(target>e){
        count++
      }
    });
  }
  return count
};

searchInsert([1,3,5,6],7)