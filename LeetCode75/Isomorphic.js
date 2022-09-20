/* 
724. Find Pivot Index

https://leetcode.com/problems/find-pivot-index/

Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

왼쪽 합과 오른쪽의 합이 같은 피벗 인덱스를 반환해줘라

*/
var pivotIndex = function(nums) {
  let total=nums.reduce((pre,cur)=>pre+cur)
  let leftSum=0
  for (let i = 0; i < nums.length; i++) {
    let rightSum=total-nums[i]-leftSum
    if(rightSum===leftSum) return i
    leftSum+=nums[i]
  }
  return -1
}