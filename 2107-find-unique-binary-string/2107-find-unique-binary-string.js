/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    let n = nums.length;
    let str = "";
    for(let i=0; i<n; i++){
      
        str+= nums[i][i] === "0" ? "1" : "0";
      
    }
    return str
};