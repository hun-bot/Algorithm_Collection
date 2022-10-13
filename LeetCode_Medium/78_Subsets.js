/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let temp=[[]]
  for(let i=0;i<nums.length;i++){
    // 제일 처음 temp.length는 1
      let arrLen=temp.length
      console.log(arrLen)
      for(let j=0;j<arrLen;j++){
        // 1) temp[j] => j=0일때 temp[j]=[] 빈배열임 그래서  ...(spread)를 시키면 공백
        // ... 연산자의 성질중 배열 병합
        // [...temp[j],nums[i]] => j=0, i=0 => [공백,1] => [1]
        // 2) i=1, j=0 => temp[0] ,nums[1] => [], nums[1]=> 2 => [2]
        // i=1,j=1 => temp[1],nums[] => ...[1],2 => [1,2]
          temp.push([...temp[j],nums[i]])
      }
  }
  return temp
};

subsets([1,2,3])