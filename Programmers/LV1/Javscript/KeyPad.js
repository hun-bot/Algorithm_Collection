function solution(numbers, hand) {
  let res=[]
  const keypad = {
    1: [0, 0], 2: [0, 1], 3: [0, 2],
    4: [1, 0], 5: [1, 1], 6: [1, 2],
    7: [2, 0], 8: [2, 1], 9: [2, 2],
    '*': [3, 0], 0: [3, 1], '#': [3, 2]
  }
  let currentLeftFinger='*'
  let currentRightFinger='#'
  const helper=(lf,rf,num)=>{
    const left=Math.abs(keypad[lf][0]-keypad[num][0])+Math.abs(keypad[lf][1]-keypad[num][1])
    const right=Math.abs(keypad[rf][0]-keypad[num][0])+Math.abs(keypad[rf][1]-keypad[num][1])
    if(left===right) return hand==="right" ? "R":"L"
    return left > right ? "R":"L"
  }
  for (let i = 0; i < numbers.length; i++) {
    if(numbers[i]===1||numbers[i]===4||numbers[i]===7){
      res.push("L")
      currentLeftFinger=numbers[i]
    }
    else if(numbers[i]===3||numbers[i]===6||numbers[i]===9){
      res.push("R")
      currentRightFinger=numbers[i]
    }
    else{
      let finger=helper(currentLeftFinger,currentRightFinger,numbers[i])
      if(finger==='L') currentLeftFinger=numbers[i]
      if(finger==='R') currentRightFinger=numbers[i]
      res.push(finger)
    }
  }
  return res.join('')
}

solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right")