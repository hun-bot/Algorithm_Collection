function solution(n) {
  let original=n.toString(2).split(1).length
  while(true){
    n++
    let next=n.toString(2).split(1).length
    if(next===original) return n
  }
}

solution(78)