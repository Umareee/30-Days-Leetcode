/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let n = s.length;
    let i = 0;
    let j = n - 1;

    // Convert the string to an array to make swapping possible
    let chars = s.split('');

    while (i < j) {
        if (!'aeiouAEIOU'.includes(chars[i])) {
            i++;
        } else if (!'aeiouAEIOU'.includes(chars[j])) {
            j--;
        } else {
            // Swap vowels
            let temp = chars[i];
            chars[i] = chars[j];
            chars[j] = temp;
            i++;
            j--;
        }
    }

    // Convert the array back to a string
    return chars.join('');
};