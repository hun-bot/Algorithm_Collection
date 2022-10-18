/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
  let t=s.trim()
  let temp=t.split(' ').slice(-1)
  return temp.toString().length
};