var isSubsequence = function(s, t) {
  if(s.length>t.length) return false
  let subsequence=0
  for (const i of t) {
    if(s[subsequence]===i){
      subsequence++
    }
  }
  return subsequence===s.length
};

isSubsequence("abc","ahbgdc")