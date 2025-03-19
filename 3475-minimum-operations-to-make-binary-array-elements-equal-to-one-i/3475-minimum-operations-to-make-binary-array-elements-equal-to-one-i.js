/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let count = 0;
    for(let i=0; i<nums.length-2;i++){
        if(nums[i] === 0){
        for(let j=i;j< i+3;j++){
            nums[j] = nums[j] === 0 ? 1 : 0
         }
         count++
        }
    }
    
   return nums.includes(0) ? -1 : count
};