/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 0;
    for(let i=0;i<sentences.length;i++){
      let w= sentences[i].split(' ');
      max = Math.max(max,w.length);
    }
    return max
};