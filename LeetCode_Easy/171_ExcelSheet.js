/**
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
  let temp=64
  let num=0
  let len=columnTitle.length
  for(let i=0;i<len;i++){
      num+=(columnTitle.charCodeAt(i)-temp)*Math.pow(26,len-i-1)
  }
  return num
};