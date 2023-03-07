function firstNonRepeatingLetter(s) {
  if(s.length===1) return s
  if(!s) return ''
  let C=''
  let obj=new Map()
  for (let i of s) {
    if(i.match(/[A-Z]/g)) C=i.toLowerCase()
    if(obj.has(C)){
      // obj.set(i,(obj.get(i)||0)+1)
      obj.set(C,(obj.get(i)||0)+1)
    }
    obj.set(i,(obj.get(i)||0)+1)
  }
  for (let i = 0; i < obj.size; i++) {
    if([...obj.values()][i]===1){
      // console.log([...obj.keys()][i]);s
      return [...obj.keys()][i]
    }
  }
  return ''
}

// firstNonRepeatingLetter("moonmen")
firstNonRepeatingLetter("Gaag")
// firstNonRepeatingLetter("sTreSS")