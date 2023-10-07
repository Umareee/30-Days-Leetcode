/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let result = [];
    let rem = 0;
    let check = 1;
    for(let i = left ; i<=right;i++)
    {
        let x = i; 
      while(x > 0)
      {
          rem = Math.floor(x % 10);
          if(rem == 0 || i % rem != 0)
          {
               check = 0;
               break;
          }
          x = Math.floor(x / 10);
      }
      if(check == 1)
      {
       result.push(i);
      }
       check = 1;
    }
    return result;
};