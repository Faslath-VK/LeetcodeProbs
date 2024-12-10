/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const p1 = paragraph.toLowerCase().replace(/[^a-z0-9\s]/g, ' ');

    const words = p1.split(" ");
    const bannedSet = new Set(banned);
    const count = {};
    for(let i of words){
        if(i &&!bannedSet.has(i)){
            count[i] = (count[i] || 0) +1
        }
    }
    let mostFrequentWord = '';
    let maxCount = 0;
    for (let i in count) {
        if (count[i] > maxCount) {
            mostFrequentWord = i;
            maxCount = count[i];
        }
    }

    return mostFrequentWord;
}
