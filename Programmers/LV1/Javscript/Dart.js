function solution(dartResult) {
  let check = dartResult.match(/\d{1,2}[SDT][*|#]?/g)
  let res=[]
  for (let i = 0; i < 3; i++) {
    let num=check[i].match(/\d{1,2}/g)
    let bonus=check[i].match(/S|D|T/g)
    let option=check[i].match(/[*|#]?/g)
    if(bonus[0]==='S') num=+num
    else if(bonus[0]==='D') num=Math.pow(+num,2)
    else if(bonus[0]==='T') num=Math.pow(+num,3)
    if(option.includes('*')){
      num*=2
      if(i!==0){
        res[i-1]=res[i-1]*2
      }
    }
    else if(option.includes('#')){
      num*=-1
    }
    res.push(num)
  }
  return res.reduce((a,b)=>a+b)
}

solution("1S2D*3T")