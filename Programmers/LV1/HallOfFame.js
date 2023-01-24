function solution(k, score) {
  let len = score.length;
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
        let newMin=Math.min(...fame)
        res.push(newMin)
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

// solution(3, [10, 100, 20, 150, 1, 100, 200]);
solution(4,[0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]	)
