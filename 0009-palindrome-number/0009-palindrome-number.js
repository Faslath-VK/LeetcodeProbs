/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x<0) return false
    let y = x.toString();
    let p = y.split("").reverse().join("");
    return y === p
};