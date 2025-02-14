/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    let target = [];
    for(let i=0;i<nums.length;i++){
        let arr = [];
        let position = index[i];

        for(let j=0,k=0; j<=target.length; j++){
            if( j=== position){
                arr[j] = nums[i];

            }else{
                arr[j]= target[k];
                k++;
            }
        }
        target = arr;
    }
    return target;
};