/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length
    let orginalSum = (n*(n+1))/2;
    let sum = nums.reduce((sum,value)=>sum=sum+value,0)
    return orginalSum - sum;
    
};