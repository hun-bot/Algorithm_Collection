/* 가장 가까운 같은 글자 https://school.programmers.co.kr/learn/courses/30/lessons/142086?language=javascript */

function solution(s) {
  let overlap=[]
  let res=[]
  for (const i in s) {
    if(!overlap.includes(s[i])){
      overlap.push(s[i])
      res.push(-1)
    }
    else{
      res.push(overlap.length-overlap.lastIndexOf(s[i]))
      overlap.push(s[i])
    }
  }
  return res
}


solution("banana")
solution("foobar")