/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    nums.sort((a,b)=> a-b)
    let arr = [];
    let count = 0;
    let i = 0;
  
    while(i < nums.length -1){
        if(nums[i]===nums[i+1]){
             count++;
             nums.splice(i,2)
        }else{
            i++
        }
       
    }
     arr.push(count, nums.length);
     return arr
};