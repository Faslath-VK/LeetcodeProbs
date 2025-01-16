/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    
     let arr = word.split('');
     for(let i=0;i<arr.length;i++){
        if(arr[i]===ch){
          let str =  arr.slice(0,i+1).reverse().join('');
          return str+arr.slice(i+1).join('')
        }
     }
     return word
};