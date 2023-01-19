function solution(sizes) {
  let w=0
  let h=0
  sizes.forEach((s)=>{
    let [min,max]=s.sort((a,b)=>a-b)
    if(max>w) w=max
    if(min>h) h=min
  })
  return w*h
}

solution([[60, 50], [30, 70], [60, 30], [80, 40]])
// solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]])