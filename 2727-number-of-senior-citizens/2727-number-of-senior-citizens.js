/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    let age;
    let count = 0 ;
    for(let i = 0 ; i < details.length ; i++){
        age = details[i].slice(11,13)
        if(age > 60 ){
           count++
        }
    }
    return count
};