/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = new Map();
    // o(n)
    nums.forEach((num, idx) => {
        var ary = map.get(num)
        if (ary) {
            ary.push(idx)
        } else {
            map.set(num, [idx]);
        }
    });

    // o(n)
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        const diff = target - cur;

        const indices = map.get(diff);
        if (indices) {
            // O(2) since indices are unique
            for (idx of indices) {
                if (idx !== i) {
                    return [i, idx]
                }
            }
        }
    }
};
// Do we need all indices?
// Memory complexity
// O(1) + O(n)
// Can we do better?
module.exports = twoSum;
