function solution(lottos, win_nums) {
  const lotto={
    6:1,5:2,4:3,3:4,2:5,1:6,0:6
  }
  let same=lottos.filter((i)=>win_nums.includes(i))
  let countZero=lottos.filter((i)=>i===0).length
  const max=same.length+countZero
  const min=same.length
  const res=[lotto[max],lotto[min]]
  return res
}

solution([44, 1, 0, 0, 31, 25],[31, 10, 45, 1, 6, 19])
