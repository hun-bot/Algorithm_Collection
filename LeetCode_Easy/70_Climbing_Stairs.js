/* 규칙(트리 구조로 그리게 되면 피보나치 수열이라는 것을 알 수있다)
재귀로 풀게되면 시간 초과
return (n<=1)? 1: climbStairs(n-1)+climbStairs(n-2) X
N=(N-1)+(N-2)
1 - 1 / 2- 2 / 3 - 3 / 4 - 5 / 6- 8
    1     -> 1        1 / 1 / 1+1 / 2+1 / 1+ 3 +1 / 3 + 4 +1 / 1 + 5 + 6 + 1 ...
   1 1    -> 1
  1 2 1   -> 2
 1 3 3 1  -> 3
1 4 6 4 1 -> 5 ..
*/

var climbStairs = function(n) {
  if (n<3) return n
  let one=1
  let two=2
  for (let i = 3; i <= n; i++) {
    let hap=two+one
    one=two
    two=hap
  }
  return two
};

climbStairs(7)