/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  const obj={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
  const obj1 = {IV: 4,IX: 9,XL: 40,XC: 90,CD: 400,CM: 900};
  let temp=[0]
  let re=s.replace(/IV|IX|XL|XC|CD|CM/gi, (x) => temp.push(obj1[x]));
  let hap=temp.reduce((a,b)=>a+b)
  for (let i = 0; i < re.length; i++) {
    if(obj[re[i]]!==undefined){
      hap+=obj[re[i]]
    }
  }
  return hap
};
