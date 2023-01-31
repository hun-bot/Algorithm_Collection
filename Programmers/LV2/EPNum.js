function solution(n) {
  let count=1
  const helper=(num,sum)=>{
    if(sum===n) count++
    else if(sum>n) return 0
    return helper(num+1,sum+num)
  }
  for (let i = 1; i <= n/2+1; i++) {
    helper(i,0)
  }
  return count
}

solution(15)