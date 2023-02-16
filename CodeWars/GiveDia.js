function diamond(n){
  if(n===1) return '*\n'
  if(n<3||n%2===0) return null
  let ans=''
  let temp=''
  let half=Math.floor(n/2)+1
  for (let i = 1; i <= n; i++) {
    temp = i <= half ? i : n-i+1
    ans+=' '.repeat(half-temp)+'*'.repeat(2*temp-1)+'\n'
  }
  console.log(ans);
  return ans;
}

diamond(5)

function diamond (n) {
  if (n <= 0 || n % 2 === 0) return null
  str = ''
  for (let i = 0; i < n; i++) { 
    let len = Math.abs((n-2*i-1)/2)
    str += ' '.repeat(len)
    str += '*'.repeat(n-2*len)
    str += '\n'
  }
  return str
}