function arrayDiff(a, b) {
  b.forEach((i)=>{
    if(a.includes(i)){
      a=a.filter((j)=>j!==i)
    }
  })
  return a
}

arrayDiff([1,2],[2])