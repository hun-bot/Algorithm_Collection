var singleNumber = function(nums) {
  if(nums.length===1) return nums.pop()
  let single=findSingle(nums)
  for (const key in single) {
    if(single[key]===1){
      return key
    }
  }
};

function findSingle(arr){
  return arr.reduce((pv, cv)=>{
    pv[cv] = (pv[cv] || 0) + 1;
    return pv;
}, {});
}
