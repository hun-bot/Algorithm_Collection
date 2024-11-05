// 소수 만들기 https://school.programmers.co.kr/learn/courses/30/lessons/12977
function solution(nums) {
  let total=0
  for (let i = 0; i < nums.length-2; i++) {
    for (let j = i+1; j < nums.length-1; j++) {
      for (let k = j+1; k < nums.length; k++) {
        isPrime(nums[i]+nums[j]+nums[k]) && total++
      }
    }
  }
  return total
} 
const isPrime=(hap)=>{
  for (let i = 2; i <= parseInt(Math.sqrt(hap)); i++) {
    if(hap%i===0) return false
  }
  return true
}

solution([1,2,7,6,4])