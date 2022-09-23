/*
Given an integer n, return the decimal value of the binary string formed by concatenating the binary representations of 1 to n in order, modulo 109 + 7.
modulo인 10^9+7로 나눠주는 이유는 수의 표현이 제한적이기 때문에
답을 도출해낼 수 있는지 알고싶기에 모듈러 연산을 사용한다

ex) 3 -> 27
1 -> 1
2 -> 10
3 -> 11 => 11011를 10진수로 바꾸면 27

10보다 커지면 e단위가 나오기에 modulo로 나눠줘서 답을 도출
 */
var concatenatedBinary = function(n) {
  let modulo=1e9+7
  let num=0
  for (let i = 0; i <=n; i++) {
    num*=(2**i.toString(2).length)
    num+=i
    num%=modulo
    console.log(num);
  }
  return num
};

concatenatedBinary(5)