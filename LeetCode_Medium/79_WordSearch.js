/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  const wordLen=word.length
  let newWord=word.split('')
  let includeArray=[]
  let count=0
  board.forEach((arr,idx)=>{
      let i=0
      for(let i=0;i<4;i++){
          // console.log(arr[i])
      if(arr.includes(newWord[count])){
          // console.log(arr.indexOf(newWord[count]))
          }
      }
  })
  console.log(includeArray)
  if(includeArray.length===wordLen) return true
  return false
};