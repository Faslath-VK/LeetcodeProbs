/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let n = nums.length
    let mergedArr = [];
    for(let i=0;i<2*n;i++){
        mergedArr.push(nums[i%n])
    }
    return mergedArr

};