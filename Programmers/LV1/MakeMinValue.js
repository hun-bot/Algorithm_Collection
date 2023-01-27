function solution(A,B){
  let muti=0
  let len=A.length
  A.sort((a,b)=>a-b)
  B.sort((a,b)=>a-b)
  for (let i = 0; i < len; i++) {
    muti+=A.shift()*B.pop()
  }
  return muti
}