/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    let sum1 = [...s].reduce((acc,value) => acc+ value.charCodeAt(0), 0);
    let sum2 = [...t].reduce((acc,value) => acc+value.charCodeAt(0), 0);
    let difference = sum2-sum1;
    return String.fromCharCode(difference)
};