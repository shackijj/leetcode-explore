/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    // o(n)
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var found = map.get(target - num);
        if (found >= 0) {
            return [found, i];
        } else {
            map.set(num, i);
        }
    }
};
// Do we need all indices?
// Memory complexity
// O(1) + O(n)
// Can we do better?
module.exports = twoSum;
