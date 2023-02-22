/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  let totalWeight=weights.reduce((pre,cur)=>pre+cur)
  let maxWeight=Math.max(...weights)

  let max=maxWeight
  let reckoning=totalWeight

  while(max<reckoning){
    let checkCapacity=Math.floor((max+reckoning)/2)
    let packedWeights=0,neededDays=1
    for (const w of weights) {
      packedWeights+=w
      if(packedWeights>checkCapacity){
        neededDays++
        packedWeights=w
      }
    }
    if(neededDays>days) max=checkCapacity+1
    else reckoning=checkCapacity
  }
  return reckoning
};
shipWithinDays([1,2,3,4,5,6,7,8,9,10],5)