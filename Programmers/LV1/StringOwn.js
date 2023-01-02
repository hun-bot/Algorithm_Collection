// 문자열 내 마음대로 정렬하기 https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  strings.sort()
  strings.sort((a,b)=>{
    if(a[n]===b[n]){
      return 0
    }
    else if(a[n]<b[n]){
      return -1
    }
    else if(a[n]>b[n]){
      return 1
    }
  })
  console.log(strings);
  return strings
}
solution(["sun", "bed", "car"],1)
solution(["abce", "abcd", "cdx"],2)