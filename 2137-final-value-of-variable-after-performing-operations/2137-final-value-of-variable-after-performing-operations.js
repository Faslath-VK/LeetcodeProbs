/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let value = 0;
    for(let i = 0 ;i<operations.length ; i++){
        if(operations[i]==='++X' || operations[i]==='X++'){
            value +=1
        }else if(operations[i]==='--X' || operations[i]==='X--'){
            value -= 1
        }
    }
    return value
};