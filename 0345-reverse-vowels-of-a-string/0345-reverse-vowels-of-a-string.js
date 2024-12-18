/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
   const vowels = 'aeiouAEIOU';
   const arr = s.split("");
   let vowelIndex = [];
   let vowelList = [];
  
   for(let i=0;i<arr.length;i++){
    if(vowels.includes(arr[i])){
        vowelIndex.push(i);
        vowelList.push(arr[i]);

    }
   }

   for(let i=0;i<vowelIndex.length;i++){
      const index = vowelIndex[i];
      arr[index] = vowelList.pop()
   }

   return arr.join('')

   


};