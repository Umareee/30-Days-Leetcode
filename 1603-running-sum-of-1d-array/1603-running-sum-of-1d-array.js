/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = []
    for(let i = 0;i<nums.length;i++)
    {
          let n = 0;
        for(let j=0;j<=i;j++)
        {
            n+=nums[j]        
        }
           result.push(n)
    }
    return result
};