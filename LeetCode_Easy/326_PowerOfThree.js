var isPowerOfThree = function(n) {
  if(n<1) return false
  if(n===1) return true

  for(let i=1;i<20;i++){
      if(3**i===n){
          return true
      }
  }
  return false
};

/*
-2^31 <= n <= 2^31 - 1

2^31 => 2147483648 
3^19 => 1162261467
3^20 => 3486784401

https://stackoverflow.com/questions/1804311/how-to-check-if-an-integer-is-a-power-of-3
*/

/* more easy way 
let x=n

while(x>1){
  x/=3

  if(x===1){
    return true
  }
  else{
    return fasle
  }
}
*/