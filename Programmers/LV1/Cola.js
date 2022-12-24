/* 콜라 문제 https://school.programmers.co.kr/learn/courses/30/lessons/132267 */
function solution(a, b, n) {
  let cola=[]
  let remainCola=[]
  while(n>=a){
    cola.push(Math.floor(n/a)*b)
    if(!(n%a<1)) remainCola.push(n%a)
    n=n/a
    console.log(cola,remainCola);
  }
  let res=cola.reduce((i,j)=>i+j)
  let remain=remainCola.reduce((i,j)=>i+j)
  let lastCola=cola.at(-1)+remain
  if(lastCola>a) Math.floor(lastCola/a)
  console.log(res);
  return res
}




solution(3,1,20)