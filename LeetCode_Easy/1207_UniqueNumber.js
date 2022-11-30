var uniqueOccurrences = function(arr) {
  let ans={}
  let count=0
  arr.forEach((i)=>{
      ans[i]=(ans[i]||0)+1
  })
  let changeArr=Object.values(ans)
  let newSet=new Set(changeArr)
  if(changeArr.length===newSet.size) return true
  return false
};