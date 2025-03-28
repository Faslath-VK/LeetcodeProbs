/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let numSet = new Set(nums)
    let output = [];
    for(let i=1;i<=nums.length;i++){
        if(!numSet.has(i)){
            output.push(i)
        }
    }
    return output
};