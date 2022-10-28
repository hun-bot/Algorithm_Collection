/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

// 세 점이 한 직선위에 있을 조건 (벡터)
 var checkStraightLine = function(coordinates) {
  if(coordinates.length===2) return true
const isStraight = (x, y, z) => (y[1] - x[1]) * (z[0] - y[0]) === (y[0] - x[0]) * (z[1] - y[1])
  
  for (let i = 1; i < coordinates.length - 1; i++)
      if (!isStraight(coordinates[i - 1], coordinates[i], coordinates[i + 1]))
          return false;
  
  return true;


};