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
    if (w === 0 && profit===0) profit += profits[0];
    if (profit>0) {
      let idx = capital.lastIndexOf(profit);
      if(idx!==-1){
        capital[idx] = null;
        profit += profits[idx];
        i++;
        profits.splice(idx,1,null)
      }
      else{
        let maxCapital=Math.max(...capital)
        // console.log(maxCapital);
        if(maxCapital<=profit){
          let maxIdx=capital.indexOf(maxCapital)
          capital[maxIdx] = null;
          profit+=profits[maxIdx]
          i++;
          profits.splice(idx,1,null)
        }
      }
      i++;
    }
  }
  // console.log(capital, profits, profit);
  return profit
};

findMaximizedCapital(3, 0, [1, 2, 3], [0, 1, 2]);
// findMaximizedCapital(2, 0, [1, 2, 3], [0, 1, 1]);
