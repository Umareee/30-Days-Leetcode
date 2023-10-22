/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let ans = [];
    let j = 2;
    // let i = 0;
    let n = nums.length;
    while(j != 0)
    {
        nums.forEach((i) => ans.push(i))
        j--;
    }
    return ans
};