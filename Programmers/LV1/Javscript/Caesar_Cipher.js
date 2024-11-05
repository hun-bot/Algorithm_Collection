/* 시저 암호 https://school.programmers.co.kr/learn/courses/30/lessons/12926 */

function solution(s, n) {
  let asciiCode=[]
  let res;
  for(let i=0;i<s.length;i++) {
    asciiCode.push(s.charCodeAt(i))
  }
  let chaged=checkAsciiCode(asciiCode,n)
  res=chaged.map((i)=>String.fromCharCode(i)).join('')
  console.log(res);
}
const checkAsciiCode=(asciiCode,n)=>{
  let chaged=asciiCode.map((i)=>{
    let plus=i+n
    if(i>64 && i<91 && i+n>90){
      i=64
      i+=plus-90
    }
    else if(i>96 && i<123 && i+n > 122){
      i=96
      i+=plus-122
    }
    else if(i===32){
      i=32
    }
    else{
      i+=n
    }

    return i
  })
  return chaged
}

// solution("AB",1)
// solution("z",1)
// solution("a B z",4)
solution("A a Z z",25)
