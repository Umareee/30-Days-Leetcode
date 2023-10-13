/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
        let result = [];
        let max = Math.max(...candies)
        let n = candies.length
        for(let i = 0;i < n; i++)
        {
            if(candies[i]+extraCandies >= max)
            {
                result.push(true)
            }
            else{
                result.push(false)
            }
        }
        return result
};