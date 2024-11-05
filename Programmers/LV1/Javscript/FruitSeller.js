function solution(k, m, score) {
  score.sort((a,b)=>b-a)
  let res=0
  for (let i = m-1; i < score.length; i+=m) {
    res+=(score[i]*m)
  }
  return res
}

solution(3,4,[1, 2, 3, 1, 2, 3, 1])
solution(4,3,[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2])