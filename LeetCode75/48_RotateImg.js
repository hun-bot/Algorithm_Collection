var rotate = function(matrix) {
  for (let i=0; i<matrix.length;i++){
      for(let j=i;j<matrix.length;j++){
          let temp=matrix[i][j]
          matrix[i][j]=matrix[j][i]
          matrix[j][i]=temp
      }
  }
  matrix.forEach((e)=>e.reverse())
}

/*
조건 X 푼거 (조건은 다른 배열에 할당 X)
 var rotate = function(matrix) {
  let ans=[]
  for(let i=0;i<matrix.length;i++){
      let newArr=[]
      for(let j=0;j<matrix.length;j++){
          newArr.push(matrix[j][i])
      }
      ans.push(newArr)
  }
  let re=ans.map(e=>e.reverse())
  console.log(re)
  return re
}
*/