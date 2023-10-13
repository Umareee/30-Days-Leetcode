/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies ,max = Math.max(...candies)) {

   return  candies.map(candy => candy + extraCandies >= max)
}