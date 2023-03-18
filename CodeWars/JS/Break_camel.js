// complete the function
function solution(string) {
  let str=[]
  for (const i in string) {
    if(/[A-Z]/g.test(string[i])){
      str.push(string[i])
      string=string.replace(string[i],`**`)
    }
  }
  str.forEach((i)=>string=string.replace('**',' '+i))
  return string
}
solution("governmentProblemPoint")

function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

// complete the function
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

function solution(string){
  return string.replace(/[A-Z]/g, function(c){return " " + c;});
}