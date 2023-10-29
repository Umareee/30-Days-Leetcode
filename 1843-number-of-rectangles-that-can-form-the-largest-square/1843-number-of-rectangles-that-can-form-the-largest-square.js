/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let min = rectangles.map(arr => Math.min(...arr));
    const countMap = min.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
}, {});
const maxValue = Math.max(...min);
const frequencyOfMaxValue = countMap[maxValue];
return frequencyOfMaxValue
};