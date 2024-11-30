/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    let arr = s.trim().replace(/\s+/g,' ').split(' ');
    for(let i=0 ; i< arr.length ;i++){
        if(arr[i]!=''){
            return arr.length
        }
        else{
            return 0
        }
    }
   
};