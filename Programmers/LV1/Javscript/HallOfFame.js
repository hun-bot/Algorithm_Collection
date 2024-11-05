function solution(k, score) {
  let fame = [];
  let res = [];
  let min=-1
  const helper=(point)=>{
    if(fame.length<k){
      fame.push(point);
      min=Math.min(...fame)
      res.push(min)
    }
    else{
      if(point>min){
        fame.splice(fame.indexOf(min),1)
        fame.push(point)
        min=Math.min(...fame)
        res.push(min)
      }
      else if(point<min){
        min=Math.min(...fame)
        res.push(min)
      }
      else{
        res.push(point)
      }
    }
  }
  score.forEach((i)=>{
    helper(i)
  })
  return res
}