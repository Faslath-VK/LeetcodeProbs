/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let count ={};
    for(let i of magazine){
        count[i]=(count[i] || 0)+1
    }
    for(let i of ransomNote){
        if(!count[i] || count[i]===0){
            return false
        }
        count[i]--
    }
    return true
};