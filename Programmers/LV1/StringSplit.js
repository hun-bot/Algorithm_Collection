/* 문자열 나누기 https://school.programmers.co.kr/learn/courses/30/lessons/140108 */

let count = 0;
function solution(s) {
  let lenArr = [];
  let xCount = 0;
  let notXcount = 0;
  let sArr = s.split("");
  while (sArr.length > 0) {
    checkArr(sArr,lenArr,xCount,notXcount)
    if(sArr.length===1) {
      count++
      break
    }
    if(count===0){
      count++
      break
    }
  }
  return count
}

const checkArr=(sArr,lenArr,xCount,notXcount)=>{
  for (let i=0;i<sArr.length;i++) {
    let x = sArr[0];
    if (sArr[i] === x) {
      xCount += 1;
    } else {
      notXcount += 1;
    }
    if (xCount === notXcount) {
      helper(sArr, lenArr, xCount + notXcount);
      xCount = 0;
      notXcount = 0;
    }
  }
}
const helper = (sArr, lenArr, hap) => {
  for (let i = 0; i < hap; i++) {
    lenArr.push(sArr.shift());
  }
  count++
};

// solution("banana");
// solution("qqqqdddwwwwcccc")
// solution("abracadabra")
// solution("aaabbaccccabba")
