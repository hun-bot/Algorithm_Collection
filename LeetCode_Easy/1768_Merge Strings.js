/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
  let mergedWords="";
  for (let i = 0; i < Math.max(word1.length,word2.length); i++) {
    if(i<word1.length) mergedWords+=word1[i];
    if(i<word2.length) mergedWords+=word2[i];
  }
  return mergedWords
};

mergeAlternately('abc','pqr')
mergeAlternately('ab','pqrs')
mergeAlternately('abcd','pq')