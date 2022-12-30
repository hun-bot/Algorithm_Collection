
function solution(answers) {
  const ex1=[1,2,3,4,5]
  const ex2=[2,1,2,3,2,4,2,5]
  const ex3=[3,3,1,1,2,2,4,4,5,5]
  let ans=[0,0,0]
  let res=[]
  answers.forEach((i,idx)=>{
    if(i===ex1[idx%ex1.length]) ans[0]+=1
    if(i===ex2[idx%ex2.length]) ans[1]+=1
    if(i===ex3[idx%ex3.length]) ans[2]+=1
  })
  console.log(ans);
  for (let i = 0; i < ans.length; i++) {
    if(Math.max(...ans)===ans[i]){
      res.push(i+1)
    }
  }
  console.log(res);
  return res
}

solution([1,2,3,4,5])