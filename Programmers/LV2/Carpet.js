function solution(brown, yellow) {
  let total=brown+yellow
  for (let i = 3; i < brown; i++) {
    let w=Math.floor(total/i)
    if((w-2)*(i-2)===yellow) return [w,i]
  }
}
solution(10,2)