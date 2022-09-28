var maxProfit = function(prices) {
  let min=10000000000
  let max=0
  for (let i = 0; i < prices.length; i++) {
    min=Math.min(min,prices[i])
    // [7,6,4,3,1] case min is 7 -> max(0,7-7) / min is 6 -> max(0,6-6) so min is required
    max=Math.max(max,prices[i]-min)
  }
  return max
};

maxProfit([2,4,1])