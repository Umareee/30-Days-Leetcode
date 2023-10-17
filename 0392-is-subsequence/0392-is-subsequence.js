/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let m = s.length;
    let n = t.length;
    let check = 0;
    let arr1 = s.split('');
    let arr2 = t.split('');
    let i = 0;
    let j = 0;
    while(j < n)
    {
        if(arr1[i] == arr2[j])
        {
            check++;
            i++;
            j++;
        }
        else
        {
            j++;
        }
    }
    if(check == m)
        return true
    else
    return false

};