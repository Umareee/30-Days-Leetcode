/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let j = n
     const result = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i], nums[j]);
        j++;
    }
    return result
};