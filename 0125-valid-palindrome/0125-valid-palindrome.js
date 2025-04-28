/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
    let rev=str.split("").reverse().join("");
    return str===rev
    
};