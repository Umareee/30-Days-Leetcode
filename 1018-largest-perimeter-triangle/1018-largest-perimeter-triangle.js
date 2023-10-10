/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    let arr=[0]
    let n = nums.length - 1;
    nums.sort((a,b)=>a-b)
    for(let i=0 ;i<=n ;i++){
        nums[i]+nums[i+1]-nums[i+2]>0 ?arr.push(nums[i]+nums[i+1]+nums[i+2]) :""
    }
    return Math.max(...arr)
};