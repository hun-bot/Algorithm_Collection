function solution(people, limit) {
  people.sort((a,b)=>a-b)
  let boat=0
  let right=people.length-1
  let left=0
  while(left<right){
    let sum=people[left]+people[right]
    if(sum>limit){
      right--
    }
    else{
      left++
      right--
    }
    boat++
  }
  left===right ? boat++ : ''
  return boat
}

solution([70, 50, 80, 50],100)
solution([70, 80, 50],100)