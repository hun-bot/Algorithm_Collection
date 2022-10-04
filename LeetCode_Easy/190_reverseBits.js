var reverseBits = function(n) {
  // n은 32bit로 주어짐 -> 이걸 2진수로 변환
  let binaryN=n.toString(2)
  let ans=binaryN.padStart(32,'0').split('').reverse().join('')
  return parseInt(ans,2)
};

reverseBits(00000010100101000001111010011100)