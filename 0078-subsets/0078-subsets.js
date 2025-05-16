/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
   let output = [[]];
   for(let i=0;i<nums.length;i++){
    let subset = [];
    for(let j=0;j<output.length;j++){
        subset.push([...output[j],nums[i]])
    }
    output.push(...subset)
    }
    return output
};