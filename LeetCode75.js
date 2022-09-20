//HomePage:  https://leetcode.com/study-plan/leetcode-75/?progress=xo2xk0fs
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
/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

Isomorphic = 동형
예시들을 보면 egg => 122 add => 122 | e=>a , g=>d 동형
foo => 122 bar => 123 | f=>b o=>a o=>r 비동형
paper => 12134 title => 12134 | p=>t a=>i er=>le 동형
*/
var isIsomorphic = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    if(s.indexOf(s[i])!==t.indexOf(t[i])){
      return false
    }
  }  
    return true
}
/* 3   */
