function solution(s){
  if(s[0]===')') return false
  let check=0
  for (const i of s) {
    if(i==='(') check++
    else{
      check--
      if(check<0) return false
    }
  }
  return check===0
}
