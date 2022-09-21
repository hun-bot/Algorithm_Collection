
/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters.
No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true

Isomorphic = 동형
예시들을 보면 egg => 122 add => 122 | e=>a , g=>d 동형
foo => 122 bar => 123 | f=>b o=>a o=>r 비동형
paper => 12134 title => 12134 | p=>t a=>i er=>le 동형
*/
var isIsomorphic = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    if(s.indexOf(s[i])!==t.indexOf(t[i])){
      return false
    }
  }  
    return true
}

