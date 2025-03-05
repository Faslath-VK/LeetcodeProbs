/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
     let result = "";
    for (let i = 0; i < n; i++) {
        if(n%2 === 1){
            result += "p"; 
        }else{
            result += i < n-1 ? "p" : "z"
        }
        
    }
    return result;
};