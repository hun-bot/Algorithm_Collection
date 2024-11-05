/* 콜라 문제 https://school.programmers.co.kr/learn/courses/30/lessons/132267 */
function solution(a, b, n) {
  let res=0
  while(n>=a){
    res+=Math.floor(n/a)*b
    n=Math.floor(n/a)*b+(n%a)
  }
  return res
}




solution(3,1,20)