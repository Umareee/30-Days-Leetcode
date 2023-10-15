/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let n = s.length;
    let i = 0;
    let j = n - 1;

    let chars = s.split('');

    while (i < j) {
        if (!'aeiouAEIOU'.includes(chars[i])) {
            i++;
        } else if (!'aeiouAEIOU'.includes(chars[j])) {
            j--;
        } else {
            let temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
            i++;
            j--;
        }
    }
    return chars.join('');
};