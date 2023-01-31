function solution(s) {
  let zero=0
  let count=0
  while(true){
    count++
    zero+=s.split('').filter((i)=>i==='0').length
    s=s.split('').filter((i)=>i!=='0').length.toString(2)
    if(s==='1') break
  }
  return [count,zero]
}

solution("110010101001")
solution("01110")