/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(' ')
    let str = ''
    for(let i=0;i<arr.length;i++){
       str += arr[i].split('').reverse().join('')
       if(i < arr.length -1){
           str += " "
       }
    }
    return str
};