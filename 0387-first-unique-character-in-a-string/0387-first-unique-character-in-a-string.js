/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = {};
    for(let x of s){
        if(!count[x]){
            count[x]=0;
        }
        count[x]++;
    }
    for(let i=0;i<s.length;i++){
        if(count[s[i]]===1){
            return i;
        }
        
    }
    return -1
};