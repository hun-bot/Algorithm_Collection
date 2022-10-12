/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
   if(!nums) return []
   if(nums.length===1) return [nums]
   let ans=[]
  
  function recursive(temp,nums){
      if(nums.length===0){
          ans.push(temp)
          return
      }
      for(let i=0;i<nums.length;i++){
          let restVal=nums.slice(0) //배열 복사
          restVal.splice(i,1) // i(인덱스)에서 1개만 뺸다
          recursive(temp.concat(nums[i]),restVal)
          // concat을 통해 temp에 nums[i]를 합치고, 위에서 splice를 빼둔 값을 재귀
      }
  }
  recursive([],nums)
  return ans
};
