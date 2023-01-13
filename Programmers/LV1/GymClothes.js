function solution(n, lost, reserve) {
  let checkLost=lost.filter(i=>!reserve.includes(i)).sort()
  let checkReserve=reserve.filter(i=>!lost.includes(i)).sort()
  checkLost=checkLost.filter(i=>{
    let temp=checkReserve.find(j=>Math.abs(i-j)<=1)
    if(!temp) return true
    checkReserve=checkReserve.filter(k=>k!==temp)
  })
  console.log(checkLost,checkReserve,n-checkLost.length);
  return n-checkLost.length
}

// solution(5,[2, 4],[1, 3, 5])
solution(7,[2,3,4],[1,2,3,6])