/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let unique = nums.filter((value,index,self) => {
        return self.indexOf(value) === self.lastIndexOf(value)
    })
    let sum = unique.reduce((accumulator, current) => 
    {
        return accumulator + current
    },0)
    return sum
};