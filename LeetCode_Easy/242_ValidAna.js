var isAnagram = function(s, t) {
  let ans=s.split('').sort().join('')
  let ant=t.split('').sort().join('')
  return ans===ant
};