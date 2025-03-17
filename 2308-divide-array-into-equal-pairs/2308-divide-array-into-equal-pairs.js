/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let pair = [];
    let used = new Array(nums.length).fill(false)
    for(let i=0;i<nums.length;i++){
        if(used[i]) continue;
        for(let j=i+1; j<nums.length;j++){
            if(!used[j] && nums[i] === nums[j]){
                pair.push([nums[i], nums[j]])
                used[i] = used[j] = true;
                break;
            }
        }
    }
    return pair.length === nums.length /2
};