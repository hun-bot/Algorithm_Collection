function solution(s) {
  return s.toLowerCase().replace(/(^|\s)\S/g,i=>i.toUpperCase())
}

solution("3people unFollowed me");
