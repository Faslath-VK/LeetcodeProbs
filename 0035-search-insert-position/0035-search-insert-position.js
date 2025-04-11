/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0
    for(let i in nums){
        if(nums.includes(target)){
             index = nums.indexOf(target);
        }else{
            nums.push(target);
            nums.sort(function(a,b){return a-b});
            index = nums.indexOf(target)
        }
    }
    return index
};