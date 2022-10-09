var firstUniqChar = function(s) {
  let find,reFind
  for(let i = 0; i < s.length; i++) {
    find=s.indexOf(s[i])
    reFind=s.lastIndexOf(s[i])
    if(find===reFind){
      return i
    }
  }
  return -1  
};
