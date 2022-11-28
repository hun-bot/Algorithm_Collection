/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
 var findWinners = function(matches) {
  let countObj={}
  for (let [winner,loser] of matches){
      countObj[winner]=(countObj[winner] || 0)
      countObj[loser]=(countObj[loser] || 0)+1
  }
  let winner=[]
  let loser=[]
  for(let key in countObj){
      if(countObj[key]===0) winner.push(+key)
      if(countObj[key]===1) loser.push(+key)
  }
  return [winner,loser]
};