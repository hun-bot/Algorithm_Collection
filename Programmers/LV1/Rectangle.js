function solution(sizes) {
  sizes=sizes.map((e)=>e.sort((a,b)=>a-b))
  let max=[]
  let min=[]
  sizes.forEach((i)=>{
    max.push(i[0])
    min.push(i[1])
  })
  max.sort((a,b)=>a-b)
  min.sort((a,b)=>a-b)
  const res=max[max.length-1]*min[min.length-1]
  return res
}

// solution([[60, 50], [30, 70], [60, 30], [80, 40]])
solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])