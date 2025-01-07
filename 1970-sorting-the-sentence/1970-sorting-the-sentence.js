/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(" ");
    
    let arr2 = arr.map(value => {
        let index = parseInt(value.slice(-1));
        let words = value.slice(0,-1);
        return { word: words , index: index}
    })
     arr2.sort((a,b)=> a.index-b.index);
     let sortedStr = arr2.map(value=> value.word).join(' ')
     return sortedStr
};