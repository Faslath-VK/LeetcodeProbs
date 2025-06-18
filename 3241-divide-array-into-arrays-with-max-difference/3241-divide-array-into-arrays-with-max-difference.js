/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
     nums.sort((a,b) => a-b);
     let output = [];
     for(let i=0;i<nums.length; i+=3){
        let arr = [nums[i], nums[i+1], nums[i+2]];
        if(arr[2]-arr[0] <= k){
            output.push(arr);

        }else{
            return []
        }
     }

     return output;
};