var generate = function(numRows) {
  let result=[]

  for(let i=0;i< numRows;i++){
      let newArr=new Array(i+1)
      newArr[0]=1
      newArr[i]=1

      for(let j=1;j<i;j++){
          newArr[j]=result[i-1][j-1]+result[i-1][j]
      }
      result.push(newArr)
  }
  return result
};

// Must review