/* 폰켓몬 https://school.programmers.co.kr/learn/courses/30/lessons/1845 */

function solution(nums) {
  let set=new Set(nums)
  let half=nums.length/2
  return set.size > half ? half :set.size  
}

solution([3,1,2,3])