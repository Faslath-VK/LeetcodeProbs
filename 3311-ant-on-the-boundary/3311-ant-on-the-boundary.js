/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function(nums) {
    let count =0;
    let move = 0;
    for(let i=0;i<nums.length;i++){
        move = move + nums[i];
        if(move === 0){
            count++
        }
    }
    return count
};