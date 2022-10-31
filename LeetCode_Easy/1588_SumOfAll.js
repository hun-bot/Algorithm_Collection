var sumOddLengthSubarrays = function(arr) {
    let res=[]
    for(let i=0;i<arr.length;i++){
        let sum=0
        let count=0
        for(let j=i;j<arr.length;j++){
            count++
            sum+=arr[j]
            if(count%2!==0) res.push(sum)
        }
    }
    return res.reduce((pre,cur)=>pre+cur)
};