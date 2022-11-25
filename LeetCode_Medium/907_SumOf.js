let minValueArr=[]

var sumSubarrayMins = function(arr) {
  let total=arr.length
  let i=0
  let count=1
  
  let arrSpliced=JSON.parse(JSON.stringify(arr))
  let temp=arrSpliced.splice(i,count)
  helper(temp,count)
};

const helper=(temp,count)=>{
  let minValue=temp[0]
  if(temp>1){
    minValue=Math.min(...temp)
  }
  minValueArr.push(minValue)
  count++
  console.log(minValueArr);
}

sumSubarrayMins([3,1,2,4])