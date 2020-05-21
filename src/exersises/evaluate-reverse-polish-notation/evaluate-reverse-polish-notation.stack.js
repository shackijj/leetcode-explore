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


function Op(op) {
    this.lhs = null;
    this.rhs = null;
    this.op = op;
}

function Value(val) {
    this.val = parseInt(val);
}

function findNotFilled(stack) {
    for (let i = stack.length - 1; i >= 0; i--) {
        const cur = stack[i];
        if (cur.lhs === null || cur.rhs === null) {
            return cur;
        }
    }
}

/**
 * TODO: use stack for storing unfilled operations
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operations = [];
    const added = new Set();
    
    let cur;
    while(tokens.length !== 0) {
        token = tokens.pop();
        if (isOp(token)) {
            if (!cur) {
                cur = new Op(token);
            } else {
                if (!added.has(cur)) {
                    operations.push(cur);
                    added.add(cur);
                }

                if (!cur.rhs) {
                    cur.rhs = new Op(token);
                    cur = cur.rhs;
                } else {
                    cur.lhs = new Op(token);
                    cur = cur.lhs;
                }
            }
        } else {
            const val = new Value(token);
            if (!cur.rhs) {
                cur.rhs = val;
            } else {
                cur.lhs = val;
                prev = findNotFilled(operations);
                if (!added.has(cur)) {
                    operations.push(cur);
                    added.add(cur);
                }
                cur = prev;
            }
        }
    }

    console.log(operations);
};

module.exports = evalRPN;
