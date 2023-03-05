function findOdd(A) {
  let check={}
  A.forEach((i)=>{
    check[i]=(check[i]||0)+1
  })
  console.log(check);
  for (const key in check) {
    if(check[key]%2!==0) return Number(key)
  }
  return false
} 
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])