var average = function(salary) {
  let temp=salary.sort((a,b)=>a-b)
  temp.shift() 
  temp.pop()
  let aver=temp.reduce((pre,cur)=>pre+cur)
  return aver/temp.length
};