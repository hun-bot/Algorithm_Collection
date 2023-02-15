/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
  let conNum=num.join('')
  let arr=BigInt(conNum)+BigInt(k)
  return arr.toString().split('')
};

addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3],516)