function solution(n, arr1, arr2) {
  let res=[]
  arr1=arr1.map((e)=>{
    return e.toString(2).padStart(arr1.length,0)
  })
  arr2=arr2.map((e)=>{
    return e.toString(2).padStart(arr2.length,0)
  })
  for (let i = 0; i < arr1.length; i++) {
    arr1[i]=arr1[i].replaceAll(1,'#')
    arr2[i]=arr2[i].replaceAll(1,'#')
    let temp=''
    for (let j = 0; j < n; j++) {
      if(arr1[i][j]==='#'||arr2[i][j]==='#') temp+='#'
      else temp+=' '
    }
    res.push(temp)
  }
  return res
}

solution(5,[9, 20, 28, 18, 11],	[30, 1, 21, 17, 28])