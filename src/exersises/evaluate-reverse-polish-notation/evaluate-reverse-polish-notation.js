function isInt(num) {
    return Number.isInteger(parseInt(num, 10));
}

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
    lhs = parseInt(lhs, 10);
    rhs = parseInt(rhs, 10);
    switch (op) {
        case '+':
            return String(lhs + rhs);
        case '-':
            return String(lhs - rhs);
        case '*':
            return String(lhs * rhs);
        case '/':
            return String(parseInt(lhs / rhs));
    }
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    while(tokens.length !== 1) {
        for(let i = 0; i < tokens.length - 2; i++) {
            if (isOp(tokens[i + 2]) && isInt(tokens[i + 1]) && isInt(tokens[i])) {
                const result = doOp(tokens[i + 2], tokens[i], tokens[i + 1]);
                tokens[i] = String(result);
                tokens.splice(i + 1, 2);
                break;
            }
        }
    }
    return Number(tokens[0]);
};


// think of (4 * 3) + (5 * 2)
// 3 4 * 2 5 * +

module.exports = evalRPN;
