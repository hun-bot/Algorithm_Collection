function solution(food) {
  let water=food.shift()
  food=food.map((i)=>i%2!==0 ? i-=1:i)
  let pattern=''
  for (let i = 0; i < food.length; i++) { 
    pattern+=(String(i+1).repeat(food[i]/2));
  }
  let reversePattern=pattern.split('').reverse().join('')
  let res=pattern+reversePattern
  res=res.slice(0,res.length/2)+'0'+res.slice(res.length/2,res.length)
  return res
}

solution([1, 3, 4, 6])