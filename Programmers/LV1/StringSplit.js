/* 문자열 나누기 https://school.programmers.co.kr/learn/courses/30/lessons/140108 */

function solution(s) {
  let x;
  let xCount=0
  let notXcount=0
  let count = 0;
  for (const i of s) {
    if(!x) x=i
    if(x===i) xCount++;
    else notXcount++;
    if(xCount===notXcount){
      count++
      xCount=0
      notXcount=0
      x=""
    }
  }
  if(x) count++
  return x
}
