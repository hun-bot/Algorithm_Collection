function descendingOrder(n){
  if(n===0) return n
  return parseInt(n.toString().split('').sort((a,b)=>b-a).join(''))
}

descendingOrder(42145)