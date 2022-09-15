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