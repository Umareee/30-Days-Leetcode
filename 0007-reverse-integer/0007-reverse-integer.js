/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverse = 0;
    let digit = 0;
    while(x !== 0)
    {   
       digit = Math.trunc(x % 10);
        reverse = reverse * 10 + digit;
         x = Math.trunc(x / 10);  
    }
    if(reverse <= -Math.pow(2,31) || reverse >= Math.pow(2,31) - 1 ){
        return 0
    }
    return reverse;
};