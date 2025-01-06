/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let wordArr = s.trim().replace(/\s+/g," ").split(" ").reverse()
    return wordArr.join(" ")
};