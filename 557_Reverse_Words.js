var reverseWords = function(s) {
  let div=s.split(" ")
  let temp=[]
  for (let i = 0; i < div.length; i++) {
    temp.push(div[i].split('').reverse().join(''));
  }
  return temp.join(' ')
};

reverseWords("Let's take LeetCode contest")