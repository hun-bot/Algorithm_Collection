function solution(X, Y) {
  let obj={}
  let res=[]
  for (const i of X) {
    obj[i]=(obj[i]||0)+1
  }
  for (const j of Y) {
    if(obj[j]){
      res.push(j)
      obj[j]--
    }
  }
  res.sort((a,b)=>b-a)
  if(!res.length) return "-1"
  if(res[0]==="0") return "0"
  return res.join("")
}

solution("12321","42531")