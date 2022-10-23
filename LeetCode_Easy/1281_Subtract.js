var subtractProductAndSum = function(n) {
  let str=n.toString().split('')
  let pro=str.reduce((pre,cur)=>Number(pre)*Number(cur))
  let sum=str.reduce((pre,cur)=>Number(pre)+Number(cur))
  return pro-sum
}