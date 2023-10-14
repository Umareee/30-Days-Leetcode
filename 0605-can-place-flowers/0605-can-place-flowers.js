/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let a = flowerbed.length;
     
    if(a == 1 && flowerbed[0] == 0 || n == 0)
    {
        return true
    }
    else if(a == 1 && flowerbed[0] == 1)
    {
    return false;
    }
    if(flowerbed[0] == 0 && flowerbed[1] == 0)
         {
             n--;
             flowerbed[0] = 1;
         }
     for(let i = 1 ; i < a - 1; i++ )
     {
         if(flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1] == 0)
         {
             n--;
             flowerbed[i] = 1;
         }
        
     }
     if(flowerbed[a-1] == 0 && flowerbed[a-2] == 0)
         {
             n--;
             flowerbed[a-1] = 1;
         }
    if(n <= 0)
    {
        return true;
    }
    else 
    return false;
};