/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let arr = []
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]%2 === 0 && nums[i]%3===0){
            arr.push(nums[i])
        }
    }
    if(arr.length === 0) return 0;
   return Math.floor((arr.reduce((sum,val) => sum+val, 0)) / arr.length)
};