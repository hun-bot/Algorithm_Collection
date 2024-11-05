// 숫자 문자열과 영단어 https://school.programmers.co.kr/learn/courses/30/lessons/81301
function solution(s) {
  let enWord = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }
    while(isNaN(s)){
      for(let i in enWord){
        if(s.includes(i)){
          s=s.replace(i,enWord[i])
        }
      }
    }
    const answer = Number(s);
    return answer;
}

solution("one11one")
