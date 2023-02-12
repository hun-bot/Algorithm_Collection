function solution(n, words) {
  let first=words[0]
  let count=1
  for (let i = 1; i < words.length; i++) {
    let player=i%n+1
    if(first.slice(-1)!==words[i][0]) return [player,count]
    if(words.findIndex(j=>j===words[i])!==i) return [player,count]
    first=words[i]
    if(player===n) count++
  }
  return [0,0]
}

solution(3,["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"])