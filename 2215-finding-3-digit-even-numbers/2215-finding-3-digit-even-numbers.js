/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let threeDig = new Set();
    for(let i=0;i<digits.length;i++){
        if(digits[i] === 0) continue;
        for(let j=0; j<digits.length;j++){
            if(i===j) continue;
            for(let k=0;k<digits.length;k++){
                if(k===i || k===j) continue;

                let digit = `${digits[i]}${digits[j]}${digits[k]}`
                if(digit%2===0 )
                  threeDig.add(Number(digit))
            }
        }
    }
    return Array.from(threeDig).sort((a,b) => a-b)
};