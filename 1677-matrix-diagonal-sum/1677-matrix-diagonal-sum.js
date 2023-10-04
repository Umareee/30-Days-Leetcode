/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
    let total = 0;
    let n = mat.length;
    for(let i=0;i<n;i++){
            let j = n - i - 1;     
            total += mat[i][i];
            mat[i][i] = 0;     
            total += mat[i][j];
    }
    return total;
};