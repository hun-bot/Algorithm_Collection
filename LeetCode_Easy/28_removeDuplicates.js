/*
[1,1,2] -> k=2 [1,2,???] 중복이 제거중 마지막으로 중복이 제거된 값은 k, 이 값이 나오면 뒤에 배열은 상관없다
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k
*/
var removeDuplicates = function(nums) {
  let j=0
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[j],nums[i]);
    if(nums[j]!==nums[i]){
      j++
      nums[j]=nums[i]
    }
  }
  return j+1
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])