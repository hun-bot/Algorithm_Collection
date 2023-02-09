//My code
function accum(s) {
	let repeatNum=s.length
  let res=""
  s.toLowerCase()
  for(let i=1;i<=repeatNum;i++){
    res+=s[i-1].toUpperCase()
    res+=s[i-1].repeat(i-1)+"-"
  }
  res=res.slice(0,-1)
  return res
}

accum("RqaEzty")

//Best
function accum(s) {
	return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}