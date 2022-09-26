
var plusOne = function(digits) {
  let big=BigInt(digits.join(''))
  big++
  return big.toString().split('')
};
plusOne([9])