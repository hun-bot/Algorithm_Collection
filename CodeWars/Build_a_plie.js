// 6kyu https://www.codewars.com/kata/5592e3bd57b64d00f3000047/train/javascript
function findNb(m) {
  let total=0
  let n=0
  while(total<m){
    n++
    total+=n**3
  }
  return total === m ? n : -1
}

findNb(1071225)
findNb(91716553919377)