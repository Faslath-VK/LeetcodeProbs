/**
 * @param {string} num
 * @return {boolean}
 */
var isBalanced = function(num) {
    let evenSum = 0;
    let oddSum = 0;
    for(let i=0;i<num.length;i++){
        // let digit = parseInt(num[i])
        if(i%2==0){
           evenSum+=parseInt(num[i])
        }else{
            oddSum+=parseInt(num[i])
        }
    }

    return evenSum === oddSum
};