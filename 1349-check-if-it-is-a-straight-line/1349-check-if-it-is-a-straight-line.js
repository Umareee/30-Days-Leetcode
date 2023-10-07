/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
   let n = coordinates.length;
   if(n <= 2)
   {
      return true;
   }
    let [x1, y1] = coordinates[0];
    let [x2, y2] = coordinates[1];
    for(let i = 2; i < n;i++)
    {
       let [x,y] = coordinates[i];
       let m = (y2 - y1) * (x - x1) - (y - y1) * (x2 - x1);
       if(m !== 0)
       {
         return false;
       }
    }
   return true;
};