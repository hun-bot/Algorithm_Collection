function solution(array, commands) {
  let res=[]
  for (let i = 0; i < commands.length; i++) {
    let copyArr=array.slice(commands[i][0]-1,commands[i][1])
    copyArr.sort((a,b)=>a-b)
    res.push(copyArr[commands[i][2]-1])
  }
  return res
}

solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]])