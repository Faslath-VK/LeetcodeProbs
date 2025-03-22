/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let output = [];
    for(let i=0 ; i<nums1.length; i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]===nums2[j] && !output.includes(nums1[i])){
                output.push(nums1[i])
            }
        }
    }
    return output
};