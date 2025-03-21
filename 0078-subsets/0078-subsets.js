/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let subarr  = [[]];
    for(let i=0;i<nums.length;i++){
        let newsubset = []
        for(let j=0;j<subarr.length;j++){
         
                newsubset.push([...subarr[j], nums[i]])
           
        }
        subarr.push(...newsubset)
    }
    return subarr
};