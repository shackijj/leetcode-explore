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

function last(ary) {
    return ary[ary.length - 1];
}

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    const added = new Set();
    
    let cur;
    while(tokens.length !== 0) {
        token = tokens.pop();
        if (isOp(token)) {
            if (!cur) {
                cur = new Op(token);
            } else {
                if (!added.has(cur)) {
                    stack.push(cur);
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
                prev = last(stack);
                if (!added.has(cur)) {
                    stack.push(cur);
                    added.add(cur);
                }
                cur = prev;
            }
        }
    }

    console.log(stack);
};


// think of (4 * 3) + (5 * 2)
// 3 4 * 2 5 * +

module.exports = evalRPN;
