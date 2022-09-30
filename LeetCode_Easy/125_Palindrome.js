var isPalindrome = function(s) {
  let reg = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
  let blank=/ /gi;
  let t=s.split(' ').join()
  let ordered=t.replace(reg,'').toLowerCase()

  let rever=s.split('').reverse().join('')
  rever=rever.replace(blank,'')
  let reverStr=rever.replace(reg,'').toLowerCase()
  // console.log(ordered,reverStr);
  if(ordered===reverStr){
    return true
  }
  return false
};

isPalindrome("A man, a plan, a canal: Panama")