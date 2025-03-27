/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let result = [[1]];
   
    for(let i=1;i<numRows;i++){
        let arr = [1];
        let prev = result[i-1]
       for(let j=1; j<prev.length;j++){
          arr.push(prev[j-1] + prev[j])
       }
       arr.push(1)
       result.push(arr)
    }
    return result
};