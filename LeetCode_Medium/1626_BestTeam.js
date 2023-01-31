/**
 * @param {number[]} scores
 * @param {number[]} ages
 * @return {number}
 */
var bestTeamScore = function(scores, ages) {
  let save={}
  for (let i = 0; i < ages.length; i++) {
    if(!Object.hasOwn(save,ages[i])){
      save[ages[i]]=scores[i]
    }
    else{
      if(save[ages[i]]<scores[i]) save[ages[i]]=scores[i]
      else if(save[ages[i]]>scores[i]) continue
      else save[ages[i]]+=scores[i]
    }
  }
  
};

// bestTeamScore([1,3,5,10,15],[1,2,3,4,5])
// bestTeamScore([4,5,6,5], [2,1,2,1])
bestTeamScore([1,2,3,5],[8,9,10,1])