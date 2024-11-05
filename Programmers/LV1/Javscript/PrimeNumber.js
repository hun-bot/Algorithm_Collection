// 소수 찾기 https://school.programmers.co.kr/learn/courses/30/lessons/12921
function solution(n) {
  let count=0
  const sqrt=parseInt(Math.sqrt(n))
  const arr=Array(n+1).fill(true).fill(false,0,2)
  for(let i=2;i<=sqrt;i++){
    if(arr[i]){
      for (let j = i*i; j <= n; j+=i) {
        console.log(j);
        arr[j]=false
      }
    }
  }

  for (let i = 2; i < arr.length; i++) {
    if(arr[i]) count++
  }
  return count
}

solution(100)