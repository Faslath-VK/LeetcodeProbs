/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var commonFactors = function(a, b) {
    let commonNum = 0;
    for(let i=0; i<=a,i<=b;i++){
        if(a%i==0 && b%i==0){
            commonNum++
        }
    }
    return commonNum
};