function solution(s) {
  const max=Math.max(...s.split(' '))
  const min=Math.min(...s.split(' ')) 
  const res=min.toString()+" "+max.toString()
  return res
}

solution("1 2 3 4")