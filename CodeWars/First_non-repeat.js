function firstNonRepeatingLetter(s) {
  if(s.length===1 || !s) return s
  let obj={}
  for (const i of s) {
    obj[i]=(obj[i]||0)+1
  }
  console.log(obj);
  for (let i = 0; i < s.length; i++) {
    if(obj[s[i]]===1){
      console.log(s[i]);
    }
  }
}

firstNonRepeatingLetter("moonmen")
firstNonRepeatingLetter("stress")
firstNonRepeatingLetter("sTreSS")