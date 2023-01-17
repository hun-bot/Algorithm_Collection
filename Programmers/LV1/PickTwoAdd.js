function solution(numbers) {
  let res=[]
  const helper=(first,second)=>{
    let hap=first+second
    !res.includes(hap) && res.push(hap)
  }
  for (let i = 0; i < numbers.length-1; i++) {
    for (let j = i+1; j < numbers.length; j++) {
      helper(numbers[i],numbers[j])
    }
  }
  return res.sort()
}

solution([2,1,3,4,1])