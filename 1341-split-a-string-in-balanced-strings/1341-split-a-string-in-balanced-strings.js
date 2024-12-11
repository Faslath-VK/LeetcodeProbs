/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    let a = 0;
    let b = 0;
    for(let i of s){
        if( i === 'R'){
            a++;
        }else if(i === 'L'){
            a--;
        }

        if(a===0){
           b++
        }
    }
    return b
};