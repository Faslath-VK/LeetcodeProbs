/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let output = new Map()
    for(let i of strs){
         let sorted = i.split("").sort().join("");
         if(!output.has(sorted)){
            output.set(sorted, [])
         }
         output.get(sorted).push(i)
    }
    return Array.from(output.values())
};