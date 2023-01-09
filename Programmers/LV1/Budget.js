// 예산 https://school.programmers.co.kr/learn/courses/30/lessons/12982
function solution(d, budget) {
  let fit=d.reduce((pre,cur)=>pre+cur)
  d=d.sort((a,b)=>a-b)
  let total=0
  if(fit===budget) return d.length
  d.forEach(element => {
    if(element<=budget){
      total++
      budget-=element
    }
  });
  return total
}

solution([1,2,3,4,5],9)
solution([2,2,3,3],10)