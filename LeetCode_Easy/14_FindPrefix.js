var longestCommonPrefix = function(strs) {
  let pre=''
  strs.sort()
  for (let i = 0; i < strs[0].length; i++) {
    if(strs[0][i]===strs[strs.length-1][i]){
      pre=strs[0].substring(0,i+1)
    }
    else{
        break;
    }
  }
  return pre
};
