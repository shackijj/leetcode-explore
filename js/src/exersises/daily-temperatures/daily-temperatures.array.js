/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const MAX = 70;
    const MIN = 30;
    let range = Array(MAX); // 30 100
    let result = [];
    for(let i = T.length - 1; i >= 0; i--) {
        let cur = T[i];
        range[cur - MIN] = i;
        let found = Infinity;
        for(let j = cur - MIN + 1; j <= MAX; j++) {
            if (range[j] && range[j] - i < found) {
                found = range[j] - i;
            }
        }
        result.unshift(found === Infinity ? 0 : found);
    }

    return result;
};

module.exports = dailyTemperatures;