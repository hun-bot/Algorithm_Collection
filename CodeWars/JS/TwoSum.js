//6kyu https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/javascript
function twoSum(numbers, target) {
  let num={}
  for(let i=0;i<numbers.length;i++){
    console.log(num[target-numbers[i]]);
    if(num[target-numbers[i]]!==undefined) return [num[target-numbers[i]],i]
    else num[numbers[i]]=i
  }
}

function twoSum(numbers, target) {
  for (var i = 0; i < numbers.length-1; i++) {
      for (var j = i+1; j < numbers.length; j++) {
          if (numbers[i] + numbers[j] === target) return [i, j];
      }
  }
}

function twoSum(numbers, target) {
  for (i = 0; i < numbers.length; i++) {
    second = numbers.indexOf(target - numbers[i], i+1);
    if (second > i) {
      return [i, second];
    }
  }
}

twoSum([1234,5678,9012],14690)