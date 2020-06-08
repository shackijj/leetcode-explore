function isOp(op) {
    switch (op) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

function doOp(op, lhs, rhs) {
    switch (op) {
        case '+':
            return lhs + rhs;
        case '-':
            return lhs - rhs;
        case '*':
            return lhs * rhs;
        case '/':
            return Math.trunc(lhs / rhs);
    }
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []

    while (tokens.length !== 0) {
        const next = tokens.shift();
        if (isOp(next)) {
            const rhs = stack.pop();
            const lhs = stack.pop();
            const result = doOp(next, lhs, rhs);
            stack.push(result)
        } else {
            stack.push(parseInt(next))
        }
    }

    return stack[0];
};


// think of (4 * 3) + (5 * 2)
// 3 4 * 2 5 * +

module.exports = evalRPN;
