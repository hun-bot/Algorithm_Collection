var fizzBuzz = function(n) {
  let third="Fizz"
  let fifth="Buzz"
  let fifthteen="FizzBuzz"
  let ans=[]
  for(let i=1;i<=n;i++){
      if(i%3===0 && i%15!==0){
          ans.push(third)
      }
      else if(i%5===0 && i%15!==0){
          ans.push(fifth)
      }
      else if(i%15==0){
          ans.push(fifthteen)
      }
      else{
          ans.push(i.toString())
      }
  }
  return ans
};