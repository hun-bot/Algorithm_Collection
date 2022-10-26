var areAlmostEqual = function(s1, s2) {
  if(s1===s2) return true
  let temp=[]
  let temp2=[]
  for(let i=0;i<s1.length;i++){
      if(s1[i]!==s2[i]){
          temp.push(s1[i])
      }
  }
  for(let i=0;i<s2.length;i++){
      if(s2[i]!==s1[i]){
          temp2.push(s2[i])
      }
  }
  if(temp.length>2||temp2.length>2) return false
  return temp.join('')==temp2.reverse().join('')
};