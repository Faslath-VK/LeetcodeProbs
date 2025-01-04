/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
   let sortedArr = names.map((value,index)=>({
     name : value,
     height : heights[index]
   }))
   sortedArr.sort((a,b)=>b.height - a.height);
     return sortedArr.map(person=> person.name)
};