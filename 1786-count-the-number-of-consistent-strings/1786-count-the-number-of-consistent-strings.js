/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    let count = 0;
    for(let i=0;i<words.length;i++){
         let consistent = true;
         
         for(let j=0;j<words[i].length;j++){
           if(!allowed.includes(words[i][j])){
                consistent = false;
                break;
            }
         }
           if(consistent){
            count++
           } 
     
    }
    return count;
};