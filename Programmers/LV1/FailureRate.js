function solution(N, stages) {
  stages.sort()
  let count={}
  stages.forEach((i)=>{
    count[i]=(count[i]||0)+1
  })
  let total=stages.length
  let percent=[]
  for (const i in count) {
    let calculate=count[i]/total
    percent.push({i,calculate})
    total-=count[i]
  }
  percent.sort((a,b)=>{
    if(a.calculate===b.calculate){
      return a.i-b.i
    }
    return b.calculate-a.calculate
  })
  console.log(percent);
}

solution(5,[2, 1, 2, 6, 2, 4, 3, 3])