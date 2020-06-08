/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const result = [0];

    for(let i = T.length - 1; i > 0; i--) {
        let cur = T[i];
        let prevIdx = i - 1;
        let prev = T[prevIdx];
        if (prev < cur) {
            result.unshift(1)
            continue;
        }
        let k = 0;
        while(k < result.length) {
            let next = result[k];
            let valIdx = i + next + k;
            if (prev < T[valIdx]) {
                result.unshift(valIdx - prevIdx);
                break;
            }
            if (next === 0) {
                result.unshift(0);
                break;
            }
            k += next;
        }
    }
    return result;
};

module.exports = dailyTemperatures;