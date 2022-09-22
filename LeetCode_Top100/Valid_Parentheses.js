var isValid = function(s) {
  let sArr=s.split('')
  const hash={
    '(':')',
    '{':'}',
    '[':']',
  }
  let ans=sArr.reduce((pre,cur)=>{
    if(cur===hash[pre[pre.length-1]]){
      pre.pop()
    }
    else{
      pre.push(cur)
    }
    return pre
  },[])
  return ans.length===0? true:false
};

isValid("{}()")