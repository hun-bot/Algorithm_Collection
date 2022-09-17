/*
#두 정수 사이의 합
문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다..

가우스 공식 사용 (1~100 더하기)
S=1+2+3+4 ... +100
S=100+99+98+ ... +1
2S= 101*100
S= 101*50 = 5050

두 자연수의 a,b가 있을 때 a~b의 합은
(a+b)*(b-a+1)/2
*/
function solution(a, b) {
  return (a+b)*(Math.abs(b-a)+1)/2
}

/* 
음양 더하기
문제 설명
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 
이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 
실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

해결했지만 좋은 풀이가 아니였음 -> reduce로 해결하는 풀이를 가져옴
acc val i  initialValue는 0
 0   1  0 => 0 + (11 * (sign[0]이 참이면 1 거짓이면 -1)) = 11
 11  41 1 => 11 + (41 * 1) = 52
 52  22 2 => 52 + (22*-1) = 30
 30  3  3 => 30 + (3*-1) = 27
*/

function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
solution([11,41,22,3],[true,true,false,false])


/*
# 문자열 다루기 기본
문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
 
정규 표현식을 사용해서 숫자만 있는지 검사 + search 메서드
search -> 첫 번쨰로 매치되는 것의 인덱스를 반환, 없으면 -1
*/

function solution(s) {
  let a=s.search(/\D/g)
  return a < 0 && (s.length===4 || s.length ===6)
}

/*
이상한 문자 만들기
문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다. -> 이 의미가 공백이 되면 인데스가 다시 0이 된다는 소리

*/
//첫번째 풀이 -> 테스트를 돌려보면 18점.. 이유는 제한사항에 공백을 기준으로 짝/홀 인덱스 판단조건 때문인것 같다
function solution(s) {
  let text=s.split('')
  let k=text.map((x,idx)=>idx%2===0? x.toUpperCase():x.toLowerCase()).join('')
  console.log(k);
  solution("try hello world")
}

/*두번째 풀이 (복습 필요) split(" ") -> 문자열이 배열로 변함 ( 공백은 " " 이런식으로 배열에 들어가있음)
아래 메서들을 따로따로 선언하면 안됨 map((w)=>w.split("").map 이 부분에서 배열로 나눠진 단어중에 첫번째 단어부터 하나씩 -> idx와 같이 순서대로 증가하다가
중간에 공백을 만나면 idx 초기화 됨
*/
function solution(s) {
    return s.split(" ")
    .map((w)=>w.split("").map((x,idx)=>(
    idx%2===0? x.toUpperCase():x.toLowerCase()
    )
    ).join("")
    )
    .join(" ")
}
