var nearestValidPoint = function (x, y, points) {
  let temp=[]
points.map((e) => {
  if (x === e[0] || y === e[1]) {
    temp.push(Math.abs(x - e[0]) + Math.abs(y - e[1]))
  }
  else{
      temp.push("Not Vaild")
  }
});
let min = 1000000000;
let idx = 0;
for (let i = 0; i < temp.length; i++) {
  if (min > temp[i]) {
    min = temp[i];
    idx = i;
  }
}
if(min==1000000000) return -1
return idx;
};