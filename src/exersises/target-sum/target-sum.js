/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
function findTargetSumWays(nums, S) {
    let count = 0;
    let lastIdx = nums.length - 1;

    function dfs(idx, sum) {
        if (idx <= lastIdx) {
            dfs(idx + 1, sum + nums[idx]);
            dfs(idx + 1, sum - nums[idx]);
        } else {
            if (sum === S) {
                count++;
            }
        }
    }

    dfs(0, 0);

    return count;
};

// Can we do better?
// Time complexity is O(2^n) we visit each node 2 * level times
// How can we vistit a node exactly one.
module.exports = findTargetSumWays;