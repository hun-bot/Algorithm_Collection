/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  let i = 0;
  let profit = 0;
  profits.sort((a, b) => a - b);
  capital.sort((a, b) => a - b);
  while (i < k) {
    if (w === 0) {
      profit += profits[0];
    }
    if (profit>0) {
      let idx = capital.lastIndexOf(profit);
      if(idx!==-1){
        capital[idx] = "used";
        profit += profits[idx];
        profits.splice(idx,1,'used')
      }
      else{
        
      }
      i++;
    }
  }
  console.log(capital, profits);
};

findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]);
