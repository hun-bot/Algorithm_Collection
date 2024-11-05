function solution(N, stages) {
  stages.sort()
  let res=[]
  for (let i = 1; i <= N; i++) {
    const final=stages.filter((e)=>e>=i).length
    const current=stages.filter((e)=>e===i).length
    res.push([i,current/final])
  }
  res.sort((a,b)=>b[1]-a[1])
  return res.map((i)=>i[0])
}

solution(5,[2, 1, 2, 6, 2, 4, 3, 3])
// solution(4,[4,4,4,4,4])