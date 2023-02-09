//My Code
function isIsogram(str){
  str=str.toLowerCase()
  for(let i=0;i<str.length;i++){
    if(str.indexOf(str[i])!==i){
      return false
    }
  }
  return true
}

isIsogram("moose")

//Best 

function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}
