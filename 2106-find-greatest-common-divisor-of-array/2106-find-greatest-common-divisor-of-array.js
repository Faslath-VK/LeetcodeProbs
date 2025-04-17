/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
      let small = Math.min(...nums);
    let large = Math.max(...nums);
    let arr = []
    for(let i=0;i<=small,i<=large;i++){
        if(small%i===0 && large%i ===0){
            arr.push(i)
        }
    }
    return Math.max(...arr)
};