/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let arr2 = []
   for(let i=0 ; i<arr.length ; i++){
     if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])){
        arr2.push(arr[i])
     }
   }
   if(k>0 && k<=arr2.length){
      return arr2[k-1]
   }else{
    return ""
   }
};