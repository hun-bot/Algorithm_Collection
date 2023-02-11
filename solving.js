function abbrevName(name){
  let temp=name.split(' ')
  let res=''
  for (let i = 0; i < temp.length; i++) {
    res+=temp[i][0].toUpperCase()
    res+="."
  }
  return res.slice(0,-1)
}

abbrevName("Sam Harris")