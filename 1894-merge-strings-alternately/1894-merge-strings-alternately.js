/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let a = word1.length;
    let b = word2.length;
    let c = a  + b ;
    let result = "";
    for(let i = 0; i<c; i++)
    {
        if(i<a)
        {
            result = result.concat(word1[i]);
        }
        if(i<b)
        {
            result = result.concat(word2[i]);
        }
    }
    return result;
}