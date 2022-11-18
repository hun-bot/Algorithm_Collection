/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
  if(n<1) return false
  if(n<=5) return true
  const limit=[2,3,5]
  for(const num of limit){
      if(n%num===0){
          return isUgly(n/num)
      }
  }
  return false
};