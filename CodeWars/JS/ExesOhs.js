function XO(str) {
  let countO=str.match(/O/gi)
  let countX=str.match(/X/gi)
  if(countX===null && countO===null) return true
  else if(countO===null || countX===null){
    return false
  }
  else {
    return countO.length===countX.length
  }
}

XO("xooXm")
XO("zpzpop")
// XO("zooo")

function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}