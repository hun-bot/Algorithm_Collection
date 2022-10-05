var isHappy = function(n) {
  let nPow=n.toString().split('').reduce((cur,acc)=>cur+acc**2,0)
  if(nPow===1 || nPow===7) return true
  if(nPow<10) return false
  
  return isHappy(nPow)
};

