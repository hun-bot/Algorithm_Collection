function order(words){
  const regex=/[0-9]/g
  let orderMap=new Map()
  words.split(' ').forEach((i)=>{
    orderMap.set(i,...i.match(regex))
  })
  let res=[...orderMap]
  res=res.sort((a,b)=>a[1]-b[1]).map((i)=>i[0]).join(' ')
  return res
}
order("is2 Thi1s T4est 3a")