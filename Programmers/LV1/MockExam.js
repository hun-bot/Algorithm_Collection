
function solution(answers) {
  const ex1=[1,2,3,4,5]
  const ex2=[2,1,2,3,2,4,2,5]
  const ex3=[3,3,1,1,2,2,4,4,5,5]
  let ans=[]
  let ansObj={}
  answers.forEach((i,idx)=>{
    if(i===ex1[idx]){
      ans.push(1)
    }
    if(i===ex2[idx]){
      ans.push(2)
    }
    if(i===ex3[idx]){
      ans.push(3)
    }
  })
  console.log(ans);
  // ans.forEach((i)=>{
  //   ansObj[i]=(ansObj[i]||0)+1
  // })
  // console.log(ansObj);
}

solution([1,3,2,4,2])