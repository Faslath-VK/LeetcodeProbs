/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function(num) {
    let l = num.length-1
    for(let i=l ; i>=0 ;i--){
         
        if(num[i]>0){
              l = i
              break;
        }
    }
    return num.slice(0,l+1)
};