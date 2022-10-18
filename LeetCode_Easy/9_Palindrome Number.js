/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  let n=x.toString().split('')
  let rever=n.slice(0)
  console.log(n,rever.reverse())
  if(n.join('')===rever.join('')) return true
  else return false
};