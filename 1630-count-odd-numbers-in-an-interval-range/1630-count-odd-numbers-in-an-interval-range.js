/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let i = low;
    let j = high;
    let output = 0;
    for(i;i<=j;i++){
        if(i%2 != 0)
        {
            output++;
        }
    }
    return output;
};