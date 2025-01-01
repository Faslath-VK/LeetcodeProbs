/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let r1 = "qwertyuiop";
    let r2 = "asdfghjkl";
    let r3 = "zxcvbnm";
    let w = [];
    for(let word of words){
       if(wordInRow(word.toLowerCase(),r1) || wordInRow(word.toLowerCase(), r2) || wordInRow(word.toLowerCase(),r3)){
        w.push(word)
       }
    }   
       return w
    };
    function wordInRow(word , r){
        for(let x of word){
           if(!r.includes(x)){
            return false
           }
        }
        return true
    }