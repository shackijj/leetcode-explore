/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
function findTargetSumWays(nums, S) {
    const memo = [];
    function calculate(i, sum) {
        if (i === nums.length) {
            if (sum === S) {
                return 1;
            } else {
                return 0;
            }
        } else {
            if (memo[i] && Number.isInteger(memo[i][sum + 1000])) {
                return memo[i][sum + 1000];
            } else {
                const add = calculate(i + 1, sum + nums[i]);
                const subtr = calculate(i + 1, sum - nums[i]);

                const result = add + subtr;
                if (!memo[i]) {
                    memo[i] = [];
                }
                memo[i][sum + 1000] = result;
                
                return result;
            }
        }
    }

    return calculate(0, 0);
}


module.exports = {findTargetSumWays};