/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
  const strLen=s.length
  let count1=0
  let count2=0
  let splited=s.toLowerCase().split('')
  let firstHalfArr=splited.splice(0,Math.floor(strLen/2))
  const vowels=['a','e','i','o','u']
  firstHalfArr.forEach((i)=>{
      if(vowels.includes(i)){
          count1++
      }
  })
  splited.forEach((i)=>{
      if(vowels.includes(i)){
          count2++
      }
  })
  return count1===count2
};