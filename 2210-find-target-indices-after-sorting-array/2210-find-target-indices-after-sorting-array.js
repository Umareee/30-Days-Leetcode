/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
 let result = [];
    if(!nums.includes(target)) return result;
    let sortedArr = nums;
    sortedArr.sort((a,b) => a-b);
    let left = 0;
    let right = sortedArr.length-1;
    let start = -1;
    let end = -1;

    while(left <= right){
        let mid = Math.round((right + left) / 2);
        if(sortedArr[mid] === target){
            start = mid-1;
            end = mid+1;

            result.push(mid)
            while(sortedArr[start] === target){
                result.push(start)
                start -= 1
            }
            while(sortedArr[end] === target){
                result.push(end)
                end += 1
            }
            break;
        }else if(sortedArr[mid] < target){
            left = mid+1;
        }else if(sortedArr[mid] > target){
            right = mid-1;
        }
    }
    return result.sort((a,b) => a-b)
};