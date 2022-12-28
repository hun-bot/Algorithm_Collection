/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let leftSum=0
    let rightSum=0
    let total=nums.reduce((i,j)=>i+j,0)
    for(let i=0; i < nums.length; i++) {
        rightSum=total-nums[i]-leftSum
        if(rightSum===leftSum) return i
        leftSum+=nums[i]
    }
    return -1
};

pivotIndex([1,7,3,6,5,6])