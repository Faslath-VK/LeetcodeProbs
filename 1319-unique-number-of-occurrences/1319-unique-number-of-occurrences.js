/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let count = {};
    for(let i of arr){
        count[i] = (count[i] || 0)+1
    }
    
    let newArr =[];
    
    for(let i in count){
        newArr.push(count[i])
    }

    for(let i=0; i<newArr.length ;i++){
        for(let j=i+1 ; j<newArr.length ; j++){
            if(newArr[i]===newArr[j]){
                return false
            }
        }
    }
    return true;


};