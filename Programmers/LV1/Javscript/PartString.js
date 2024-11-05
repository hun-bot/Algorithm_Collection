/* 크기가 작은 부분문자열 https://school.programmers.co.kr/learn/courses/30/lessons/147355 */
function solution(t, p) {
  let pLen=p.length;
  let tLen=t.length;
  let sliceStr=t
  let res=[]
  for(let i=0; i < tLen-pLen+1; i++) {
    res.push(sliceStr.substring(i,pLen+i))
  }
  res=res.filter((i)=>(Number(i)<=Number(p)))
  return res.length
}


solution("3141592","271")