// 없는 숫자 더하기 https://school.programmers.co.kr/learn/courses/30/lessons/86051?language=javascript

function solution(numbers) {
  const num=[0,1,2,3,4,5,6,7,8,9]
  let none=[]
  numbers=numbers.sort()
  num.filter((i)=>{
    if(!(numbers.includes(i))) none.push(i)
  })
  return none.reduce((i,j)=>i+j)
}

solution([1,2,3,4,6,7,8,0])