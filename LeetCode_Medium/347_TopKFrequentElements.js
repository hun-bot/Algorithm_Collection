/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
  //reduce를 사용한 배열의 중복 값을 object로 나타내기
  const newObj=nums.reduce((ac, v) => {
      ac[v]=(ac[v]|| 0)+1; return ac
  }
  ,{})
  let ans=Object.keys(newObj).sort((a,b)=>newObj[b]-newObj[a]).slice(0,k)
  return ans
};