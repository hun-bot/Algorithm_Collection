var intersect = function(nums1, nums2) {
  let low,up
  if(nums1.length>nums2.length){
      low=nums1
      up=nums2
  }
  else{
      low=nums2
      up=nums1
  }
  let res=[]

  for(let i=0;i<up.length;i++){
      if(low.includes(up[i])){
          res.push(up[i])
          console.log(low.indexOf(up[i]))
          low[low.indexOf(up[i])]=null
      }
  }
  return res
};