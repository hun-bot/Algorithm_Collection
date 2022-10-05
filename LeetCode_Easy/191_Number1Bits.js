var hammingWeight = function(n) {
  let bigN=n.toString(2)
  let count=0
  for(let i=0;i<bigN.length;i++){
      if(bigN[i]==1){
          count++
      }
  }
  return count
};  