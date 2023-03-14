// GCD (Greatest common divisor)
const gcd=(a,b)=>{
  if(b===0) return a
  return gcd(b,a%b)
}
function solution(arr) {
  return arr.reduce((pre,cur)=>(pre*cur)/gcd(pre,cur)) 
}

solution([2,6,8,14])