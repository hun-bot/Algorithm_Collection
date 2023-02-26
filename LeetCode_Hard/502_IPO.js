/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function (k, w, profits, capital) {
  if(w>=Math.max(...capital)){
    profits.sort((a,b)=>b-a)
    return profits.slice(0,k).reduce((pre,cur)=>pre+cur,w)
  }
  for (let i = 0; i < k; i++) {
    let maxProfit=-Infinity
    let idx=-1

    for(let j=0;j<profits.length;j++) {
      if(w<capital[j]) continue
      if(profits[j]>=maxProfit){
        idx=j
        maxProfit=profits[j]
      }
    }
    if(idx===-1) break
    capital[idx]=Infinity
    w+=maxProfit
  }
  console.log(profits,capital);
  return w
};

// findMaximizedCapital(1, 0, [1, 2, 3], [1, 1, 2]);
findMaximizedCapital(10, 0, [1, 2, 3], [0, 1, 2]);
