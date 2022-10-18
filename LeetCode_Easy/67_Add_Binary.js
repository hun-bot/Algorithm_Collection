var addBinary = function(a, b) {
  return (BigInt('0b'+a)+BigInt('0b'+b)).toString(2)
};

// 그냥 구현하는 방법도 있지만 이렇게 BigInt로 간단하게 푸는 방법도 있다 '0b' -> 이진수 

