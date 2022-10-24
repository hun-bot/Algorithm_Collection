var arraySign = function(nums) {
  let temp=1
  nums.forEach((e)=>{
      if(e<0){
          temp*=-1
      }
      else if(e>0){
          temp*=1
      }
      else{
          temp*=0
      }
  })
  return temp
};