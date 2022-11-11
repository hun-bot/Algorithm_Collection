/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let m = new Map();
  for (let i = 0; i < s.length; i++) {
    m.set(s[i], m.get(s[i]) + 1 || 1);
  }
  let oddNum = 0;
  for (let value of m.values()) {
    if (value % 2 !== 0) {
      oddNum += 1;
    }
  }
  return oddNum > 0 ? s.length - oddNum + 1 : s.length;
};
