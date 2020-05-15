function last(array) {
    return array[array.length - 1];
}

/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    const stack = [];
    const result = [];
    main: for(let i = T.length - 1; i >= 0; i--) {
        let next = last(stack);
        while(next !== undefined) {
            if (T[next] > T[i]) {
                stack.push(i)
                result.unshift(next - i);
                continue main;
            } else {
                stack.pop();
                next = last(stack);
            }
        }

        result.unshift(0);
        stack.push(i);
    }

    return result;
};

module.exports = dailyTemperatures;