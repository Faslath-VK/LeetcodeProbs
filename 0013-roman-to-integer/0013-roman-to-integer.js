/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanNumeral = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    let result = 0;
    for(let i=0;i<s.length;i++){
        const a = romanNumeral[s[i]]
        const b = romanNumeral[s[i+1]]
      if(a < b){
        result-=a
      }else{
        result+=a
      }
    }
    return result
};