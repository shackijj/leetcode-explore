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


function Op(op, prev) {
    this.lhs = null;
    this.rhs = null;
    this.op = op;
    this.prev = prev;
}

Op.prototype.do = function doOp() {
    switch (this.op) {
        case '+':
            return this.lhs.val + this.rhs.val;
        case '-':
            return this.lhs.val - this.rhs.val;
        case '*':
            return this.lhs.val * this.rhs.val;
        case '/':
            return parseInt(this.lhs.val / this.rhs.val);
        default:
            throw new Error('unknown op');
    }
};

function Value(val) {
    this.val = parseInt(val);
}

function findPrevNotFilled(op) {
    while(op) {
        if (op.lhs === null || op.rhs === null) {
            return op
        } else {
            op = op.prev;
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
    
    let cur;
    while(tokens.length !== 0) {
        token = tokens.pop();
        if (isOp(token)) {
            if (!cur) {
                cur = new Op(token);
                operations.push(cur);
            } else {
                if (!cur.rhs) {
                    cur.rhs = new Op(token, cur);
                    operations.push(cur.rhs);
                    cur = cur.rhs;
                } else {
                    cur.lhs = new Op(token, cur);
                    operations.push(cur.lhs);
                    cur = cur.lhs;
                }
            }
        } else {
            const val = new Value(token);
            if (!cur) {
                return val.val;
            }
            if (!cur.rhs) {
                cur.rhs = val;
            } else {
                cur.lhs = val;
                prev = findPrevNotFilled(cur);
                cur = prev;
            }
        }
    }

    while(operations.length !== 0) {
        const curOp = operations.pop();
        const prev = curOp.prev;
        if (!prev) {
            return curOp.do();
        }
        if (prev.lhs === curOp) {
            prev.lhs = new Value(curOp.do());
        } else if (prev.rhs === curOp) {
            prev.rhs = new Value(curOp.do());
        }
    }
};

module.exports = evalRPN;
