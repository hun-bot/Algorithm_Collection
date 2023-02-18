//6kyu https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript
function inArray(array1,array2){
  let exist=new Set()
  array1.forEach((word)=>{
    array2.map((i)=>{
      if(i.includes(word)===true){
        exist.add(word)
      }
    })
  })
  let ans=[...exist]
  return ans.sort()
}

function inArray(array1,array2){
  return array1
    .filter(a1 => array2.find(a2 => a2.match(a1)))
    .sort()
}

inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"])
inArray(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"])