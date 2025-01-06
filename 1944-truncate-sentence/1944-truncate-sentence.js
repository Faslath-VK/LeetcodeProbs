/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let arr = s.split(" ");
    let arr1 = []
    for(let i=0;i<arr.length;i++){
        if(i<k){
            arr1.push(arr[i])
        }
    }
    return arr1.join(" ")
};