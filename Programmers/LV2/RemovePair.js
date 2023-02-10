function solution(s){
  if(s.length%2!==0) return 0
  let temp=[]
  for(let i=0; i<s.length; i++){
    if(temp[temp.length-1]!==s[i]) temp.push(s[i])
    else temp.pop()
  }
  return (temp.length > 0)? 0 : 1
}

solution("baabaa")