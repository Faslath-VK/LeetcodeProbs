/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let result = [];
    for(let i=0;i<operations.length;i++){
        if(operations[i] === "C"){
            result.pop()
        }else if(operations[i] === "D"){
            result.push(2*result[result.length-1])
        }else if(operations[i]==="+"){
            result.push(result[result.length-1] + result[result.length-2])
        }else{
            result.push(Number(operations[i]))
        }
    }

    let sum =  result.reduce((acc,cur)=>
            acc+cur
    ,0)
    return sum
};