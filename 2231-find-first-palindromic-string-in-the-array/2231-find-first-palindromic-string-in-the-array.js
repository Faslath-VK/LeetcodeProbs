/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i=0;i<words.length;i++){
        let w = words[i].toLowerCase().split('').reverse().join('');
        if(w===words[i]){
            return words[i]
        }
    }
    return ""
};